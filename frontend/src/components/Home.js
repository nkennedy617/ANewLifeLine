import React, { Component } from 'react';
import TopicsList from './TopicsList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Home extends Component {

  render() {
    const { topics } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m8 l6 offset-m2 offset-l3">
              <TopicsList topics={topics}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topics: state.firestore.ordered.topics
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'topics' }
  ])
)(Home)