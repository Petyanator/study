import { useState } from "react"

function Button() {
    const [counter, setCounter] = useState(0)
    return(
        <>        
        <button className="button" onClick={() => setCounter((counter) => (counter + 1))}>Press Me</button>
        <h2>Press Counter {counter}</h2>
        </>
    )
}
export default Button