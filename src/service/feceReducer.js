


let getData = {
    todo:[]
}

const DataReducer = (state=getData,action)=>{
    switch(action.type){
        case "SUCCESS":
            return {
                todo:action.payload
            }
        case "FAIL":
            return {
                todo:action.payload
            }
        default:
            return state
    }
}

export default DataReducer
