import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeMain from "./Components/Home/HomeMain/HomeMain";
import { createContext } from "react";
import { useState } from "react";
import Login from "./Components/Login/Login";
import NavBar from "./Components/Shared/NavBar/NavBar";
import Orders from "./Components/Dashboard/Orders/Orders";

import Admin from "./Components/Dashboard/Admin/Admin";

export const userData = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
      <userData.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <NavBar />
          <Switch>
            {/* <Route path="/dashboard">
              
            </Route> */}
            <Route path="/dashboard/orders">
              <Orders />
            </Route>
            <Route path="/dashboard/admin">
              <Admin />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <HomeMain />
            </Route>
          </Switch>
        </Router>
      </userData.Provider>
    </div>
  );
}

export default App;
