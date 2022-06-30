import React ,{useState} from 'react'


export default function Textspace(props) {
    // dark mode using button
    // let myStyle={
    //     color: 'black',
    //     backgroundColor: 'white'
    // }
    
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     // border: '1px solid black'
    // })  
    // const [btnText, setBtnText] = useState("Dark Mode")
    // const toggleStyle=()=>{
    //     if(myStyle.color === "black"){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("Light Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Dark Mode");
    //     }
    // }

    const [text,setText]=useState("Enter text here") 
    // const [count,setCount]=useState("") //useState is react hooks concept
    // text = "happy" --> wrong way to change state
    // setText("happy"); //--> correct way to change state

    const handleUpClick=()=>{
        // console.log("click convert to uppercase")
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard","Success");
    }
    const handleClearClick=()=>{
        let newText=''
        setText(newText);
    }
    const handleOnChange=(event)=>{
        // console.log("On change")
        setText(event.target.value);
    }
  return (
    <div>
        <h1 style={{color: props.mode === "dark" ? "white" : "black" }}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#212529':'white',color: props.mode === "dark" ? "white" : "black" }} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button disabled={text.length===0} type="button" className="btn btn-primary my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
  )
}
