import React, { useState, useEffect } from 'react';
import './style.css';
import sampleQuiz from '../../../../sample-quiz/sampleQuiz.json'

function TakeQuiz () {

    const [quizQuestions, setQuizQuestions] =useState([]);

    useEffect(() => {
        fetch(questionText)
            .then((res) => res.json())
                .then((data) => { setQuizQuestions(data.results);
        });
    }, []);

    return (
        <div className='container'>
            <div className='bg-dark text-white p-4'>
                {quizQuestions[0]}
            </div>
            <div>
                <button className='bg-light text-black p4'>{quizQuestions.answerText[0]}</button>
                <button className='bg-light text-black p4'>Answer #2</button>
                <button className='bg-light text-black p4'>Answer #3</button>
                <button className='bg-light text-black p4'>Answer #4</button>
            </div>
        </div>
    );
}

export default TakeQuiz;