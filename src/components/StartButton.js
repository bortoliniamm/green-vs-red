import React from 'react'


export default function StartButton({handleClick}) {
    const handleButtonClick = (event) => {
        handleClick(event);
    }
    return (
        <div>
            <a className="waves-effect waves-light btn-small" onClick={handleButtonClick}>Start</a>
        </div>
    )
}
