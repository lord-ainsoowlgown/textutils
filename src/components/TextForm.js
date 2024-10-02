import React, {useState} from 'react'


export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("Uppercase was clicked", text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  }

  const handleDownClick = () => {
    // console.log("Lowercase was clicked", text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  }

  const handleClearClick = () => {
    setText("");
    props.showAlert("Cleared text", "success");
  }

  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  }

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied to the clipboard", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra cases has been handled", "success");
  }

  const [text, setText] = useState('Enter text here');

  return (
    <>
      <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#3b3b3b' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-2" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter(word => word !== "").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter(word => word !== "").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text: "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  )
}
