import React from "react"
import axios from "axios"
import { useState } from "react"

function TopicName(){
    const [topicname,setTopicname] = useState("")
    
    
    const handleSubmit = async (e) => {
        e.preventDefault()


        try{
            const response = await axios.post("http://127.0.0.1:8008/topicreg",
                {
                    topicname,
                })
            console.log(response) 
            setTopicname("")
            } catch (error){
            console.log("There was an error (Topic Section)")
        }
    }
    
    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={topicname} onChange={(e) => setTopicname(e.target.value)} placeholder="Send your Topic to discuss"/>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
        </>
    )
}
export default TopicName

