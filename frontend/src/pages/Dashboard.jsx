import React from "react";
import { Redirect } from "react-router-dom";
import "../style/dashboard.style.css";

class Dashboard extends React.Component {
  
  test() {
    console.log("Called")
  }
  constructor(props) {
    //Necessary for class components
    
    super(props);
    this.state={
      firstName: "",
      lastName: "",
    };
    //this.addInformation = this.addInformation.bind(this);
  }

  addInformation(firstName, lastName) {
    /*this.setState({
      firstName: "",
      lastName: "",
      //const val1 = this.firstName;
      //const val2 = this.lastName;*/

      console.log('name: ' + firstName + ' ' + lastName);

      //this.updateUser(user, firstName, lastName);

      this.setState({
        firstName: firstName,
        lastName: lastName
      })
  };

render()
{  
  const {loggedIn, user} = this.props;
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
              <input type="text" id="input-firstname" name="getFirst" className="form-control form-control-alternative"
                placeholder="First" value={this.firstName}
                ref={(firstName) => firstName = firstName}></input>
              <label className="form-control-label" htmlFor="input-username">Last Name</label>
              <input type="text" id="input-lastname" name="getLast" className="form-control form-control-alternative"
                placeholder="Last" value={user.lastName}
                ref={(lastName) => lastName = lastName}></input>
              <p></p>

              <button className="btn btn-primary" type="button" onClick={() => this.addInformation(document.getElementById('input-firstname').value, document.getElementById('input-lastname').value)}>
                <i>Edit</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : (
        <Redirect to="/users/login" />
      )}
  </>
);
  
}

};
  
export default Dashboard;
//}

/*import React from "react";
import { Redirect } from "react-router-dom";
import "../style/dashboard.style.css";
const Dashboard = ({ loggedIn, user }) => {
  class Dashboard extends React.Component {
    test() {
      console.log("Called")
    }
    constructor(props) {
      //Necessary for class components
      super(props);
      this.state={
        firstName: "",
        lastName: "",
      };
      this.addInformation = this.addInformation.bind(this);
    }

    addInformation() {
      /*this.setState({
        firstName: "",
        lastName: "",
        const val1 = this.firstName.firstName;
        const val2 = this.lastName.lastName;

        this.setState({
          firstName: val1,
          lastName: val2
        })
    };
};
//render()
//{  
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
                  placeholder="First" value={user.firstName}
                  ref={(firstName) => firstName = firstName}></input>
                <label className="form-control-label" htmlFor="input-username">Last Name</label>
                <input type="text" id="input-username" className="form-control form-control-alternative"
                  placeholder="Last" value={user.lastName}
                  ref={(lastName) => lastName = lastName}></input>
                <p></p>

                <button className="btn btn-primary" type="button" onClick={() => this.addInformation.bind(this)}>
                  <i>Edit</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
          <Redirect to="/users/login" />
        )}
    </>
  );
      //}
};

export default Dashboard;
//}*/