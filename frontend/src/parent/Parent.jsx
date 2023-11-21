
import ResponsiveAppBar from './ResponsiveAppBar';
import { CasesPage } from './CasesPage';
import { MyAppointments } from './MyAppointments';
import { useLocation } from 'react-router-dom'
import AdminPage from './AdminPage';


export const Parent = (props) => {
    let location = useLocation();
    let content;
    if(location.pathname == "parent/appointments"){
        content = <MyAppointments/>
    }
    else if(location.pathname == "parent/admin"){
        content = <AdminPage/>
    }
    else
    content = <CasesPage/>
    console.log(location.pathname);
  return (
    <div>
     
     <ResponsiveAppBar></ResponsiveAppBar>

        <div>
            {
            content
            }   
        </div>
    </div>
  );
}