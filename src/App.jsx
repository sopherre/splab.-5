import React, { useState } from "react";
import "./styles.css";
import { InputToDo } from "./components/InputToDo";
import { InCompleteToDos } from "./components/InCompleteToDos";
import { CompleteToDos } from "./components/CompleteToDos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [inCompleteTodos, setInCompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...inCompleteTodos, todoText];
    setInCompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...inCompleteTodos];
    newTodos.splice(index, 1);
    setInCompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newInCompleteTodos = [...inCompleteTodos];
    newInCompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, inCompleteTodos[index]];
    setInCompleteTodos(newInCompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newInCompleteTodos = [...inCompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setInCompleteTodos(newInCompleteTodos);
  };

  return (
    <>
      <InputToDo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={inCompleteTodos.length >= 5}
      />
      {inCompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるToDoは5個までです。消化しましょう。
        </p>
      )}
      <InCompleteToDos
        inCompleteTodos={inCompleteTodos}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />
      <CompleteToDos completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
