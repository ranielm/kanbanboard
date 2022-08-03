import { FC } from "react";
import { IToDo } from "../types/ToDo";

type Props = {
  todo: IToDo;
  updateToDo: (id: string) => void;
};

const Todo: FC<Props> = ({ todo, updateToDo }) => {
  const checkTodo: string = todo.status ? "line-through" : "";
  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={checkTodo}>{todo.title}</h1>
        <span className={checkTodo}>{todo.description}</span>
      </div>
      <button
        type="submit"
        onClick={() => updateToDo(todo.id)}
        className={todo.status ? "hide-button" : "Card--button"}
      >
        Complete
      </button>
    </div>
  );
};
export default Todo;
