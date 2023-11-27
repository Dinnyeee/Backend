import React from "react";
import AdminResponsiveAppBar from "./AdminResponsiveNavbar";
import ListOfPraxes from "./ListOfPraxes";

export const AdminHome = (props) => {
  return (
    <div>
          <AdminResponsiveAppBar></AdminResponsiveAppBar>
          <ListOfPraxes></ListOfPraxes>
    </div>
          
  );
}