/* eslint-disable no-console */
import { createContext, FC, ReactNode, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContextType, ITodo } from "../types/todo";

export const TodoContext = createContext<TodoContextType | null>(null);

type Props = {
  children: ReactNode;
};

const TodoProvider: FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todoForDrop, setTodoForDrop] = useState<ITodo>({
    id: uuidv4(),
    title: "",
    description: "",
    status: "Todo"
  });

  const saveTodo = (todo: ITodo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const updateTodo = (todo: ITodo) => {
    todos.forEach((singleTodo, index) => {
      if (singleTodo.id === todo.id) {
        todos[index] = todo;
        setTodos([...todos]);
      }
    });
  };

  // TODO: implementar essa função
  const deleteTodo = (todo: ITodo) => {
    todos.forEach((singleTodo, index) => {
      if (singleTodo.id === todo.id) {
        todos[index] = todo;
        setTodos([...todos]);
      }
    });
  };

  const value = useMemo(
    () => ({
      todos,
      todoForDrop,
      setTodoForDrop,
      saveTodo,
      updateTodo,
      deleteTodo
    }),
    [todos, todoForDrop]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
