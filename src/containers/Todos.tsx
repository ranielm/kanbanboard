import { useContext } from "react";
import { TodoContextType, ITodo } from "../types/todo";
import { TodoContext } from "../context/todoContext";
import Todo from "../components/Todo";

const Todos = () => {
  const { cardsTodo, updateTodo } = useContext(TodoContext) as TodoContextType;
  return (
    <>
      {cardsTodo.map((todo: ITodo) => (
        <Todo key={todo.id} updateTodo={updateTodo} todo={todo} />
      ))}
    </>
  );
};

export default Todos;
