

import {createStore,applyMiddleware,combineReducers} from "redux"
import thunk from  "redux-thunk"
import countReducer from "./service/countReducer"
import DataReducer from "./service/feceReducer"

let allReduce = combineReducers({
    arr:DataReducer,
    cnt:countReducer
})



let Store = createStore(allReduce,applyMiddleware(thunk))

export default Store


