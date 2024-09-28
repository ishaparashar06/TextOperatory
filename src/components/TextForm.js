import React, {useState} from 'react'

export default function TextForm(props) {
    const[text, setText] = useState("");
    // text = "new text"; //wrong way of updating text
    // setText("new text");  // correct way of updating text
    const handleUpClick = ()=>{
      // console.log("Uppercase was clicked " + text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase!", "info");
    }
    const handleClearText = ()=>{
      // console.log("Uppercase was clicked " + text);
      let newText = '';
      setText(newText)
      props.showAlert("Text Cleared!", "info");
    }

    const handleLoClick = ()=>{
      // console.log("Uppercase was clicked " + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to Lowercase!", "info");
    }

    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert("Initializing Audio...", "info");
    }

    const capitalize = () => {
      setText(text.charAt(0).toUpperCase(0) + text.slice(1));
      props.showAlert("Capitalized the text!", "info");
    }

    const handleOnChange = (event)=>{
      // console.log("On Change");
      setText(event.target.value)
    }
    return (
      <>
        <div className="container" style={{color:(props.mode==='light')? 'black': 'white'}}>
            <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" id="myBox" placeholder="Enter text here" value={text}  onChange={handleOnChange} rows="8" style={{backgroundColor:(props.mode==='light')? '#dae5f8': '#637697', color:(props.mode==='light')? 'black': 'white' } }></textarea>
          </div>
          <button className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Convert to Lowercase</button>
          <button className="btn btn-primary mx-1 my-1" onClick={capitalize}>Capitalize</button>
          <button className="btn btn-primary mx-1 my-1" onClick={speak}>Speak Aloud</button>
          
        </div>
        <div className="container my-3" style={{color:(props.mode==='light')? 'black': 'white'}}>
          <h2>Your Text Summary</h2>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
          <p>{0.008 * (text.split(/\s+/).filter((element)=>{return element.length!==0}).length)} minutes read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something in the textbox to preview here"}</p>
        </div>
      </>
  )
}