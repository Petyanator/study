import { useState } from "react"
import axios from "axios"
import './SignUp.css'


function SignUp(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [bio, setBio] = useState("")
    
    const handleSubmit = async (e) =>{
        e.preventDefault()
        
        try{
            const response = await axios.post("http://127.0.0.1:5000/register",{
                username,
                password,
                bio
            })
            console.log(response.status)
            setPassword("")
            setUsername("")
            setBio("")
        } catch(error){
            console.log("Error was caught", error)
        }
    }

    return(
        <>
        <div className="signup-container">
        <h3>SignUp</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)} />
            <br />
            <input type="text" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <br />
            <input type="text" value={bio} placeholder="bio" onChange={(e) => setBio(e.target.value)} />
            <br />
            <button type="submit">SUBMIT</button>
        </form>
        </div>
        </>
    )
}

export default SignUp