import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    // for input value
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);
//put auto focus on the ref value
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };
//onsubmit the form this event function handles the value and set the input
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput(''); //it sets the default value to empty string while form is submitted 
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a To-Do' value={input}
            onChange={handleChange}
            name='text'className='todo-input'ref={inputRef}  />
          <button onClick={handleSubmit} className='todo-button'>
            Add +
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;