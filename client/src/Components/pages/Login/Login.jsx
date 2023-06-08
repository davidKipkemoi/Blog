import { useRef } from "react";
import "./login.css";
import { useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios"

export default function Login() {
const {dispatch,isFetching} = useContext(Context);
const userRef = useRef()
const passwordRef = useRef() 

const handleSubmit = async (e)=>{
  e.preventDefault();
  dispatch({type:"LOGIN_START"});
  try {
    const res = await axios.post("https://safari-blog.onrender.com/auth/login", {
      username:userRef.current.value,
      password:passwordRef.current.value
    });
    dispatch({type:"LOGIN_SUCCESS", payload: res.data})
  } catch (err) {
    dispatch({type:"LOGIN_FAILURE"})
  }
};

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form onSubmit={handleSubmit} className="loginForm">
        <label>Username</label>
        <input ref= {userRef}  className="loginInput" type="text" placeholder="Enter your Username..." />
        <label>Password</label>
        <input ref= {passwordRef} className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
        <button type="submit" className="loginRegisterButton">Register</button>
    </div>
  );
}