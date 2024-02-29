import { useState } from "react"

const Model = (props) => {
  const [prompt, setPrompt] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setPrompt(e.target.value)
  }

  const handleInsert = () => {
    const parentElement = document.querySelector(".msg-form__contenteditable")
    const placeholderElement = document.querySelector(
      ".msg-form__contenteditable + .msg-form__placeholder"
    )
    if (placeholderElement) {
      placeholderElement.remove()
    } else {
      console.error("Element not found.")
    }

    if (parentElement) {
      const firstParagraph = parentElement.querySelector("p")
      if (firstParagraph) {
        firstParagraph.textContent =
          "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."
      } else {
        console.error("No paragraph found in the parent element.")
      }
    } else {
      console.error("Parent element not found.")
    }
    props.setShow(false)
  }

  return (
    <div className="modal z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form className="bg-white p-8 rounded-lg shadow-lg w-52rem">
        <input
          type="text"
          placeholder="Enter your prompt"
          value={prompt}
          onChange={handleChange}
          className="block w-full mb-4 p-4 border border-gray-300 rounded"
        />
        {submitted && (
          <input
            type="text"
            value="Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."
            readOnly
            className="block w-full mb-4 p-4 border border-gray-300 rounded"
          />
        )}
        {!submitted ? (
          <button
            type="button"
            onClick={() => setSubmitted(true)}
            className="block w-full mb-4 p-4 bg-blue-500 text-white rounded hover:bg-blue-600">
            Regenerate
          </button>
        ) : (
          <>
            <button
              type="button"
              onClick={handleInsert}
              className="block w-full mb-4 p-4 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2">
              Insert
            </button>
            <button
              type="button"
              className="block w-full mb-4 p-4 bg-blue-500 text-white rounded hover:bg-blue-600">
              Regenerate
            </button>
          </>
        )}
      </form>
    </div>
  )
}

export default Model
