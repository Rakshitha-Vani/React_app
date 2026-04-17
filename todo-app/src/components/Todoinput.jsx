import {userState } from "react"
function Todoinput(addTodo) {
    const [todo, setTodo] = useState("")

    const handleChange = () => {
        if (todo.trim() !== "") {
            addTodo(input)
            setTodo("")
        }
    }
  return (
    <div>
      <input type="text" placeholder="Enter a todo" 
      value={todo} onChange={e=> setTodo(e.target.value)} />
        <button onClick={handleChange}>Add</button>
        </div>

  )
}

export default Todoinput
