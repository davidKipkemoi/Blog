import "./settings.css";
import Sidebar from '../../sidebar/Sidebar'
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Settings() {
const {user} = useContext(Context)
// const [username,setUsername] = useState('')
// const [email,setEmail] = useState('')
// const [password,setPassword] = useState('')
// const [success,setSuccess] = useState(false)
// const [file,setFile] = useState(null)

const handleSubmit = async (e) =>{
  e.prevent.default();

}

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete"><i className="settingsTitleDelete fa-sharp fa-solid fa-trash"></i> Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Username" name="name" />
          <label>Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password"  />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}