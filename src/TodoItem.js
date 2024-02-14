import React from 'react';

const TodoItem = ({ todo, deleteTodo, updateTodo, toggleStatus }) => {
  const { id, taskName, description, status } = todo;

  return (
    <div>
      <h3>{taskName}</h3>
      <p>{description}</p>
      <p>Status: {status}</p>
      <button onClick={() => toggleStatus(id)}>Toggle Status</button>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
