import React, { useState } from "react"
import Header from "./components/Header"
import Todoinput from "./components/Todoinput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen py-12 px-4 flex justify-center">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-slate-200 border border-white p-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Header />
          <Todoinput addTodo={addTodo} />
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
      </div>
    </div>
  )
}

export default App