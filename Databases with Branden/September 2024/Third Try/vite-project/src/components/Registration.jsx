import { useState } from 'react'
import React from 'react'
import axios from 'axios'


function Registration() {
  const [name,setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
        const response = await axios.post("http://127.0.0.1:8008/registration",{
            name,
            email,
            password
        })
        console.log(response.status)
        setName("")
        setEmail("")
        setPassword("")
    
    
    } catch(error) {
      console.log("Something caused an error")
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button type="submit">SUBMIT</button>
    </form>
    </>
  )
}

export default Registration