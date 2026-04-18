import React from 'react';

function TodoItem({ todo, deleteTodo }) {
  return (
    <div className="flex items-center justify-between p-4 mb-3 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200 group">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-primary" />
        <span className="text-slate-700 font-medium">{todo.text}</span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="opacity-0 group-hover:opacity-100 px-3 py-1 text-sm font-medium text-red-500 hover:bg-red-50 ring-1 ring-red-200 rounded-lg transition-all duration-200"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
