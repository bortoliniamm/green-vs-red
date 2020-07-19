import React from 'react'
import { generateGrid } from '../GameRules.js'



export default function StartButton({handleClick}) {
    const handleButtonClick = () => {
        
    }
    return (
        <div>
            <a className="waves-effect waves-light btn-small" onClick={handleButtonClick}>Start</a>
        </div>
    )
}
