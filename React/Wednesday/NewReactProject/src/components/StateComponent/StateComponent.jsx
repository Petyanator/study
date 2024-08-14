import { useState } from "react"
import './StateComponent.css'

function StateComponent() {
    const [seconds, setTime] = useState(0)

    setTimeout(() => {
        setTime(seconds + 1)
    }, 1000)



    return(
        <>
            <div className="counter">{seconds}</div>
        </>
    )
}
export default StateComponent