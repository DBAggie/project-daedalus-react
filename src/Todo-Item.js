import React from 'react';

export function TodoItem(props) {
    const { todo, removeTodo } = props;

    const handleClick = () => {
        removeTodo(todo.id);
    }

    return (
        <li className='todo-item'>
            <button onClick={handleClick} className='remove-button'>X</button>
            <div className='todo-text'>
                {todo.text}
            </div>
        </li>
    )
}