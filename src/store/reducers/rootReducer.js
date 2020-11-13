import authReducer from './authReducer'
import projectReducer from './projectReducer'
import videoUploadReducer from "./videoUploadReducer"
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    video:videoUploadReducer
});

export default rootReducer

