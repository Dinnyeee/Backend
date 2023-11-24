import { Grid } from "@mui/material";
import ListChild from "./ListChild";
import AddChild from "./AddChild";
import ResponsiveAppBar from "./ResponsiveAppBar";
import React, { useState } from "react";

export default function AdminPage(){

     const [children, setChildren] = useState([
        { id: 1, name: "Mario", taj:1231  },
        { id: 2, name: "David", taj:1231  },
        { id: 3, name: "Marta", taj:1231  },
        { id: 4, name: "Mache", taj:1231  },
    ])
    return (
    <div> 
        <ResponsiveAppBar></ResponsiveAppBar>
        <ListChild children={children}></ListChild>
    </div>
    );
}
