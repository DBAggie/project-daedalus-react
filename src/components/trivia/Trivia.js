import { wait } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect } from 'react';
import { GetQuestion } from '../utility/Trivia-utils';
import { StartGameButton } from './Start-Game-Button';
import '../../styles/trivia.css';
import he from 'he';


export function Trivia(props) {
    const [isActive, setIsActive] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);
    const [question, setQuestion] = useState(null);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [answer, setAnswer] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    function startGame() {
        // setIsClicked(!isClicked);
        setIsActive(true);
        fetch('https://opentdb.com/api.php?amount=3&category=9')
            .then(response => response.json())
            .then(data => {
                setQuestion(data.results);
            });
        wait(2000);
        console.log(question);
    }

    function addQuestion() {
        fetch('https://opentdb.com/api.php?amount=1')
            .then(response => response.json())
            .then(data => {
                setQuestion(() => [...question, data.results[0]]);
            });
    }


    return (
        <div className='trivia'>
            <div className='trivia-header'>
                <h1>Trivia!</h1>
                <StartGameButton startGame={startGame}>Start Game</StartGameButton>
                <button className='test' onClick={addQuestion}>Add Question</button>
            </div>
            <div className='trivia'>
                {question !== null ? question.map((quest, index) => {
                    return (
                        <div className='trivia-content' key={index}>
                            <p className='trivia-question'>{he.decode(quest.question)}</p>
                            <ul>
                                <li className='trivia-question' key={index}>{quest.correct_answer}</li>
                                {quest.incorrect_answers.map((answer, index) => {
                                    return (
                                        <li className='trivia-question' key={index}>{answer}</li>
                                    )
                                })}
                            </ul>
                            <br />
                        </div>
                    )
                }) : null}
                {/* <p>{JSON.stringify(question)}</p> */}
                {/* {isActive ? <Question /> : null}
            {isAnswered ? <Answer /> : null} */}
            </div>
        </div>
    );
}