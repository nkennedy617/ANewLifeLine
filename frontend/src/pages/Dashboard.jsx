import React from "react";
import { Redirect } from "react-router-dom";
import "../style/dashboard.style.css";
const Dashboard = ({ loggedIn, user }) => {
  return (
    <>
      {loggedIn ? (
        <div className="dashboard-view-container">
          <div className="dashboard-container">
            <div class="card bg">
              <p></p>
              <h1>My Account</h1>
              <h5>Hello, {user.name}!</h5>
              <div class="card-body">
                <label class="form-control-label" for="input-username">Username</label>
                <input type="text" id="input-username" class="form-control form-control-alternative" placeholder="Username" value={user.name}></input>
                  <label class="form-control-label" for="input-username">Email</label>
                  <input type="text" id="input-username" class="form-control form-control-alternative" placeholder="Username" value={user.email}></input>
                  <label class="form-control-label" for="input-username">First Name</label>
                <input type="text" id="input-username" class="form-control form-control-alternative" placeholder="First"></input>
                  <label class="form-control-label" for="input-username">Last Name</label>
                  <input type="text" id="input-username" class="form-control form-control-alternative" placeholder="Last"></input>
                  <p></p>
                  <button class="btn btn-primary" type="button">Edit Profile</button>
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
