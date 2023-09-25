



let initialState = {
   todo:[],
   count:5
}




const Myreducer = (state = initialState,action)=>{
    switch(action.type){
        case "SUCCESS":
            return {
                ...state,
                todo: action.payload
            }
        case "INC":
            return {
                ...state,
                count:state.count + 1,
            }
        case "DEC":
            return {
                ...state,
                count:state.count-1
            }
        default :
            return state
    }
}

export default Myreducer;