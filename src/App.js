import TopBar from "./Components/topbar/TopBar";
import Home from './Components/pages/home/Home/Home'
import Write from './Components/pages/Write/Write'
import  {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import About from "./Components/pages/About/About";
function App() {
  return (
    <Router>
      <TopBar/>
        <Switch>
        <Route exact path="/">
          <About/>
        </Route>
        <Route path="/write">
          <Write/>
        </Route>
        </Switch>
    </Router>
  );
}

export default App;
