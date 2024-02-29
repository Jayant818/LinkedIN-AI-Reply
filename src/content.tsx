import Model from "components/Model"
import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import { useState } from "react"

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/messaging*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  const [toShow, setShow] = useState(false)
  window.onload = function () {
    // Append the new button to the element with class name 'msg-form__contenteditable'
    var parentElement = document.querySelector(".msg-form__contenteditable")
    if (parentElement) {
      parentElement.addEventListener("click", function () {
        var newButton = document.createElement("button")

        newButton.style.width = "10px"
        newButton.style.height = "10px"
        newButton.style.transform = "rotate(45deg)"
        newButton.style.backgroundColor = "blue"
        newButton.style.position = "absolute"
        newButton.style.bottom = "10px"
        newButton.style.right = "10px"
        newButton.style.margin = "4px"

        newButton.addEventListener("click", function () {
          setShow(!toShow)
        })

        newButton.type = "button"
        parentElement.style.position = "relative"
        parentElement.appendChild(newButton)
      })
    } else {
      console.error("Parent element not found.")
    }
  }

  return <div className="">{toShow && <Model setShow={setShow} />}</div>
}

export default PlasmoOverlay
