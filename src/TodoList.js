import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, updateTodo, toggleStatus }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          toggleStatus={toggleStatus}
        />
      ))}
    </div>
  );
};

export default TodoList;
