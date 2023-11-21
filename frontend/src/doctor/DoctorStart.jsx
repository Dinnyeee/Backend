import React, { useState } from "react";
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import DoctorResponsiveAppBar from './DoctorResponsiveAppBar';

export const DoctorStart = (props) => {
  return (
          <DoctorResponsiveAppBar></DoctorResponsiveAppBar>
  );
}