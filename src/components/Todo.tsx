import { FC } from "react";
import { ITodo } from "../types/todo";

type Props = {
  todo: ITodo;
  updateTodo: (id: number) => void;
};

const Todo: FC<Props> = ({ todo, updateTodo }) => {
  const checkTodo: string = todo.status ? "line-through" : "";
  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={checkTodo}>{todo.title}</h1>
        <span className={checkTodo}>{todo.description}</span>
      </div>
      <button
        type="submit"
        onClick={() => updateTodo(todo.id)}
        className={todo.status ? "hide-button" : "Card--button"}
      >
        Complete
      </button>
    </div>
  );
};
export default Todo;
