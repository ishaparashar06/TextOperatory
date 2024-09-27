import './App.css';
import React, {useState} from 'react'
import TextForm from './components/TextForm';
import Navbar from './components/Navbar'
import Alert from './components/Alert';
// import About from './components/About'
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [mode, setMode]=useState('light');
  const [alert, setAlert] = useState();

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#032e6c';
      showAlert("Success: Dark mode has been enbled", "primary");
      document.title="TextOperatory - Dark Mode";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Success: Light mode has been enbled", "success");
      document.title="TextOperatory - Light Mode";
    }
  }

  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title="TextOperatory" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>

      <div className="container my-3">
        {/* <Routes> */}

          {/* <Route exact path='/about' element={<About/>}></Route> */}

          {/* <Route exact path='/' element={ */}
            <TextForm heading="Write the Text to Analyze" 
            showAlert={showAlert} 
            mode={mode}/>
            {/* }> */}
          {/* </Route> */}
        {/* </Routes> */}
      </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
