import { useState } from "react"

const Clippy = ({ message, setShowClippy}) => {
  const [transition, setTransition] = useState("fade-in")

  const changeClippyState = () => {
    setTransition(null)
    setTimeout(() => {
      setTransition("fade-out")
    }, 10)
    setTimeout(() => {
      setShowClippy(false)
    }, 350)
  }
  return (
    <div className="clippy-container" id={transition} onClick={() => changeClippyState()}>
      <div className="clippy-div">
        <img className="clippy-image" src="Clippy.png" alt="Image of clippy" />
        <div className="speech-bubble">
          {message}
        </div>
      </div>
    </div>
  )
}

export default Clippy