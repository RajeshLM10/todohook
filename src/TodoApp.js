import React, { useState } from 'react';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (taskName, description) => {
    const newTodo = {
      id: todos.length + 1,
      taskName,
      description,
      status: 'not completed'
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    );
    setTodos(updatedTodos);
  };

  const toggleStatus = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id
        ? { ...todo, status: todo.status === 'completed' ? 'not completed' : 'completed' }
        : todo
    );
    setTodos(updatedTodos);
  };

  const filterTodos = (status) => {
    setFilter(status);
  };

  const filteredTodos = filter === 'all' ? todos :
    filter === 'completed' ? todos.filter(todo => todo.status === 'completed') :
      todos.filter(todo => todo.status === 'not completed');

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <div>
        <button onClick={() => filterTodos('all')}>All</button>
        <button onClick={() => filterTodos('completed')}>Completed</button>
        <button onClick={() => filterTodos('not completed')}>Not Completed</button>
      </div>
      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        toggleStatus={toggleStatus}
      />
    </div>
  );
};

export default TodoApp;