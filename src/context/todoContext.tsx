/* eslint-disable no-console */
import { createContext, FC, ReactNode, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContextType, ITodo, ISnackbar } from "../types/todo";

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
  const [snackbar, setSnackbar] = useState<ISnackbar>({
    message: "",
    open: false,
    type: "error"
  });

  const addNewTodo = () => {
    newBlankTodo.id = uuidv4();
    const found = todos.some((todo) => todo.id === newBlankTodo.id);
    if (!found) {
      setTodos([...todos, newBlankTodo]);
    } else {
      setSnackbar({
        message: "There is already a Todo empty",
        open: true,
        type: "warning"
      });
    }
  };

  const updateTodo = (todo: ITodo) => {
    todos.forEach((singleTodo, index) => {
      if (singleTodo.id === todo.id) {
        todos[index] = todo;
        if (todo.title === "" && todo.description === "") {
          todos[index].status = todo.previous;
          setSnackbar({
            message: "Fill in the title and description of the Todo",
            open: true,
            type: "error"
          });
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
      snackbar,
      setSnackbar,
      addNewTodo,
      updateTodo,
      deleteTodo
    }),
    [todos, todoForDrop, snackbar]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
