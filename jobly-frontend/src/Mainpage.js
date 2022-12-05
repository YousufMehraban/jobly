import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Mainpage.css";
import userContext from "./helpers/userContext";

const Mainpage = () => {
  const { currentUser } = useContext(userContext);

  return (
    <div className="joblyHome">
      {currentUser ? (
        <>
          <h1> Welcome to Jobly {currentUser.username} </h1>
          <p>All jobs in one place, for your convenience!</p>
        </>
      ) : (
        <>
          <h1> Jobly</h1>
          <p>All jobs in one place, for your convenience!</p>
          <Link to="/login" className="btn btn-primary">
            Log In
          </Link>
          <Link to="/signup" className="btn btn-primary">
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
};

export default Mainpage;
