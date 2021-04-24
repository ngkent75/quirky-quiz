import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

function About () {

    
    const info = [
        "Quirky Quiz is a collection of quizzes made by our user community, for our user community. Hit the arrow to learn what a Quirky Quiz is!",
        "Quirky Quizzes are a type of funny quiz that contain a varying number of results. Each result depends on the the subject of the quiz.",
        "As you answer each question, you reveal a little bit about yourself. After completion of the quiz, you are provided with the result that is most in line with your answers.",
        "As a user, you may not only take Quirky Quizzes, you can make them too! The Quirk level is in your hands.",
        "Still not sure about Quirky Quizzes? Try a sample quiz to catch the Quirk!"
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
        <section>
        <div className="info">{info[currentInfo]}</div>
        <div className="arrowButtons">
        { currentInfo !== 0 ? (
            <>
            <button className="forwardArrow" onClick={handleBackwardButtonClick}><FaArrowLeft /></button>
            <button className="backwardArrow" onClick={handleForwardButtonClick}><FaArrowRight /></button>
            </>
            ) : (
            <button className="backwardArrow" onClick={handleForwardButtonClick}><FaArrowRight /></button> 
        )}
        </div>
        <div className="sample"><Link to="/quiz/1" className="sampleButton">Sample Quiz</Link></div>
        </section>
        </>
    )
    
}

export default About;