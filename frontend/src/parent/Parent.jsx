
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
    const [children, setChildren] = useState([
        { id: 1, name: "Mario", taj:1231  },
        { id: 2, name: "David", taj:1231  },
        { id: 3, name: "Marta", taj:1231  },
        { id: 4, name: "Mache", taj:1231  },
    ])
  return (
    <div>
     
     <ResponsiveAppBar></ResponsiveAppBar>

        <h2>HomeSite</h2>
    </div>
  );
}