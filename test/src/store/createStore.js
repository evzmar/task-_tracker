import {createStore} from "redux";
import rootReducer from "../redux/modules/rootReducer";

const store = createStore(
    rootReducer,
    // applyMiddleware(thunk)
);


export default store;
