import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCheck,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function EditTodo({
  todoNewList,
  setTodoNewList,
  todoEditId,
  setTodoEditId,
  todoEditData,
  setTodoEditData,
  setIsTodoEdit,
}) {
  const UpdateEdit = () => {
    if (todoEditData) {
      setTodoNewList(
        todoNewList.map((todoEdit) => {
          if (todoEditId === todoEdit.todoDate) {
            return {
              ...todoEdit,
              todo: todoEditData,
            };
          } else {
            return {
              ...todoEdit,
              todoEdit,
            };
          }
        })
      );
      ResetEdit();
    }
  };
  const ResetEdit = () => {
    setTodoEditId("");
    setTodoEditData("");
    setIsTodoEdit(false);
  };
  return (
    <>
      <input
        type="text"
        className="input-Edit"
        value={todoEditData}
        maxLength={55}
        spellCheck="false"
        placeholder="What is it?"
        onChange={(e) => setTodoEditData(e.target.value)}
      />
      <div
        className="button-container"
        style={{
          gridTemplateColumns: "auto auto",
        }}
      >
        <button className="button-Done" onClick={UpdateEdit}>
          <FontAwesomeIcon icon={faSquareCheck} />
        </button>
        <button className="button-Delete" onClick={ResetEdit}>
          <FontAwesomeIcon icon={faSquareXmark} />
        </button>
      </div>
    </>
  );
}
