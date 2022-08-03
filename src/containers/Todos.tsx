import { useContext } from "react";
import { TodoContextType, ITodo } from "../types/todo";
import { TodoContext } from "../context/todoContext";
import Todo from "../components/Todo";

const Todos = () => {
  const { todos, updateToDo } = useContext(TodoContext) as TodoContextType;
  return (
    <>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} updateToDo={updateToDo} todo={todo} />
      ))}
    </>
  );
};

export default Todos;
