import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./singlepost.css";
import { Link } from "react-router-dom";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split('/')[2]; 
  const PF = "http://localhost:9000/images/"

  const [post,setPost] = useState({})
  useEffect(()=>{
    const getPosts = async() =>{
      const res = await axios.get("/posts/"  + path )
      setPost(res.data)
    };getPosts();
  },[path]);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo &&  <img
          className="singlePostImg"
          src={PF+post.photo}
          alt=""
        />}
        
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"  ></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1> 
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/?user=${post.username}`}>
              {post.username}
              </Link>
              
            </b>
          </span>
          <div  className="singlePostDate" to=''>
          <span>{new Date(post.createdAt).toDateString()}</span>
          </div>
         
        </div>
        <p className="singlePostDesc">
         {post.desc}
        </p>
      </div>
    </div>
  );
}