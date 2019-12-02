import React from "react";
import "../style/dashboard.style.css";
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import CreateTopic from '../components/CreateTopic'
import TopicDetails from '../components/TopicDetails'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


class Forum extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>

            <Route exact path='/forum' component={Home} />
            <Route path='/forum/create' component={CreateTopic} />
            <Route patch='/forum/topic/:id' component={TopicDetails} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Forum;