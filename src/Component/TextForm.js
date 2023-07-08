import React from 'react'
import { useState } from 'react';
export default function TextForm(props) {
  const [text, settext] = useState(" ");
  const handleUp = () => {
    let newText = text.toUpperCase()
    settext(newText)
    props.showAlert("Converted to Uppercase","success")
  };


  const handleDo = () => {
    let newText = text.toLowerCase()
    settext(newText)
    props.showAlert("Converted to Lowercase","success")
  };
  const handleCopy = () => {
  
 navigator.clipboard.writeText(text)
 props.showAlert("You copy text","success")
  };


  const handleChange = (event) => {
    settext(event.target.value);
  };


  const handleCl = () => {
    let newText = ("")
    settext(newText)
    props.showAlert("You clear text","success")
  };
const extraSpace=()=>{
  let newText=text.split(/[ ]+/);
  settext(newText.join(" "))
  props.showAlert("You clear Spaces","success")
}



  return (
    <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h1>{props.heading}</h1>
      <div className="mb-3" >
        <textarea className="form-control" value={text} onChange={handleChange} style={{ backgroundColor: props.mode === 'dark' ? 'white' : 'dark' }} id="myForm" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} type="button" onClick={handleUp} className="btn btn-primary mx-2 my-2 ">UpperCase</button>
      <button disabled={text.length===0} type="button" onClick={handleDo} className="btn btn-secondary mx-2 my-2  ">LowerCase</button>
      <button disabled={text.length===0} type="button" onClick={handleCopy} className="btn btn-success mx-2  my-2 ">CopyCase</button>
      <button disabled={text.length===0} type="button" onClick={handleCl} className="btn btn-danger mx-2  my-2 ">ClearCase</button>
      <button disabled={text.length===0} type="button" onClick={extraSpace} className="btn btn-danger mx-2 my-2  ">Remove Extra Spaces</button>
      <div className="container my-3">
        <h2>Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words  {text.length}  character</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </div>
  )
}
