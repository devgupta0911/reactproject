import React,{useState}from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        //console.log("Button was clicked" + text)
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handleOnChange =(event) =>{
        //console.log("On change")
        setText(event.target.value)
    }
    const handleLowerClick=() =>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    const [text, setText]=useState('Enter the Text');
  return (
    <>
    <div className="container">
        <div className="mb-3"> 
            <h1>{props.heading} </h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="my box" rows="8"></textarea>
        </div>
        <button className="btn btn-dark mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-dark mx-1" onClick={handleLowerClick}>Convert to lower case</button>
    </div>
    <div className="container my-3">
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008*text.split(" ").length} Minutes to read the paragraph</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
