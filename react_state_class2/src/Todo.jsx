import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Todo.css";

function Todo() {
  const [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4() }
  ]);
  const [newTodo, setNewTodo] = useState("");

  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  const addNewTask = () => {
    if (!newTodo.trim()) return;

    setTodos((previousTodos) => [
      ...previousTodos,
      { task: newTodo, id: uuidv4() }
    ]);
    setNewTodo("");
  };

  const updateTodoInput = (event) => {
    setNewTodo(event.target.value);
  };

  const deleteTodo = (id) => {
    setTodos((previousTodos) =>
      previousTodos.filter((todo) => todo.id !== id)
    );
  };

  const startEditTodo = (todo) => {
    setEditingTodoId(todo.id);
    setEditedTask(todo.task);
  };

  const saveEditedTodo = (id) => {
    if (!editedTask.trim()) return;

    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id ? { ...todo, task: editedTask } : todo
      )
    );

    setEditingTodoId(null);
    setEditedTask("");
  };

  return (
    <div>
      <h2>Todo List</h2>

      <div>
        <input
          type="text"
          placeholder="add a task"
          value={newTodo}
          onChange={updateTodoInput}
        />
        <button onClick={addNewTask}>Add task</button>
        <hr />
      </div>

      <div>
        <h3>Tasks To Do</h3>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {editingTodoId === todo.id ? (
                <div>
                  <input
                    type="text"
                    value={editedTask}
                    onChange={(event) =>
                      setEditedTask(event.target.value)
                    }
                  />
                  <button onClick={() => saveEditedTodo(todo.id)}>
                    Save
                  </button>
                </div>
              ) : (
                <div>
                  <span>{todo.task}</span>
                  <button onClick={() => deleteTodo(todo.id)}>
                    Delete
                  </button>
                  <button onClick={() => startEditTodo(todo)}>
                    Edit
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
