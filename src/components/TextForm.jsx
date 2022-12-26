import React, { useState } from 'react'

export const TextForm = (props) => {
  const [text, setText] = useState("Enter text here")
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleUpper = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="form-group">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary my-3" onClick={handleUpper}>Uppercase</button>
    </div>
  )
}
