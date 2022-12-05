import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem, Navbar } from "reactstrap";
import userContext from "./helpers/userContext";
import "./NavBar.css";

const NavBar = ({ logOut }) => {
  const { currentUser } = useContext(userContext);

  return (
    <Navbar>
      <NavLink exact to="/" id="title">
        Jobly
      </NavLink>
      <Nav>
        {currentUser ? (
          <>
            <NavItem>
              <NavLink exact to="/jobs">
                Jobs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/companies">
                Companies
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/profile">
                User Profile
              </NavLink>
            </NavItem>
            <NavItem className="btn btn-outline-danger">
              <NavLink exact to="/logout" onClick={logOut}>
                LogOut
              </NavLink>
            </NavItem>
          </>
        ) : (
          <>
            (
            <NavItem>
              <NavLink exact to="/login">
                Log In
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/signup">
                Sign Up
              </NavLink>
            </NavItem>
          </>
        )}
      </Nav>
    </Navbar>
  );
};
export default NavBar;
