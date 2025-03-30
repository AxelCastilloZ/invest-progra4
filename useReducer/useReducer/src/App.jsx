import { useTodo } from "./hooks/useTodo";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodo();

  return (
    <div>
      <h1>Lista de Tareas 📝</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
