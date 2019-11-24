import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import '../App.css';
import Messages from "../components/Messages/Messages";
import Config from "../config/Firebase";


class Forum extends Component {
    constructor(props) {
        super(props);


        this.app = firebase.initializeApp(Config);
        this.database = this.app.database();
    }



  render() {
    return (
      <div>
          <Messages database={this.database}/>
      </div>
    );
  }
}

export default Forum;