import "./sidebar.css"
import img from "./about.jpg"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
export default function Sidebar() {
  const [cat , setCat] = useState([]);

  useEffect(()=>{
    const getCats = async ()=> {
      const res = await axios.get("/categories")
      setCat(res.data)
    
    }
    getCats();
  }, [])

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Us</span>
        <img src={img} alt=""/>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      <div className="sidebarItem">
       <span className="sidebarTitle">Categories</span>
       <ul className="sidebarList">
          {cat.map((c)=>(
            <Link to={`/?cat=${c.name}`} className="link"> 
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
       </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarsocial">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    
    </div>
  )
}
