import React, { useState } from "react"

function Todoinput({ addTodo }) {
  const [todo, setTodo] = useState("")

  const handleChange = () => {
    if (todo.trim() !== "") {
      addTodo(todo)
      setTodo("")
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleChange();
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="What needs to be done?"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyPress={handleKeyPress}
        className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-slate-700 placeholder:text-slate-400"
      />
      <button
        onClick={handleChange}
        className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all duration-200 active:scale-95"
      >
        Add
      </button>
    </div>
  )
}

export default Todoinput
