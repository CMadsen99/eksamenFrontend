import User from "./user";
import Home from "./home";
import AddUser from "./AddUser";
import EditUser from "./editUser";
import Users from "./Users";
import AddSport from "./addSport";
import Sports from "./Sports";
import SportsAdmin from "./SportsAdmin";
import SportTeams from "./SportTeams";
import facade from "./apiFacade";
import React, { useState, useEffect } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

export default function Menu() {
  const role = facade.getRole();
  const [isAdmin, setIsAdmin] = useState(role ? false : true);
  const [hasRole, setHasRole] = useState(role ? false : true);

  const checkRole = (role) => {
    setIsAdmin(false);
    if (role === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }

    setHasRole(false);
    if (role != null) {
      setHasRole(true);
    } else {
      setHasRole(false);
    }
  }

  useEffect(() => {
    checkRole(role);
  }, []);

  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="header">
          <li>
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/user">Welcome</NavLink>
          </li>
          {
            isAdmin && (
              <li>
                <NavLink activeClassName="active" to="/addsport">Add Sport</NavLink>
              </li>
            )}
          {
            !isAdmin && (
              <li>
                <NavLink activeClassName="active" to="/sports">All Sports</NavLink>
              </li>
            )}
          {
            isAdmin && (
              <li>
                <NavLink activeClassName="active" to="/sportsadmin">All Sports</NavLink>
              </li>
            )}
          {
            !isAdmin && (
              <li>
                <NavLink activeClassName="active" to="/sportteams">All Sport Teams</NavLink>
              </li>
            )}
          <li>
            <NavLink activeClassName="active" to="/adduser">Add User</NavLink>
          </li>
          {
            hasRole && (
              <li>
                <NavLink activeClassName="active" to="/edituser">Edit User</NavLink>
              </li>
            )}
          {
            isAdmin && (
              <li>
                <NavLink activeClassName="active" to="/users">All Users</NavLink>
              </li>
            )}
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/addsport">
          <AddSport />
        </Route>
        <Route path="/sports">
          <Sports />
        </Route>
        <Route path="/sportsadmin">
          <SportsAdmin />
        </Route>
        <Route path="/sportteams">
          <SportTeams />
        </Route>
        <Route path="/adduser">
          <AddUser />
        </Route>
        <Route path="/edituser">
          <EditUser />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </div>
  );
}
