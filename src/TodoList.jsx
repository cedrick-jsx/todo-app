import React from "react";
import EditTodo from "./EditTodo";
import DoneTodo from "./DoneTodo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePen,
  faSquareCheck,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function TodoList({
  todoNewList,
  setTodoNewList,
  todoEditId,
  setTodoEditId,
  isTodoEdit,
  setIsTodoEdit,
  todoEditData,
  setTodoEditData,
}) {
  return (
    <>
      {todoNewList.map((todoWhat, todoId) => (
        <div
          key={todoId}
          className="todoList-container"
          style={{
            gridTemplateColumns:
              todoEditId === todoWhat.todoDate ? "76.5% 23.5%" : "65% 35%",
            backgroundColor: todoWhat.todoDone && "#60e550",
          }}
        >
          {isTodoEdit && todoEditId === todoWhat.todoDate && (
            <EditTodo
              todoNewList={todoNewList}
              setTodoNewList={setTodoNewList}
              todoEditId={todoEditId}
              setTodoEditId={setTodoEditId}
              todoEditData={todoEditData}
              setTodoEditData={setTodoEditData}
              setIsTodoEdit={setIsTodoEdit}
            />
          )}
          {todoEditId !== todoWhat.todoDate && (
            <>
              <p
                className="todoList"
                style={{
                  color: todoWhat.todoDone && "#044a42",
                }}
              >
                {todoWhat.todo}
              </p>

              <div
                className="button-container"
                style={{
                  gridTemplateColumns: todoWhat.todoDone
                    ? "100%"
                    : "auto auto auto",
                }}
              >
                <button
                  className="button-Edit"
                  onClick={() => {
                    setTodoEditId(todoWhat.todoDate);
                    setTodoEditData(todoWhat.todo);
                    setIsTodoEdit(true);
                  }}
                  style={{ display: todoWhat.todoDone && "none" }}
                >
                  <FontAwesomeIcon icon={faSquarePen} />
                </button>
                <button
                  className="button-Done"
                  onClick={() => {
                    DoneTodo({ todoNewList, setTodoNewList, todoId });
                  }}
                  style={{ display: todoWhat.todoDone && "none" }}
                >
                  <FontAwesomeIcon icon={faSquareCheck} />
                </button>
                <button
                  className="button-Delete"
                  onClick={() => {
                    setTodoNewList(
                      todoNewList.filter(
                        (todoDelete) =>
                          todoDelete.todoDate !== todoWhat.todoDate
                      )
                    );
                  }}
                  style={{
                    margin: todoWhat.todoDone ? "0 0 0 auto" : "0 0 0 0",
                  }}
                >
                  <FontAwesomeIcon icon={faSquareXmark} />
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
}
