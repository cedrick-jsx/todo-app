import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function TodoForm() {
  const [todoData, setTodoData] = useState("");
  const [todoEditData, setTodoEditData] = useState("");
  const [todoEditId, setTodoEditId] = useState("");
  const [isTodoEdit, setIsTodoEdit] = useState(false);
  const [todoList, setTodoList] = useState(() => {
    const storedTodo = localStorage.getItem("todoList");
    if (storedTodo) return JSON.parse(storedTodo);
    else return [];
  });
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <>
      <form
        onSubmit={(e) =>
          AddTodo({ todoList, setTodoList, todoData, setTodoData, e })
        }
      >
        <input
          type="text"
          className="todo-input"
          value={todoData}
          maxLength={55}
          spellCheck="false"
          placeholder="Anything You Want?"
          onChange={(e) => {
            setTodoData(e.target.value);
          }}
        />
      </form>
      <TodoList
        todoNewList={todoList}
        setTodoNewList={setTodoList}
        todoEditId={todoEditId}
        setTodoEditId={setTodoEditId}
        isTodoEdit={isTodoEdit}
        setIsTodoEdit={setIsTodoEdit}
        todoEditData={todoEditData}
        setTodoEditData={setTodoEditData}
      />
    </>
  );
}
