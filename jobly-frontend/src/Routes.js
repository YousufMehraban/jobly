import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SignUpForm from "./forms/SignUpForm";
import LogInForm from "./forms/LogInForm";
import Profile from "./forms/Profile";
import Mainpage from "./Mainpage";
import Jobs from "./jobs/Jobs";
import Companies from "./companies/Companies";
import CompanyJobs from "./companies/CompanyJobs";
import PrivateRoute from "./PrivateRoute";

const Routes = ({ logIn, signUp }) => {
  return (
    <div>
      <Switch>
        <PrivateRoute exact path="/jobs">
          <Jobs />
        </PrivateRoute>

        <PrivateRoute exact path="/companies">
          <Companies />
        </PrivateRoute>

        <PrivateRoute exact path="/companies/:handle">
          <CompanyJobs />
        </PrivateRoute>

        <PrivateRoute exact path="/profile">
          <Profile />
        </PrivateRoute>

        <Route exact path="/">
          <Mainpage />
        </Route>

        <Route exact path="/login">
          <LogInForm logIn={logIn} />
        </Route>

        <Route exact path="/signup">
          <SignUpForm signUp={signUp} />
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>

    // <div>
    //   {currentUser ? (
    //     <Switch>
    //       <Route exact path="/jobs">
    //         <Jobs />
    //       </Route>
    //       <Route exact path="/companies/:handle">
    //         <CompanyJobs />
    //       </Route>
    //       <Route exact path="/companies">
    //         <Companies />
    //       </Route>
    //     </Switch>
    //   ) : (
    //     <Switch>
    //       <Route exact path="/login">
    //         <LogInForm logIn={logIn} />
    //       </Route>
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //       <Route exact path="/signup">
    //         <SignUpForm signUp={signUp} />
    //       </Route>
    //       <Route exact path="/logout">
    //         <LogOut logOut={logOut} />
    //       </Route>
    //       <Redirect to="/" />
    //     </Switch>
    //   )}
    // </div>
  );
};

export default Routes;
