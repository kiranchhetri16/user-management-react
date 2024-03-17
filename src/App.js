import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './pages/theme/Layout';
import UserManagement from './pages/UserManagement'
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/user-management" element={<UserManagement />}/>
            <Route path="/FAQ" element={<FAQ />}/>
            <Route path="/Contact" element={<Contact />}/>

          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
