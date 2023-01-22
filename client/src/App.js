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
          {user ? <Home/>:<Write/>}
        </Route>
        <Route path="/settings">
          {user ? <Home/>:<Settings/>}
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/post/:postId">
          <Single/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        </Switch>
    </Router>
  );
}

export default App;
