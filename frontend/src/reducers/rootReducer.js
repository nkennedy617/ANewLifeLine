import authReducer from './authReducer'
import topicReducer from './topicReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
    auth : authReducer,
    topic: topicReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer 

})

export default rootReducer