import { useState } from 'react'
import React from 'react'
import axios from 'axios'


function Registration() {
  const [username, setUsername] = useState("")
  const [name,setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
        const response = await axios.post("http://127.0.0.1:8008/registration",{
            username,
            name,
            email,
            password
        })
        console.log(response.status)
        setUsername("")
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
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username'/>
      <br />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
      <br />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
      <br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
      <br />
      <button type="submit">SUBMIT</button>
    </form>
    </>
  )
}

export default Registration