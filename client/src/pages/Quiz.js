import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import API from '../utils/API';
import { ListGroup } from 'react-bootstrap';
import Bubbles from '../components/Bubbles';

const Quiz = () => {
  let { id } = useParams()
  const [questions, setQuestions] = useState([]);
  const [quizResults, setQuizResults] = useState([]);
  const [finalResult, setFinalResult] = useState('')
  const [showResult, setShowResult] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);;
  const [currentQuiz, setCurrentQuiz] = useState('');


  useEffect(() => {
    console.log("primary key of quiz:", id);
    API.getQuiz(id)
    .then(results => {
      setQuestions(results.data.questions)
      setCurrentQuiz(results.data.title)
    })
  }, [id]);
  
  useEffect(() => {
    console.log(quizResults);
  }, [quizResults])

  useEffect(() => {
    console.log(finalResult);
  }, [finalResult])

  const tallyResult = (answerzArr) => {
    let maxCount = 0;
    let currentCount = 1;
    let winner;
    answerzArr.sort();
    console.log(answerzArr)
    for (let i = 1; i <= answerzArr.length; i++) {
      if (answerzArr[i] === answerzArr[i - 1]) {
        currentCount++;
      }
      else {
        if (currentCount > maxCount) {
          maxCount = currentCount;
          winner = answerzArr[i - 1]
        }
        currentCount = 1
      }
      if (i === answerzArr.length && currentCount > maxCount) {
        maxCount = currentCount;
        winner = answerzArr[i - 1]
      }
      setFinalResult(winner);
    }

  };

  const handleAnswerButtonClick = (result) => {
    setQuizResults(curr => {
      const answerArray = [...curr, result];
      if (answerArray.length === questions.length) tallyResult(answerArray);
      return answerArray
    });
    console.log(quizResults);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      return
    }
    setShowResult(true)
  };

  return (
    <>
      <Bubbles />
      <Navigation />
      {
        questions.length ? (
          <div className="quiz">
            {showResult ? (
              <div className="resultReveal">
                <Bubbles/>
                <div className="result-prompt">You are most definitely a:</div>
                <div className="final-result">{finalResult}</div>
                <button className="save-button">Save Result</button>
                </div>
            ) : (
              <>
              <section className="questionField">
                <div className="quiz-title">{currentQuiz}</div>
                <div className="qustion-number">
                  <div >Question {currentQuestion + 1}/{questions.length}</div>
                </div>
                <div className="questionText">{questions[currentQuestion].questionText}</div>
              </section>
                <ListGroup className="answer-options">
                  {questions[currentQuestion].answers.map(answerOption =>
                    <button className="list-group-item list-group-item-action" key={answerOption.result}
                      onClick={() => handleAnswerButtonClick(answerOption.result)}>
                      {answerOption.answerText}
                    </button>
                  )}
                </ListGroup>
              </>
            )}
          </div>) : (
          <h1>Loading....</h1>
        )
      }
    </>
  )
};

export default Quiz;