import logo from './logo.svg';
import React, { useState, useContext} from "react";
import './App.css';
import ResponsiveAppBar from './parent/ResponsiveAppBar';
import SimpleAppBar from './SimpleAppBar';
import AdminPage from './parent/AdminPage';
import {Login} from './login_register/Login';
import {Register} from './login_register/Register';
import {Praxes} from './doctor/Praxes';
import { Appointments } from './doctor/Appointments';
import { DoctorStart } from './doctor/DoctorStart';
import AuthContext from './context/AuthContext'; //KELL EGY ILYEN CUCC
import { Link } from "react-router-dom";
import DoctorResponsiveAppBar from 'doctor/DoctorResponsiveAppBar';


function App() {
  const [currentForm, setCurrentForm] = useState('appointments');
 // const {userRole} = useContext(AuthContext);
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
}
/*

      {userRole === 'doctor' && <li><Link to="/admin">Praxes</Link></li>}
      {userRole === 'doctor' && <li><Link to="/cases">Cases</Link></li>}
      {userRole === 'admin' && <li><Link to="/appointments">Appointments</Link></li>}
      {userRole === 'admin' && <li><Link to="/admin">Admin</Link></li>}
      {userRole === 'admin' && <li><Link to="/admin">Admin</Link></li>}
        
      */


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
