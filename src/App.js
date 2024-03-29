import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './pages/theme/Layout';
import UserManagement from './pages/UserManagement/UserManagement'
import AddUser from "./pages/UserManagement/AddUser";
import UserDetail from "./pages/UserManagement/UserDetail"
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import UserEdit from './pages/UserManagement/EditDetail';
import Login from './pages/Auth/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/user-management" element={<UserManagement />}/>
            <Route path="/user-management/add" element={<AddUser />}/>
            <Route path="/user-management/detail/:userId" element={<UserDetail />}/>
            <Route path="/user-management/edit/:userId" element={<UserEdit />}/>
            <Route path="/FAQ" element={<FAQ />}/>
            <Route path="/Contact" element={<Contact />}/>

          </Route>
          <Route path="/Login" element={<Login />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
