import TopBar from "./Components/topbar/TopBar";
import Home from './Components/pages/home/Home/Home'
import Write from './Components/pages/Write/Write'
import  {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Login from "./Components/pages/Login/Login";
import Settings from "./Components/pages/Settings/Settings";
import Signup from "./Components/pages/Signup/Signup";
import Single from "./Components/pages/Single/Single";



function App() {
  const user = false;
  return (
    
    <Router>
      <TopBar/>
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/write">
          {user ? <Write/>:<Signup/>}
        </Route>
        <Route path="/settings">
          {user ? <Settings/>:<Signup/>}
        </Route>
        <Route path="/signup">
          {user ? <Home/>:<Signup/>}
        </Route>
        <Route path="/post/:postId">
          <Single/>
        </Route>
        <Route path="/login">
        {user ? <Home/>:<Login/>}
        </Route>
        </Switch>
    </Router>
  );
}

export default App;
