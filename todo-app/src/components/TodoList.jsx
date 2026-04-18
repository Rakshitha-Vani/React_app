import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-slate-400 italic">No tasks yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
