import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import SimpleAppBar from './SimpleAppBar';
import AdminPage from './parent/Admin';
import {Login} from './login_register/Login';
import {Register} from './login_register/Register';
import {Praxes} from './doctor/Praxes';
import { Appointments } from './doctor/Appointments';


function App() {
  /*const [currentForm, setCurrentForm] = useState('appointments');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }*/
  return (
              
    <div className="App">
      
      <div>
        <Appointments></Appointments>
      </div>
        
    </div>
  );
}
/*function App() {
  return (
  
    <div>
       <ResponsiveAppBar></ResponsiveAppBar>
        <AdminPage></AdminPage>
    </div>
  );
}*/
/*
function App() {
  
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <div>
       <SimpleAppBar></SimpleAppBar>
      </div>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}*/

export default App;
