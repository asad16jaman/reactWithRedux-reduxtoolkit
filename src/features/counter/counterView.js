import React from "react";
import {useSelector,useDispatch} from "react-redux"
import { increment,decrement,reset } from "./counterSlice";



const CounterView = ()=>{
    let {count} = useSelector(state=> state.mycounter);
    console.log(count)
    let dispatch = useDispatch()
    


    return <div>count is {count}
    <button onClick={()=> dispatch(increment())}>incese</button>
    <button onClick={()=> dispatch(decrement())}>decrese</button>
    <button onClick={()=> dispatch(reset())}>reset</button>

    
    
    </div>
}


export default CounterView