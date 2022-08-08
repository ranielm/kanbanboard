/* eslint-disable no-console */
import {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useState
} from "react";
import { v4 as uuidv4 } from "uuid";
import auth from "../api/auth";
import { saveTodo, removeTodo, editTodo } from "../api/cards";
import { TodoContextType, ITodo, ISnackbar } from "../types/todo";

export const TodoContext = createContext<TodoContextType | null>(null);

type Props = {
  children: ReactNode;
};

const newBlankTodo: ITodo = {
  id: uuidv4(),
  titulo: "",
  conteudo: "",
  lista: "ToDo",
  previous: "ToDo"
};

const TodoProvider: FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const getCards = async (): Promise<ITodo[]> => {
    const response = await auth();
    setTodos(response);
    return response;
  };

  const [todoForDrop, setTodoForDrop] = useState<ITodo>(newBlankTodo);
  const [snackbar, setSnackbar] = useState<ISnackbar>({
    message: "",
    open: false,
    type: "error"
  });

  // CONTEXT
  const addTodo = () => {
    newBlankTodo.id = uuidv4();
    const found = todos.some((todo) => todo.id === newBlankTodo.id);
    if (!found) {
      setTodos([...todos, newBlankTodo]);
    } else {
      setSnackbar({
        message: "There is already a ToDo empty",
        open: true,
        type: "warning"
      });
    }
  };

  const updateTodo = (todo: ITodo) => {
    todos.forEach((singleTodo, index) => {
      if (singleTodo.id === todo.id) {
        todos[index] = todo;
        if (todo.titulo === "" || todo.conteudo === "") {
          todos[index].lista = todo.previous;
          setSnackbar({
            message: "Fill in the title and content of the ToDo",
            open: true,
            type: "error"
          });
        }
        setTodos([...todos]);
      }
    });
  };

  const deleteTodo = (todo: ITodo) => {
    todos.forEach(async (singleTodo, index) => {
      if (singleTodo.id === todo.id) {
        todos.splice(index, 1);
        await removeTodo(todo);
        setTodos([...todos]);
      }
    });
  };

  // API
  const saveTodoAPI = async (todo: ITodo) => {
    await saveTodo(todo);
  };

  const editTodoAPI = async (todo: ITodo) => {
    await editTodo(todo);
  };

  useEffect(() => {
    getCards();
  }, []);

  const value = useMemo(
    () => ({
      todos,
      todoForDrop,
      newBlankTodo,
      snackbar,
      setTodoForDrop,
      setSnackbar,
      setTodos,
      addTodo,
      updateTodo,
      deleteTodo,
      saveTodoAPI,
      editTodoAPI
    }),
    [todos, todoForDrop, snackbar]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
