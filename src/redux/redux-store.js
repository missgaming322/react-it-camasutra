import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    dialogReducer: dialogReducer,
    profileReducer: profileReducer,
});

let store = createStore(reducers)




export default store;