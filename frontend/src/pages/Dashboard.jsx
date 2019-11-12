import React from "react";
import { Redirect } from "react-router-dom";
import "../style/dashboard.style.css";
const Dashboard = ({ loggedIn, user }) => {
  return (
    <>
      {loggedIn ? (
        <div className="dashboard-view-container">
          <div className="dashboard-container">
              <div className="card bg">
                  <p></p>
                  <h1>My Account</h1>
                  <h5>Hello, {user.name}!</h5>
                  <div className="card-body">
                      <label className="form-control-label" htmlFor="input-username">Username</label>
                      <input type="text" id="input-username" className="form-control form-control-alternative"
                             placeholder="Username" value={user.name}></input>
                      <label className="form-control-label" htmlFor="input-username">Email</label>
                      <input type="text" id="input-username" className="form-control form-control-alternative"
                             placeholder="Username" value={user.email}></input>
                      <label className="form-control-label" htmlFor="input-username">First Name</label>
                      <input type="text" id="input-username" className="form-control form-control-alternative"
                             placeholder="First"></input>
                      <label className="form-control-label" htmlFor="input-username">Last Name</label>
                      <input type="text" id="input-username" className="form-control form-control-alternative"
                             placeholder="Last"></input>
                      <p></p>
                      <button className="btn btn-primary" type="button">Edit Profile</button>
                  </div>
              </div>
          </div>
        </div>
      ) : (
        <Redirect to="/users/login" />
      )}
    </>
  );
};

export default Dashboard;
