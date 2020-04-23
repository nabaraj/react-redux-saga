import { combineReducers } from "redux";
import userReducer from './userReducer';

const rootReducer = combineReducers({
    userData: userReducer
})

export default rootReducer