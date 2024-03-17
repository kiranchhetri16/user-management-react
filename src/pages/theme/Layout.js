import Sidebar from "./Sidebar";
import Headers from "./Headers";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";



const Layout = () =>{
    return(
      <>
       <div class="navbar">
        <Headers />
    </div>
    <div class="main-wrappr">
        <div class="leftbar">
           <Sidebar />
        </div>
        <div class="container">
            <Outlet />
        </div>
    </div>
    <div class="footer">
        <Footer />
    </div>

      
      </>
    );
}
export default Layout;