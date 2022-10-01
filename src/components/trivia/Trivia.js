import { wait } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect } from "react";
import { GetQuestion } from "../utility/Trivia-utils";
import { StartGameButton } from "./Start-Game-Button";
import "../../styles/trivia.css";
import { GameContent } from "./Game-Content";
import he from "he";
import { AnswerResult } from "./Answer-Result";

export function Trivia(props) {
  const [isActive, setIsActive] = useState(false);
  const [questionList, setQuestionList] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [nextQuestionIndex, setNextQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answerList, setAnswerList] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [wasCorrect, setWasCorrect] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  function startGame() {
    setIsAnswered(false);
    setIsActive(true);
    setCurrentQuestion("");
    fetch("https://opentdb.com/api.php?amount=3&category=9")
      .then((response) => response.json())
      .then((data) => {
        setQuestionList(data.results);
      })
      .finally(() => {
        console.log("Question List: ", questionList);
      });
  }

  function nextQuestion() {
    setIsAnswered(false);
    setAnswerList([]);
    setCurrentQuestion(he.decode(questionList[currentQuestionIndex].question));
    setAnswer(he.decode(questionList[currentQuestionIndex].correct_answer));
    questionList[currentQuestionIndex].incorrect_answers.map((answer) => {
      setAnswerList((prev) => [...prev, answer]);
    });
    setAnswerList((prev) => [
      ...prev,
      questionList[currentQuestionIndex].correct_answer,
    ]);
  }

  function incrementAnswer() {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setNextQuestionIndex(nextQuestionIndex + 1);
  }

  function setAnsweredResult(userSelection) {
    setIsAnswered(true);
    setSelectedAnswer(userSelection);
    
  }

  useEffect(() => {
    if (isAnswered) {
      if (selectedAnswer === answer && isAnswered === true) {
        setWasCorrect(true);
      } else if (selectedAnswer !== answer) {
        setWasCorrect(false);
      } else {
        return;
      }
    }
  }, [isAnswered])

  useEffect(() => {
    if (questionList.length > 0) {
      setAnswerList([]);
      setCurrentQuestion(
        he.decode(questionList[currentQuestionIndex].question)
      );
      setAnswer(he.decode(questionList[currentQuestionIndex].correct_answer));
      questionList[currentQuestionIndex].incorrect_answers.map((answer) => {
        setAnswerList((prev) => [...prev, answer]);
      });
      setAnswerList((prev) => [
        ...prev,
        questionList[currentQuestionIndex].correct_answer,
      ]);
      // nextQuestion();
    }
  }, [questionList]);

  useEffect(() => {
    if (currentQuestionIndex < questionList.length) {
      setCurrentQuestion(
        he.decode(questionList[currentQuestionIndex].question)
      );
      nextQuestion();
    } else {
      setCurrentQuestion("Game Over");
    }
  }, [currentQuestionIndex]);

  return (
    <div className="trivia">
      <h1>Trivia!</h1>
      <div className="trivia-game-controls">
        <StartGameButton startGame={startGame}>Start Game</StartGameButton>
        {isAnswered ? (
          <button className="" onClick={incrementAnswer}>
            Next Question
          </button>
        ) : null}
      </div>
      {questionList.length > 0 && isAnswered !== true ? (
        <GameContent
          currentQuestion={currentQuestion}
          answer={answer}
          answerList={answerList}
          currentQuestionIndex={currentQuestionIndex}
          setAnsweredResult={setAnsweredResult}
        />
      ) : null}
      {isAnswered ? (
        <AnswerResult
          currentQuestion={currentQuestion}
          answer={answer}
          answerList={answerList}
          currentQuestionIndex={currentQuestionIndex}
          wasCorrect={wasCorrect}
        />
      ) : null}
    </div>
  );
}
