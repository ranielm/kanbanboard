/* eslint-disable no-console */
import { createContext, FC, ReactNode, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContextType, ITodo } from "../types/todo";

export const TodoContext = createContext<TodoContextType | null>(null);

type Props = {
  children: ReactNode;
};

const newBlankTodo: ITodo = {
  id: uuidv4(),
  title: "",
  description: "",
  status: "Todo",
  previous: "Todo"
};

const TodoProvider: FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todoForDrop, setTodoForDrop] = useState<ITodo>(newBlankTodo);
  const [error, setError] = useState({ message: "", open: false });

  const addNewTodo = () => {
    newBlankTodo.id = uuidv4();
    const found = todos.some((todo) => todo.id === newBlankTodo.id);
    if (!found) setTodos([...todos, newBlankTodo]);
  };

  const updateTodo = (todo: ITodo) => {
    todos.forEach((singleTodo, index) => {
      if (singleTodo.id === todo.id) {
        todos[index] = todo;
        if (todo.title === "" && todo.description === "") {
          todos[index].status = todo.previous;
        }
        setTodos([...todos]);
        console.log(todos);
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
      newBlankTodo,
      error,
      setError,
      addNewTodo,
      updateTodo,
      deleteTodo
    }),
    [todos, todoForDrop, error]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
