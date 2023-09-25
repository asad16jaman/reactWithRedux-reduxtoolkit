import {useSelector,useDispatch} from "react-redux"
import React from "react"


import DataApp from "./cnt2"
const Cunt = ()=>{
    let {count} = useSelector(state=> state)
  
    let myaction = useDispatch()


    return <React.Fragment>
        {count}
        <button onClick={()=> myaction({type:"INC"})}>increment</button>
        <button onClick={()=> myaction({type:"DEC"})}>decrement</button>

<DataApp />
    </React.Fragment>
}


export default Cunt



