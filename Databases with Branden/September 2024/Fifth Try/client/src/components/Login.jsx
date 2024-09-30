import { useEffect, useState } from "react"
import axios from "axios"
import UserToken from "./UserToken"
import './Login.css'

function Login(){
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    const [loginSuccess, setLoginSuccess] = useState(false)
    const [loginAttempt, setLoginAttempt] = useState(1)
    
    const {token, removeToken, setToken} = UserToken()

    useEffect(() => {
        const storedToken = localStorage.getItem("token")
        if (storedToken) {
            setLoginSuccess(true)
        }
    }, [loginAttempt])

    
    const handleLogin = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.post("http://127.0.0.1:5000/token", loginData)
        
            if (response.status == 200){
                console.log("Login was successful")
                setToken(response.data.access_token)
                setLoginSuccess(true)
            } else{
                console.log("You are invalid")
            } 
            
            setLoginData({
                username: "",
                password: ""
            })

        } catch (error){
            console.log("There was an error",error)
        } finally {
            setLoginAttempt(loginAttempt + 1)
            console.log("Logins attempted: " + loginAttempt)
        }
    }
    
    const handleChange = (e) => {
        const {name, value } = e.target
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }))    
    }

    return(
        <>
        <div className="login-container">
            <h3>Login</h3>
            {loginSuccess && <p>LOGIN SUCCESSFUL</p>}
            <form onSubmit={handleLogin}>
                <input type="text" name = "username" value={loginData.username} onChange={handleChange} placeholder="username"/>
                <br />
                <input type="password" name = "password" value={loginData.password} onChange={handleChange} placeholder="password"/>
                <br />
                <button type="submit">LOGIN</button>
            </form>
        </div>
        </>
    )
}

export default Login