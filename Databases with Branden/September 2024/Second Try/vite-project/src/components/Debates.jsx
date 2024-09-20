import { useState } from "react"
import React from "react"
import axios from 'axios'

function Debates() {
    const [username,setUsername] = useState("")
    const [comment, setComment] = useState("")


    const handleSubmit = async (e) =>{
        e.preventDefault()

        try {
            const response = await axios.post("http://127.0.0.1:8008/comments",
            {
                username,
                comment
            })
            console.log(response.status)
            setUsername("")
            setComment("")
        } catch (error) {
            console.log("There was an error")
        }
    }
    
    return (
      <>
      <div>
        <form onSubmit={handleSubmit}>
        <input type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
        <input type="text" value={comment} placeholder="Write your opinion on ths topic" onChange={(e) => setComment(e.target.value)}/>
        <button type="submit">SUBMIT</button>
        </form>
      </div>
      </>
    )
  }
export default Debates