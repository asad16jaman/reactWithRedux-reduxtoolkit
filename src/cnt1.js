import {useSelector,useDispatch} from "react-redux"
import React from "react"

import { increse,decrese,reset } from "./service/countAction"

import DataApp from "./cnt2"




const Cunt = ()=>{
    let {count} = useSelector(state=> state.cnt)
    // console.log(count)
  
    let myaction = useDispatch()

    let decreseAction = ()=>{
        myaction(decrese())
    }


    return <React.Fragment>
       {count}
       <button onClick={()=> myaction(increse())}>increse</button>
       <button onClick={decreseAction}>decrese</button>
       <button onClick={()=> myaction(reset())}>reset</button>
        <DataApp />
      
    </React.Fragment>
}


export default Cunt



