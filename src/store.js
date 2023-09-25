
import Myreducer from "./service/countReducer"
import {createStore,applyMiddleware} from "redux"
import thunk from  "redux-thunk"



let Store = createStore(Myreducer,applyMiddleware(thunk))

export default Store


