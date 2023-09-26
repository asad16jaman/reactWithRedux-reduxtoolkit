
let initialCount = {
    count : 1001
}

let countReducer = (state=initialCount,action)=>{
    switch(action.type){
        case "INCRES":
            return {
                count : state.count+1
            }
        case "DECRESE":
            return {
                count : state.count-1
            }
        case "RESET":
            return {
                count : 0
            }
        default :
        return state
    }
}

export default countReducer









