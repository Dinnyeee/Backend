
import ResponsiveAppBar from './ResponsiveAppBar';
import { CasesPage } from './CasesPage';
import { MyAppointments } from './MyAppointments';
import { useLocation } from 'react-router-dom'
import AdminPage from './AdminPage';
import React, { useState } from 'react';
import ListChild from './ListChild';


export const Parent = (props) => {
    
  return (
    <div>
     
     <ResponsiveAppBar></ResponsiveAppBar>

        <CasesPage></CasesPage>
    </div>
  );
}