import {createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const fetchPost= createAsyncThunk("posts/fetchPost",async()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return res.data
})



const postSlice = createSlice({
    name:"posts",
    initialState:{
        isLoading:false,
        posts:[],
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchPost.pending,(state)=>{
            state.isLoading =true
        })
        builder.addCase(fetchPost.fulfilled,(state,actions)=>{
            state.isLoading = false;
            state.posts = actions.payload;
            state.error = null;
        })

        builder.addCase(fetchPost.rejected,(state,actions)=>{
            state.isLoading = false;
            state.posts = [];
            state.error = actions.payload.message;
        })


    }

})





export default postSlice.reducer