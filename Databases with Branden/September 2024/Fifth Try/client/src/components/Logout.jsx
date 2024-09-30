import { Link } from "react-router-dom"
import axios from "axios"


function Logout({ removeToken }){
    const handleLogout = (e) => {
        e.preventDefault()
        try{
            axios
            .post('http://127.0.0.1:5000/logout')
            .then((response) =>{
                response.data.access_token = removeToken()
            })
        } catch (error){
            console.error(error)
        } finally {
            console.log("Attempt to Logout")
        }
    }
    
    return(
        <>
        <li className="nav-item">
            <Link to="/" onClick={handleLogout}>Logout</Link>
        </li>
        </>
    )
}
export default Logout