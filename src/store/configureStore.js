import { applyMiddleware, legacy_createStore } from "redux";
import thunk from 'redux-thunk'
import { reducers } from "../reducers";


const configureStore = () => {
    const store = legacy_createStore(reducers, applyMiddleware(thunk))
    return store
}


export default configureStore 