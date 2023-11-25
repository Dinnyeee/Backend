import React, { useState } from "react";
import DoctorResponsiveAppBar from './DoctorResponsiveAppBar';
import Text from '@mui/material/ListItemText'

export const DoctorStart = (props) => {
  return (
    <div>
        <DoctorResponsiveAppBar></DoctorResponsiveAppBar>
        <Text>Please choose tab from the menu!</Text>
    </div>
  );
}