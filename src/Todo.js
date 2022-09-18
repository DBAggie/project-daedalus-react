import React, { useState, useEffect } from 'react';
import { generateId } from './utils';
import { TodoItem } from './Todo-Item';
import { TodoForm } from './Todo-Form';
import './styles/Todo.css';

export function Todo() {
    const [todos, setTodos] = useState([
        {
            id: generateId(),
            text: 'Learn about React'
        },
        {
            id: generateId(),
            text: 'Add a new Todo!'
        }
    ]);

    const addTodo = (newTodo) => {
        setTodos((prev) => [...prev, newTodo]);
    }

    const removeTodo = (id) => {
        setTodos((todos) =>
            todos.filter((todo) => todo.id !== id)
        );
    }


    return (
        <div className='todo-content'>
            <h1 className='todo-title'>Todo</h1>
            <TodoForm className='todo-form' addTodo={addTodo} />
            <div className='todo-list'>
                <ul className='todo-items'>
                    {todos.map((todo) =>
                        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
                    )}
                </ul>
            </div>
        </div>
    );
}
