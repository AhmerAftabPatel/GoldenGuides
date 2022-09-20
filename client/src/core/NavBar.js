import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import {  Icon } from "semantic-ui-react";

import { logout, isAuthenticated } from "../auth";
const Navbar = ({ history }) => {
  const name = isAuthenticated() ? isAuthenticated().user.name : "";
  const id = isAuthenticated() ? isAuthenticated().user._id : "";
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark scrolling-navbar"
      // style={{ backgroundColor: "#0E2F56" }}
    >
      
      <NavLink to="/" className="navbar-brand" style = {{color : "gold"}}>
        {/* <img
          alt="brand"
          src={Logo}
          style={{
            height: "100px",
            maxWidth: "140px",
            marginTop: "-30px",
            marginBottom: "-40px",
          }}
        ></img> */}
        GG
      </NavLink>
      <button
        className="navbar-toggler bg-dark"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
        
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="line">
              <span
                className="ui green button"
                style={{ cursor: "pointer", color: "#ffffff" }}
              >
                Home
              </span>
            </NavLink>
          </li>
          {isAuthenticated() && (
            <li className="nav-item">
              <NavLink
                exact
                to="/users"
                className="nav-link"
                activeClassName="line"
              >
                <span
                  className="ui green button"
                  style={{ cursor: "pointer", color: "#ffffff" }}
                >
                  Users
                </span>
              </NavLink>
            </li>
          )}
          {isAuthenticated() === false ? (
            <li className="nav-item ml-2 mt-2">
              <div className="ui buttons">
                <NavLink to="/login">
                  <button className="ui button">Login</button>
                </NavLink>
                <div className="or" data-text="or"></div>
                <NavLink to="/signup">
                  <button className="ui positive button">Register</button>
                </NavLink>
              </div>
            </li>
          ) : null}
          {isAuthenticated() && (
            <li className="nav-item">
              {/* <span className="navbar-text ml-auto white-text"> */}
              <NavLink
                className="nav-link"
                activeClassName="line"
                to={"/create/post"}
              >
                <span
                  className="ui green button"
                  style={{ cursor: "pointer", color: "#ffffff" }}
                >
                  Create Blog
                </span>
              </NavLink>
              {/* </span> */}
            </li>
          )}
        </ul>
        <ul className="navbar-nav ml-auto nav-flex-icons">
          {isAuthenticated() && (
            <li className="nav-item">
              <span className="navbar-text ml-auto white-text">
                <NavLink
                  className="nav-link"
                  activeClassName="line"
                  to={`/user/${id}`}
                >
                  <span
                    className="ui green button"
                    style={{ cursor: "pointer", color: "#ffffff" }}
                  >
                    <Icon
                      style={{
                        display: window.innerWidth <= 800 ? "none" : ""
                      }}
                      name="user"
                    />
                    {name}
                  </span>
                </NavLink>
              </span>
            </li>
          )}
          {isAuthenticated() && isAuthenticated().user.role === "admin" && (
            <li className="nav-item">
              <NavLink
                to={`/admin`}
                activeClassName="line"
                className="nav-link"
              >
                Admin Tools
              </NavLink>
            </li>
          )}

          {isAuthenticated() && (
            <li className="nav-item">
              <span className="navbar-text ml-auto white-text">
                <NavLink
                  className="nav-link"
                  activeClassName="line"
                  to={"/findpeople"}
                >
                  <span
                    className="ui blue button"
                    style={{ cursor: "pointer", color: "#ffffff" }}
                  >
                    <Icon
                      style={{
                        display: window.innerWidth <= 800 ? "none" : ""
                      }}
                      name="users"
                    />
                    Discover
                  </span>
                </NavLink>
              </span>
            </li>
          )}
          {isAuthenticated() ? (
            <li className="nav-item ml-2">
              <span
                className="ui red button mt-3"
                style={{ cursor: "pointer", color: "#ffffff" }}
                onClick={() => logout(() => history.push("/"))}
              >
                Signout
              </span>
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
