import "../StyleCounter.css"
import { useState } from "react"

const Counter = () => {

    const [countClick, setCountClick] = useState(0)

    return (
        <div className="content-body-counter">
            <div className="content">

                <h1>Counter</h1>

                <button id="contador" onClick={() => setCountClick(countClick + 1)}>Haz click</button>
                <p>{countClick}</p>
                <button id="btnReset" onClick={() => setCountClick(0)}>reset</button>

            </div>


        </div>
    )
}
export default Counter