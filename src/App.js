
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./css/sb-admin-2.css";
import "./css/sb-admin-2.min.css";
import "./css/fontawesome-free/css/all.min.css";

import Dashboard from './Dashboard';
import User from './User';
import Usercreate from './Usercreate';
import ViewUser from './ViewUser';
import EditUser from './EditUser';
import Login from './Login';
import PortalLayout from './PortalLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/portal" element={<PortalLayout/>}>
      <Route path="dashboard" element={<Dashboard/>}></Route>
         <Route path="user" element={<User/>}></Route>
         <Route path="user/user_create" element={<Usercreate/>}></Route>
         <Route path="user/:id" element={<ViewUser/>}></Route>
         <Route path="user/:id/edit" element={<EditUser/>}></Route>
      </Route>
       
       </Routes>
      
   
    </BrowserRouter>
  );
}

export default App;


