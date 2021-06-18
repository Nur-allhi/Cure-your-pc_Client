import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeMain from "./Components/Home/HomeMain/HomeMain";
import { createContext } from "react";
import { useState } from "react";
import Login from "./Components/Login/Login";
import NavBar from "./Components/Shared/NavBar/NavBar";
import Orders from "./Components/Dashboard/Orders/Orders";
import Admin from "./Components/Dashboard/Admin/Admin";
import PrivateRoute from "./Components/Login/PrivateRoute";
import AddTestimonials from "./Components/Dashboard/AddTestimonials/AddTestimonials";
import NotFound from "./Components/NotFound/NotFound";

export const userData = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [admin, setAdmin] = useState(false);

  return (
    <div className="App">
      <userData.Provider
        value={{
          forLoggedInUser: [loggedInUser, setLoggedInUser],
          forAdmin: [admin, setAdmin],
        }}
      >
        <Router>
          <NavBar />
          <Switch>
            <PrivateRoute path="/dashboard/orders">
              <Orders />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/addtestimonials">
              <AddTestimonials />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <HomeMain />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </userData.Provider>
    </div>
  );
}

export default App;
