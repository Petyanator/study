import { Link } from "react-router-dom"
import './NavBar.css'
import { useEffect, useState } from "react"
import UserToken from "./UserToken"
import Logout from "./Logout"
function NavBar(){
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const {token, removeToken, setToken} = UserToken()

    useEffect(() =>{
        if (token) {
            setIsAuthenticated(true)
        } else {
            setIsAuthenticated(false)
        }
    }, [token])

    return(
        <>
        <div>
            <nav className="navbar">
            <ol className="nav-links">
                <li className="nav-item"><Link to="/">HOME</Link></li>
                {!isAuthenticated && <li className="nav-item"><Link to="/login">LOGIN</Link></li>}
                {!isAuthenticated && <li className="nav-item"><Link to="/signup">SIGNUP</Link></li>}
                {isAuthenticated && <Logout removeToken = {removeToken}/>}
            </ol>
            </nav>
        </div>
        </>
    )
}
export default NavBar