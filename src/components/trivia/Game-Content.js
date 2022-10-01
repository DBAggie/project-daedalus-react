import React from 'react';
import he from 'he';

export function GameContent(props) {
    const { currentQuestion, currentQuestionIndex, answer, answerList, setAnsweredResult } = props;

     function handleClick(e) {
        setAnsweredResult(e.target.value);
        console.log(e.target.value);
        console.log('That click worked!');
     }


    return (
    <div className='trivia-content'>
        <p>The current Question Is: {currentQuestion}</p>
        <div className='trivia-answers-div'>
            {answerList.map((d, index) => {
                return (<button className='trivia-answers' key={index} value={d} onClick={handleClick}>{d}</button>)})}
        </div>
</div>
)
}