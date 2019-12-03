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
    this.state = {
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
    //worked to get names here: this.addInformation(document.getElementById('input-firstname').value, document.getElementById('input-lastname').value)*
    this.setState({
      firstName: firstName,
      lastName: lastName
    })
  };

  render() {
    
    const { loggedIn, user, userUpdate} = this.props;
    //console.log('USER');
    //console.log(user);

    //console.log("lastname: " + user.lastName);
    var firstNamePH;
    if (user.firstName == "" || user.firstName == undefined)
    {
      firstNamePH = "First";
    }
    else
    {
      firstNamePH = user.firstName;
    }
    var lastNamePH;
    if (user.lastName == "" || user.lastName == undefined)
    {
      lastNamePH = "Last";
    }
    else
    {
      lastNamePH = user.lastName;
    }
    var edPH;
    if (user.education == "" || user.education == undefined)
    {
      edPH = "Education";
    }
    else
    {
      edPH = user.education;
    }
    var institutionPH;
    if (user.institution == "" || user.institution == undefined)
    {
      institutionPH = "(This information will not be public)";
    }
    else
    {
      institutionPH = user.institution;
    }
    var employmentPH;
    if (user.employment == "" || user.employment == undefined)
    {
      employmentPH = "(This information will not be public)";
    }
    else
    {
      employmentPH = user.employment;
    }

    return (
      <>
        {loggedIn ? (
          <div className="dashboard-view-container">
            <div className="dashboard-background-polygon">
            <img src={require('../assets/BackgroundPolygon.png')}/>
            </div>
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
                  <input type="text" id="input-firstname" contenteditable="true" name="getFirst" className="form-control form-control-alternative"
                    placeholder={firstNamePH}//"First" value={user.firstName}
                    ref={(firstName) => firstName = firstName}></input>
                  <label className="form-control-label" htmlFor="input-username">Last Name</label>
                  <input type="text" id="input-lastname" name="getLast" className="form-control form-control-alternative"
                    placeholder={lastNamePH}//"Last" value={user.lastName}
                    ref={(lastName) => lastName = lastName}></input>
                  <label className="form-control-label" htmlFor="input-username">Education</label>
                  <input type="text" id="input-education" name="getEdu" className="form-control form-control-alternative"
                    placeholder={edPH} //value={user.education}
                    ref={(education) => education = education}></input>
                    <label className="form-control-label" htmlFor="input-username">Employment Informatiion</label>
                    <textarea rows="4" class="form-control form-control-alternative" id="input-employment" placeholder={employmentPH}></textarea>
                    <div class="form-group focused">
                    <label className="form-control-label" htmlFor="input-username">Institutional Information</label>
                    <textarea rows="4" class="form-control form-control-alternative" id="input-institution" placeholder={institutionPH}></textarea>
                  </div>
                  <p></p>
                </div>
                <button className="btn btn-primary" type="button" onClick={() => userUpdate(user, document.getElementById('input-firstname').value, document.getElementById('input-lastname').value, document.getElementById('input-education').value, document.getElementById('input-employment').value, document.getElementById('input-institution').value)}>
                    <i>Edit</i>
                  </button>
              </div>
            </div>
          </div>
        ) : (
            <Redirect to="/users/login" />
          )}
      </>
    );
    /* is user.property coming from the databse or not */
  }

};

export default Dashboard;