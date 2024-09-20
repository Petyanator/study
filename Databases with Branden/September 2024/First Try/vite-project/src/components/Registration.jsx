import React, { useState } from 'react'
import axios from 'axios'
// This is front-end
function Registration() {
    const [name,setName] = useState("")
    const [birthdate, setBirthDate] = useState("")
    const [familyname, setFamilyName] = useState("")

    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const response = await axios.post("http://127.0.0.1:8008/registration", {
          name,
          familyname,
          birthdate,
        })
        console.log(response.status)
        setName("")
        setFamilyName("")
        setBirthDate("")
      } catch (error) {
        console.log("There was an error")
      }
    } 

    return (
      <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
        <br />
        <input type="text" placeholder='Family Name' value={familyname} onChange={(e) => setFamilyName(e.target.value)}/>
        <br />
        <input type="date" placeholder='Birthdate' value={birthdate} onChange={(e) => setBirthDate(e.target.value)}/>
        <br />
        <button type="submit" id='submitbtn'>SUBMIT</button>
      </form>
      </>
    )
}


export default Registration