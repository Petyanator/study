import React, { useState } from "react"
import axios from "axios"

function SendComments(){
    const [username, setUsername] = useState("")
    const [comment_text, setComment] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.post("http://127.0.0.1:5000/comments",{
                username,
                comment_text
            })
            setComment("")
            setUsername("")
            console.log(response.status)
        } catch (error){
            console.log("There was an error", error)
        }
    }
    
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" placeholder="Comment" value={comment_text} onChange={(e) => setComment(e.target.value)}/>
            <button type="submit">SUBMIT</button>
        </form>
        </>
    )
}
export default SendComments