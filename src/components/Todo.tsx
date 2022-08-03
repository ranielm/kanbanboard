import { FC } from "react";
import { ITodo } from "../types/todo";

type Props = {
  toDo: ITodo;
  updateToDo: (id: string) => void;
};

const Todo: FC<Props> = ({ toDo, updateToDo }) => {
  const checkTodo: string = toDo.status ? "line-through" : "";
  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={checkTodo}>{toDo.title}</h1>
        <span className={checkTodo}>{toDo.description}</span>
      </div>
      <button
        type="submit"
        onClick={() => updateToDo(toDo.id)}
        className={toDo.status ? "hide-button" : "Card--button"}
      >
        Complete
      </button>
    </div>
  );
};
export default Todo;
