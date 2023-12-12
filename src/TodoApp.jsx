import "./TodoApp.css";
import TodoForm from "./TodoForm";

export default function TodoApp() {
  return (
    <section className="todo-section">
      <h1 className="header-todo">Todo List</h1>
      <TodoForm />
    </section>
  );
}
