import React from 'react';

export function AnswerResult(props) {
    const {currentQuestion, answer, answerList, currentQuestionIndex, wasCorrect} = props;

    return (
        <div className='trivia-answers'>
            <p>The current Question Is: {currentQuestion}</p>
            <p>The correct answer is: {answer}</p>
            <p>{wasCorrect ? 'Correct!' : 'Sorry you\'re wrong, you kind of suck at this huh'}</p>
        </div>
    )
}