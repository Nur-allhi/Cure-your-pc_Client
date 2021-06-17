import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { userData } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const { forLoggedInUser } = useContext(userData);
  const [loggedInUser] = forLoggedInUser;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email || sessionStorage.getItem("token") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
