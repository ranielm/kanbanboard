import { FC } from "react";
import { ITodo } from "../types/todo";

type Props = {
  todo: ITodo;
  updateTodo: (todo: ITodo) => void;
};

const Todo: FC<Props> = ({ todo, updateTodo }) => {
  return (
    <div>
      <div>
        <h1>{todo.title}</h1>
        <span>{todo.description}</span>
      </div>
      <button type="submit" onClick={() => updateTodo(todo)}>
        Complete
      </button>
    </div>
  );
};
export default Todo;
