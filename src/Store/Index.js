import {createStore,applyMiddleware} from "redux";
import  Thunk from "redux-thunk"
import Reducer from "./Reducer/Reducer"

export default createStore(Reducer,applyMiddleware(Thunk));