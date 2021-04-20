import React, { useState } from 'react';

function About () {

    
    const info = [
        "Quirky Quiz is a collection of quizzes made by our user community, for our user community.",
        "Next info."
    ]

    const [currentInfo, setCurrentInfo] = useState(0);

    const handleForwardButtonClick = () => {
        const nextInfo = currentInfo + 1;
        if (nextInfo < info.length) { 
        setCurrentInfo(nextInfo);
        }
    };

    const handleBackwardButtonClick = () => {
        const nextInfo = currentInfo - 1;
        if (nextInfo >= 0) { 
        setCurrentInfo(nextInfo);
        }
    }
    return (
        <>
        <div className="logog">Logo</div>
        <div className="info">{info[currentInfo]}</div>
        <button className="arrow" onClick={handleBackwardButtonClick}>Backward</button>
        <button className="arrow" onClick={handleForwardButtonClick}>Forward</button>
        </>
    )
    
}

export default About;