
import ResponsiveAppBar from './ResponsiveAppBar';
import { CasesPage } from './CasesPage';
import { MyAppointments } from './MyAppointments';
import { useLocation } from 'react-router-dom'
import AdminPage from './AdminPage';
import React, { useState } from 'react';
import ListChild from './ListChild';


export const Parent = (props) => {
    let location = useLocation();
    let content;
    
  return (
    <div>
     
     <ResponsiveAppBar></ResponsiveAppBar>

        <h2>HomeSite</h2>
    </div>
  );
}