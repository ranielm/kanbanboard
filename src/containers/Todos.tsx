import { useContext } from "react";
import { ToDoContextType, IToDo } from "../types/ToDo";
import { ToDoContext } from "../context/ToDoContext";
import Todo from "../components/ToDo";

const Todos = () => {
  const { todos, updateToDo } = useContext(ToDoContext) as ToDoContextType;
  return (
    <>
      {todos.map((todo: IToDo) => (
        <Todo key={todo.id} updateToDo={updateToDo} todo={todo} />
      ))}
    </>
  );
};

export default Todos;
