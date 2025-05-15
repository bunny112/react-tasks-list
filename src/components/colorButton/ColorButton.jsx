import React, { useState } from 'react';
import './ColorButton.css';

function ColorButton() {
    const [isClicked, setIsClicked] = useState(false);

    const buttonStyle = {
        backgroundColor: isClicked ? '#28a745' : '#007bff',
    };

    const buttonText = isClicked ? 'Clicked!' : 'Click Me';

    function toggleColor() {
        setIsClicked(!isClicked);
    }

    return (
        <div className="color-button-container">
            <button
                className="color-button"
                style={buttonStyle}
                onClick={toggleColor}
            >
                {buttonText}
            </button>
            <p className="status-text">
                {isClicked ? 'You clicked the button!' : 'Waiting for click...'}
            </p>
        </div>
    );
}

export default ColorButton;
