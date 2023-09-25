import axios from "axios"

export const fetceData =  ()=>{
    return (dispatch)=>{
           axios.get("https://jsonplaceholder.typicode.com/todos")
           .then(res=>{
            dispatch({
                type:"SUCCESS",
                payload:res.data
            })
           })
           .catch(error=>{
            dispatch({
                type:"SUCCESS",
                payload:["there is an error"]
            })
           })
    }  
}






