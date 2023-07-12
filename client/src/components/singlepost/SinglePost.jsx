import './singlePost.css'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from "axios"
export default function SinglePost() {

  const  locations = useLocation()
  const path = locations.pathname.split("/")[2]
  const [post, setPost] = useState({})

  useEffect(()=>{
          const getPost = async ()=>{
            const res = await axios.get("/posts/"+path)
            setPost(res.data)
          }
          getPost()
  },[path])
  return (
    <div className='singlePost'> 
       <div className="singlePostWrapper">
        {post.photo &&    <img className='singlePostImg' src={post.photo} alt='post'/> }
     
        <h1 className="singlePostTitle">{post.title}
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
        <i className="singlePostIcon fa-solid fa-trash"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
          <Link to={`/?user=${post.username}`} className='link'>           
          <span className='singlePostAuthor'>Author : <b>{post.username}</b></span> 
          </Link>
  
            <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
           {post.desc}
        </p>
       </div>
    </div>
  )
}
