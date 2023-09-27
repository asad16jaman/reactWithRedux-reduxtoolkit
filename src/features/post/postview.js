
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import "./viewpost.css"

import { fetchPost } from "./postSlice"
const PostView = ()=>{

    const {isLoading,posts,error} = useSelector(state=> state.posts)
    console.log(posts)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchPost())
    },[dispatch])


    return <div className="mainDiv">
        {isLoading && <p>loading....</p>}
        {error && <p>error</p>}
        {posts && posts.slice(0,10).map((ele,ind)=>{
            return <div key={ind} className="sub"> 
                 {"("+ind +" ) "+ ele.title}
            </div>
        })}
    </div>
}


export default PostView