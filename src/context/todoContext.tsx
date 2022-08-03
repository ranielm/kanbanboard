import { createContext, FC, ReactNode, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContextType, ITodo } from "../types/todo";

export const TodoContext = createContext<TodoContextType | null>(null);

type Props = {
  children: ReactNode;
};

const TodoProvider: FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const saveTodo = (todo: ITodo) => {
    const newTodo: ITodo = {
      id: uuidv4(),
      title: todo.title,
      description: todo.description,
      status: false
    };

    setTodos((prevToDos) => [...prevToDos, newTodo]);
  };

  const updateTodo = (id: string) => {
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
      saveTodo,
      updateTodo
    }),
    [todos]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
