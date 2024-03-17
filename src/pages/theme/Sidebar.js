import { Link } from "react-router-dom";
const Sidebar = () =>{
    return(
        <div>
             {/* <h3>Side Bar</h3> */}
             <ul className="sidebar_nav">
                <li>
                    <Link to="/user-management">UserManagement</Link>
                </li>
                <li>
                    <Link to="/FAQ">FAQ</Link>
                     </li>
                <li> 
                    <Link to="/Contact">Contact</Link>
                    
                </li>
             </ul>
        </div>
    );
}
export default Sidebar;