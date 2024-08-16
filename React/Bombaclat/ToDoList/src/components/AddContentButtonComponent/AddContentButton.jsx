import { useState } from "react"
import "./AddContentButton.css"
import Content from "../ContentComponent/Content"


function AddContentButton() {
    const [tasks, setAddContent] = useState([])
    
    const handleClick = () => {
        setAddContent([...tasks, <Content key={tasks.length}/>])
    }

    return(
        <div>
            <button className="button" onClick={handleClick}>+</button>
            {tasks}
        </div>
    )
}

export default AddContentButton