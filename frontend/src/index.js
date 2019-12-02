import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Forum from './pages/Forum'
import * as serviceWorker from './serviceWorker';
import "materialize-css/dist/css/materialize.min.css";
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
/////connecting with firebase
import { createFirestoreInstance, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import fbConfig from './fbConfig'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/functions'

firebase.firestore();
const config = {
    useFirestoreForProfile:true,
    userProfile: 'test',
    userFirestoreForProfile: true,
    attachAuthIsReady: true,
    firebaseStateName: 'firebase'
}

const store = createStore(rootReducer,
    compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore})),
    )
);     

const rrfProps = {
    firebase,
     config: fbConfig,
       dispatch: store.dispatch,
          createFirestoreInstance // <- needed if using firestore
   }


 ReactDOM.render(<Provider store={store}><ReactReduxFirebaseProvider {...rrfProps}><Forum /></ReactReduxFirebaseProvider></Provider>, document.getElementById('root'));
 serviceWorker.unregister();


ReactDOM.render(<App />, document.getElementById("root"));
