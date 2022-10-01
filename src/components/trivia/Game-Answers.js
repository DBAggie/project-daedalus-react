import React from 'react';

export function GameAnswers(props) {
    const { answers } = props;

    return (
        <div className='trivia'>
            {answers.map((answer, index) => {
                return (
                    <button value={answer.answerValue} key={index}>{answer.answer}</button>) 
            }
            )}
        </div>
    )
}