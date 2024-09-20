import React, { useState } from "react"
import axios from "axios"


function MainInfo(){
    const handleSubmit = async (e) => {
        e.preventDefault()
        const [topicname, setTopicname] = useState("Empty")
        const [comment, setComment] = useState("Empty")


        try{
            const response = await axios.post("http://127.0.0.1:8008/maininfo",
                {
                    topicname,
                    comment
                })
            console.log(response.status)
        } catch (error) {
            console.log("There was an error")
        }
    }
    return (
        <>
        <h2 value = {topicname}></h2>
        <p value = {comment}></p>
        </>
    )

}
export default MainInfo