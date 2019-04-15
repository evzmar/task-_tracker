import {combineReducers} from "redux";
import {reducer as authReducer} from "./authRedux";
import {reducer as formReducer} from 'redux-form';
import {reducer as toDoPageReducer} from "./toDoRedux";



const  rootReducer = combineReducers({
    auth:               authReducer,
    toDoPage:           toDoPageReducer,
    form:               formReducer
});

export default rootReducer;