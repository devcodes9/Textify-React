import React, { useState } from 'react'

export const TextForm = (props) => {
  const [text, setText] = useState("")
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleUpper = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const handleLower = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const wordCnt = () => {
    if(text[text.length - 1] === ' '){
      return text.split(" ").length - 1;
    }
    if(text.trim().length === 0){
      return 0;
    }

    return text.split(" ").length;
  }
  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="form-group mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpper}>Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLower}>Lowercase</button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{wordCnt()} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minute read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
    
  )
}
