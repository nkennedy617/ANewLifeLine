import React from "react";
import { Redirect } from "react-router-dom";
import "../style/dashboard.style.css";
import Navbar from './components/Navbar'
import Home from './components/Home'
import CreateTopic from './components/CreateTopic'
import TopicDetails from './components/TopicDetails'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


class Forum extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>

            <Route exact path='/' component={Home} />
            <Route path='/create' component={CreateTopic} />
            <Route patch='/topic/:id' component={TopicDetails} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Forum;