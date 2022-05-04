import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const  TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const sortedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(sortedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Something to do#</h1>
      <TodoForm onSubmit={addTodo} />

      {todos.length 
      ?
      <Todo
      todos={todos}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
      updateTodo={updateTodo}
      />
      : 
      <h1 style={{fontSize:'14px', color:'rgb(255 255 255 / 39%)'}}>
        You have no todos!
      </h1>
      }
    </>
  );
}

export default TodoList;