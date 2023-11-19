import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import AdminPage from './parent/Admin';



function App() {
  return (
  
    <div>
       <ResponsiveAppBar></ResponsiveAppBar>
        <AdminPage></AdminPage>
    </div>
  );
}

export default App;
