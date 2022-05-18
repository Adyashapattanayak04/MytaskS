import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';


function TodoList() {
  const [todos, setTodos] = useState([]);


//adding the todos
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) { //testing the added text
      return;
    }

    const newTodos = [todo, ...todos];  //adding values to the array

    setTodos(newTodos);
    console.log(...todos);
  };



//update the todos
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };


//remove todo from the list
  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  //complete todos.. 
  const completeTodo = (id) => {
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
      
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;