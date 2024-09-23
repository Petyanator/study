import { useState } from "react"
import { useEffect } from "react"

function ShowComments(){
    const [comments, setComments] = useState([])
    
    useEffect(() => {
        const fetchComments = async () => {
            try{
                const response = await fetch('http://localhost:5000/api/comment')
                const data = await response.json()
                setComments(data)
            } catch (error){
                console.log("Error",error)
        }
    }
        fetchComments()
    },[])

    return(
        <>
        <table>
            <thead>
                <tr>
                <th>Username</th>
                <th>Comment</th>
                </tr>
            </thead>
            <tbody>
                {comments.map((comment,index) => (
                    <tr key={index}>
                        <td>{comment.username}</td>
                        <td>{comment.comment_text}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}
export default ShowComments