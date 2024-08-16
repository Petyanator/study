import { useState } from "react"
import "./ShowContentButton.css"
import Content from "../ContentComponent/Content"

function ShowContentButton() {
    const [showContent, setShowContent] = useState(false)

    const handleCLick = () => {
        setShowContent(!showContent)
    }



    return(
        <>
        {showContent && <Content />}
        <button className="button" onClick={handleCLick}>Press</button>



        </>
    )   
}   




export default ShowContentButton