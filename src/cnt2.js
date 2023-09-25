import {useSelector,useDispatch} from "react-redux"
import { useEffect } from "react"

import {fetceData} from "./service/action"





const DataApp = ()=>{

    let mystate = useSelector((state)=> state)
    let dispatch = useDispatch()




    useEffect(()=>{
        dispatch(fetceData())
    },[dispatch])




    return <div>
        {mystate.todo.slice(0,10).map(ele=>{
            return <p key={ele.id}>{ele.title} id is {ele.id}</p>
        })}
        hellow it is gooe

        
    </div>
}

export default DataApp