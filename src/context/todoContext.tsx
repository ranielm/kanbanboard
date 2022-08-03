import { createContext, FC, ReactNode, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToDoContextType, IToDo } from "../types/ToDo";

export const ToDoContext = createContext<ToDoContextType | null>(null);

type Props = {
  children: ReactNode;
};

const TodoProvider: FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<IToDo[]>([]);

  const saveToDo = (todo: IToDo) => {
    const newToDo: IToDo = {
      id: uuidv4(),
      title: todo.title,
      description: todo.description,
      status: false
    };

    setTodos((prevToDos) => [...prevToDos, newToDo]);
  };

  const updateToDo = (id: string) => {
    todos.forEach((todo, index) => {
      if (todo.id === id) {
        todos[index].status = true;
        setTodos([...todos]);
      }
    });
  };

  const value = useMemo(
    () => ({
      todos,
      saveToDo,
      updateToDo
    }),
    [todos]
  );

  return <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>;
};

export default TodoProvider;
