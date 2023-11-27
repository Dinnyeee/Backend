import { Grid } from "@mui/material";
import ListChild from "./ListChild";
import AddChild from "./AddChild";
import ResponsiveAppBar from "./ResponsiveAppBar";
import React, { useState } from "react";

export default function AdminPage(){

    
    return (
    <div> 
        <ResponsiveAppBar></ResponsiveAppBar>
        <ListChild></ListChild>
    </div>
    );
}
