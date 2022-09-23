import React, { useState } from 'react';
import { generateId } from '../utility/utils';

export function TodoForm(props) {
    const [text, setText] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.length === 0) {
            return;
        }
        const newTodo = {
            id: generateId(),
            text: text
        };
        props.addTodo(newTodo);
        setText('');
    }



    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            <input
                type='text'
                value={text}
                onChange={handleTextChange}
            />
            <input type='submit' value='Add' />
        </form>
    );
}