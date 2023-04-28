import React from "react";

export const InCompleteToDos = (props) => {
  const { inCompleteTodos, onClickDelete, onClickComplete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {inCompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li className="content">{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
