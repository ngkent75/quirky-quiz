import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Quiz = () => {
  let { id } = useParams()
  const [questions, setQuestions] = useState([]);
  const exampleQuestions = [
    {
      questionText: "What is your ideal vacation?",
      answerOptions: [
        { answerText: "Coney Island and a slice", result: "dorothy" },
        { answerText: "A tour of the fjords of Norway", result: "rose" },
        { answerText: "A riverboat cruise of Savannah GA", result: "blanche" },
        { answerText: "A Sicillian knife fight", result: "sophia" }
      ]
    },
    {
      questionText: "How do you prefer to dress?",
      answerOptions: [
        { answerText: "Shoulder pads on shoulder pads", result: "dorothy" },
        { answerText: "Tasteful sweats for keeping on the move", result: "rose" },
        { answerText: "Anything with sequins and a low cut", result: "blanche" },
        { answerText: "House  coat and slippers regardless of the occasion", result: "sophia" }
      ]
    },
    {
      questionText: "Who is you ideal partner?",
      answerOptions: [
        { answerText: "Someone who will both challenge me and respect me", result: "dorothy" },
        { answerText: "Someone who will love me unconditionaly, despite my flaws", result: "rose" },
        { answerText: "No way i'm locking it down to one", result: "blanche" },
        { answerText: "At my age, a pulse is all you ask for", result: "sophia" }
      ]
    },
    {
      questionText: "What is your ideal vacation?",
      answerOptions: [
        { answerText: "Coney Island and a slice", result: "dorothy" },
        { answerText: "A tour of the fjords of Norway", result: "rose" },
        { answerText: "A riverboat cruise of Savannah GA", result: "blanche" },
        { answerText: "A Sicillian knife fight", result: "sophia" }
      ]
    },
    {
      questionText: "What is your ideal vacation?",
      answerOptions: [
        { answerText: "Coney Island and a slice", result: "dorothy" },
        { answerText: "A tour of the fjords of Norway", result: "rose" },
        { answerText: "A riverboat cruise of Savannah GA", result: "blanche" },
        { answerText: "A Sicillian knife fight", result: "sophia" }
      ]
    }
  ];

  const [quizResults, setQuizResults] = useState([]);

  const [finalResult, setFinalResult] = useState('')

  const [showResult, setShowResult] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  // const [lastQuestion, setLastQuestion] = useState(false)
  useEffect(() => {
    console.log("primary key of quiz:", id);
    //some API call to get quiz
    setQuestions(exampleQuestions);
  }, [id])
  useEffect(() => {
    console.log(quizResults);
  }, [quizResults])

  useEffect(() => {
    console.log(finalResult);
  }, [finalResult])

  const tallyResult = (answerzArr) => {
    let maxCount = 1;
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
        console.log("success")
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
      <Navigation />
      {
        questions.length ? (
          <div className="quiz">
            {showResult ? (
              <div className="resultReveal">{finalResult}</div>
            ) : (
              <>
                <div className="qustion-number">
                  <div>Question {currentQuestion + 1}/{questions.length}</div>
                </div>
                <div className="questionText">{questions[currentQuestion].questionText}</div>
                <div className="answer-options">
                  {questions[currentQuestion].answerOptions.map(answerOption =>
                    <button key={answerOption.result}
                      onClick={() => handleAnswerButtonClick(answerOption.result)}>
                      {answerOption.answerText}
                    </button>
                  )}
                </div>
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