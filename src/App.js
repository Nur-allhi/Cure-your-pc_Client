import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/Shared/NavBar/NavBar";
import HomeMain from "./Components/Home/HomeMain/HomeMain";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/">
            <HomeMain />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
