import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import SimpleAppBar from './SimpleAppBar';
import AdminPage from './parent/Admin';
import {Login} from './Login';
import {Register} from './Register';
import {Praxes} from './Praxes';


function App() {
  return (
  
    <div>
       <SimpleAppBar></SimpleAppBar>
        <Praxes></Praxes>
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
