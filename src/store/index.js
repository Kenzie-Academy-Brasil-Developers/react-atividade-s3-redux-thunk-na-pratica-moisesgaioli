import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import userReducer from "./modules/user/reducer";


const reducer = combineReducers({ user: userReducer });

const store = createStore(reducer, applyMiddleware(thunk));

export default store;