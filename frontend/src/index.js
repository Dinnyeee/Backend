import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Praxes} from './doctor/Praxes';
import {Appointments} from './doctor/Appointments';
import {Register} from './login_register/Register';
import {Login} from './login_register/Login';
import {AddNewAppointmentForm} from './doctor/AddNewAppointmentForm';
import { DoctorStart } from './doctor/DoctorStart';
import { Parent } from './parent/Parent';
import { MyAppointments } from './parent/MyAppointments';
import AdminPage from './parent/AdminPage';
import { AdminHome } from './admin/AdminHome';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Cases } from './doctor/Cases';
import AddChild from 'parent/AddChild';
import EditChild from 'parent/EditChild';
import TestComponent from 'services/test';
import BookAppointment from 'parent/BookAppointment';
import AddCase from 'parent/AddCase';





const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/praxes",
    element: <Praxes/>
  },
  {
    path: "/appointments",
    element: <Appointments/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/addnewappointmentform",
    element: <AddNewAppointmentForm/>
  },
  {
    path: "/doctorstart",
    element: <DoctorStart/>
  },
  {
    path: "/cases",
    element: <Cases/>
  },
  {
    path: "/parent",
    element: <Parent/>,       //a default a case-es oldal lesz, így ennek nem kell külön route
  },
  {
    path: "/adminparent",
    element: <AdminPage/>
   },
  {
    path: "/myappointments",
    element: <MyAppointments/>
  },
  {
    path: "/addchild",
    element: <AddChild/>
  },
   {
    path: "/editchild",
    element: <EditChild/>
  },
  
  {
    path: "/test",
    element: <TestComponent/>
  },
    
  
  {
    path: "/addcase",
    element: <AddCase/>
  },
  {
    path: "/bookappointment",
    element: <BookAppointment/>
  },
  {
    path: "/administration",
    element: <AdminHome/>,
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
//registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
