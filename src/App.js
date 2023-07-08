import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Alert from './Component/Alert';
import { useState } from 'react';
import About from './Component/About';
import { BrowserRouter, Route,  Routes } from "react-router-dom"



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  const handle = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "rgb(11 10 36)"
      showAlert('Dark mode', 'success')
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = "white"
      showAlert('Light mode', 'success')
    }
  }
  return (
    <>
   <BrowserRouter>
  
      <Navbar title=" Navbar" mode={mode} handle={handle} />
      <Alert alert={alert} />
      <div className="container my-3">
      
      <Routes>
      <Route exact path="/about" element={<About mode={mode}/>}   >
         
         </Route>

        <Route  exact path='/text' element={ <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}   >

        </Route>
       
        <Route  exact path='/' element={ <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert}/>}   >

        </Route>
         
             
            
       </Routes>

         
       
      </div>

      {/* <About mode={mode} /> */}
      
    
   </BrowserRouter>
    </>
  );
}

export default App;
