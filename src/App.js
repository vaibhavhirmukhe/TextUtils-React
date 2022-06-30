import './App.css';
import Navbar from './Components/Navbar';
import Textspace from './Components/Textspace';
import Alerts from './Components/Alerts';
import About from './Components/About';
import React , {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const toggleMode=()=>{
    if (mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","Success")
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor="#495057";
      showAlert("Dark mode has been enabled","Success")
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  return (
  <>
  <Router>
    <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>

    <Alerts alert={alert}/>

    <div className="container my-5">
    <Routes>
      <Route path="/about" element={<About title="About TextUtils" mode={mode}/>}> 
      </Route>   
      <Route path="/" element={<Textspace heading="Enter Any Text Below To Analyze" mode={mode} showAlert={showAlert}/>}> 
      </Route>
    </Routes>
    </div>

    {/* <div className="container my-5">
      <Textspace heading="Enter Any Text Below To Analyze" mode={mode} showAlert={showAlert}/>
    </div>

    <div className="container my-5">
      <About title="About Us" mode={mode}/>
    </div> */}
    </Router>
  </>
  );
}

export default App;
