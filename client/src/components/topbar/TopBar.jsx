
import { Link } from "react-router-dom";
import "./topbar.css"

import { useContext } from "react";
import { Context } from "../../context/Context";
export default function TopBar() {
    const {user, dispatch} = useContext(Context)

    const handleLogout =()=>{
        dispatch({
            type : "LOGOUT"
        })
    }
  return (
   <div className="top">
    <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
    <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">
               <Link className="link" to='/'>Home</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to='/sidebar'>About</Link>
            
            </li>
            <li className="topListItem">
            <Link className="link" to='/settings'>{
             user && "Settings"
            
            }
             
             </Link>
            </li>
            <li className="topListItem">
            <Link className="link" to='/write'>Write</Link>
            </li>
            <li className="topListItem" onClick={handleLogout}>{user && "Logout"}
            </li>
        </ul>
   </div>

    <div className="topRight">
        {
            user ? (
                <img 
                className="topImg" 
                src={user.profilePicture} alt="Background" />
            ) :   ( 
                <ul className="topList">
                    <li className="topListItem"> 

                    <Link className="link" to="/login"> Login </Link>
                    </li>

                    <li className="topListItem"> 
                    <Link className="link" to="/register">Register</Link>
                    </li>

                </ul>
            )
        }
       
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
    
    </div>
   </div>
  )
}
