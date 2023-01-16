import { React, useState } from 'react'
import '../styleCalculate.css'
export default function Calculate() {

    const [result, setResult] = useState(null)

    const [calc, setCalc] = useState("")

    const operator = ["+", "-", "/", "*"]

    const clearCalculate = () => {
        setCalc("")
        setResult(null)
    }

    function updateDisplay(value) {
        if (result !== null) {
            clearCalculate()
        }
        if ((operator.includes(value) && calc === "") || result !== null) {
            return alert("I do not allow")
        }
        setCalc((prev) => prev.concat(value))
    }

    function calculateResult() {
        try {
            setResult(eval(calc).toString())
        } catch (error) {
            alert(`Error ${error}`)

        }
    }



    const createNumber = () => {
        const number = []
        for (let i = 1; i < 10; i++) {

            number.push(
                <button className='btnNumber' onClick={() => updateDisplay(i.toString())}
                    key={i} >{i}</button>
            )
        }

        return number
    }

    return (
        <div className="calculadora-grilla">
            {/* this is output of result  */}
            <div className="output">
                <div id="result" style={{
                    display: "flex", width: "20rem",
                    height: "2rem", background: "white"
                }}>
                    {result ?? calc}</div>

                <button id="btnDelete" onClick={clearCalculate}>c</button>
            </div>

            {/*operator */}
            {
                operator.map((operators, index) =>
                (<button key={index} name="btnOperator"
                    onClick={() => updateDisplay(operators)}>{operators}</button>))
            }


            {/* this is button */}
            {createNumber()}
            <button name="btnNumber" onClick={() => updateDisplay(0)}>0</button>
            <button name="btnNumber" onClick={() => updateDisplay(".")}>.</button>
            <button id="btnEqual" onClick={calculateResult}>=</button>

        </div>
    )
}
