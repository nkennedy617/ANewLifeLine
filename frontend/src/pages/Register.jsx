import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import axios from "axios";
import "../style/register.style.css";
class Register extends Component {
  constructor(props) {
    //Necessary for class components
    super(props);

    //binding this TODO: Convert class components to hooks
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //Setting the default state
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      registerErrors: [],
      isLoading: "",
      //below added by Irelis
      firstName: "",
      lastName: ""
    };
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  //Need to add form validation
  onSubmit(event) {
    this.setState({ isLoading: true });
    //This allows us to exchange the default behavior for our custom behavior
    event.preventDefault();

    //Object destructuring
    //firstName and lastName added by Irelis
    const { name, email, password, password2, firstName, lastName } = this.state;

    //TODO: Add frontend validation?

    //This is the user object we will send to the server
    const user = {
      name,
      email,
      password,
      password2,
      //below added by Irelis
      firstName,
      lastName
    };

    //this statement is only for development purposes
    //this should be removed from for a production build
    console.log(user);

    axios.post("/users/register", user).then(response => {
      console.log(response);
      if (response.data.success) {
        console.log('RESPONSE.DATA.SUCCESS');
        this.setState({
          name: "",
          email: "",
          password: "",
          password2: "",
          //below til registerErrors added by Irelis
          lastName: "",
          firstName: "",
          registerErrors: [],
          isLoading: false
        });

        console.log(`Finished! ${JSON.stringify(response.data)}`);
        //redirect to login page
        this.props.history.push("/login");
      } else {
        console.log('RESPONSE.DATA.FAIL');
        this.setState({
          password: "",
          password2: "",
          isLoading: false,
          registerErrors: response.data.message
        });
        console.log(JSON.stringify(this.state.registerErrors));
      }
      //window.location = "/users/login";
      //<Redirect to={{ pathname: "/users/login" }} /> -TODO: recommended implmentation method
    });
    //Later we will want to redirect to the login page
    /* this.setState({
      email: "",
      username: "",
      password: "",
      password2: ""
    }); */
  }

  //Later try adding transparency for the forms?
  render() {
    if (this.props.loggedIn)
      return <Redirect to={{ pathname: "/dashboard" }} />;
    if (this.state.isLoading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    return (
      <div className="login-view-container">
        <div className="login-container">
          <h1>Register</h1>
          <div className="login-input-container">

            {this.state.registerErrors.length > 0
              ? this.state.registerErrors.map((errMsg, index) => (
                <p className="register-error-message" key={index}>
                  {errMsg.msg}
                </p>
              ))
              : null}
          </div>
          <form onSubmit={e => this.onSubmit(e)}>
            <div className="form-group">
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="ni ni-hat-3"></i></span>
                </div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Username"
                  className="form-control"
                  value={this.state.name}
                  onChange={e => this.onChange(e)}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="form-control"
                  value={this.state.email}
                  onChange={e => this.onChange(e)}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                </div>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Password"
                  className="form-control"
                  value={this.state.password}
                  onChange={e => this.onChange(e)}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                </div>
                <input
                  type="password"
                  name="password2"
                  placeholder="Confirm Password"
                  required
                  className="form-control"
                  value={this.state.password2}
                  onChange={e => this.onChange(e)}
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Create account"
                className="btn btn-primary"
              />
            </div>
            <div className="line1"> </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
