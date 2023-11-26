import React, { useState } from "react";
import DoctorResponsiveAppBar from './DoctorResponsiveAppBar';
import Text from '@mui/material/ListItemText'
import { Cases } from "./Cases";

export const DoctorStart = (props) => {
  return (
    <div>
        <Cases></Cases>
    </div>
  );
}