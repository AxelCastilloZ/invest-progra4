import React from "react";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.text}
          <button onClick={() => toggleTodo(todo.id)}>✔</button>
          <button onClick={() => deleteTodo(todo.id)}>🗑</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
