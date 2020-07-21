import React from 'react'

export default function RunButton({ getClick }) {

    const handleButtonClick = () => {
        getClick();
    }

    return (
        <div>
            <a className="waves-effect waves-light btn-large" onClick={handleButtonClick}>RUN</a>
        </div>
    )
}
