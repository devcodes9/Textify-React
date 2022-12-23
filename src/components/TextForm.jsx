import React from 'react'

export const TextForm = (props) => {
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="form-group">
        <textarea className="form-control" id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-3">Uppercase</button>
    </div>
  )
}
