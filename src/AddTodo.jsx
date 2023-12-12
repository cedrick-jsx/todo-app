export default function AddTodo({
  todoList,
  setTodoList,
  todoData,
  setTodoData,
  e,
}) {
  e.preventDefault();
  if (todoData) {
    setTodoList([
      ...todoList,
      {
        todoDate: new Date(),
        todo: todoData,
        todoDone: false,
      },
    ]);
    setTodoData("");
  }
}
