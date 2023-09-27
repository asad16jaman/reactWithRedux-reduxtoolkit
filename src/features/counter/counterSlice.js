import {createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name:"counter",
    initialState:{count:0},
    reducers:{
        increment: (state) => {
                state.count += 1
              },
        decrement:function(state){
            state.count -= 1
            },
        reset:function(state){
            state.count = 0
        }
    }
})

export const {increment,decrement,reset} = counterSlice.actions


export default counterSlice.reducer