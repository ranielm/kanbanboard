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
import { getTodos, saveTodo, removeTodo, editTodo } from "../api/cards";
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

  const found = async (id: string): Promise<boolean> => {
    const todoForApi = await getTodos();
    console.log(todoForApi);
    console.log(todoForApi.some((todo) => todo.id === id));
    return todoForApi.some((todo) => todo.id === id);
  };

  const [todoForDrop, setTodoForDrop] = useState<ITodo>(newBlankTodo);
  const [snackbar, setSnackbar] = useState<ISnackbar>({
    message: "",
    open: false,
    type: "error"
  });

  // CONTEXT
  const addTodo = async (todo: ITodo) => {
    console.log(todo);

    if (!(await found(todo.id))) {
      const newTodo = await saveTodo(todo);
      console.log(newTodo);

      setTodos([...todos, newTodo]);
    } else {
      await editTodo(todo);
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

  const editTodoAPI = async (todo: ITodo) => {
    await editTodo(todo);
  };

  const saveTodoAPI = async (todo: ITodo) => {
    console.log(todo.id);
    const todosInAPI = await getTodos();
    await saveTodo(todo);
    console.log(todosInAPI);
    // const found = (await getTodos()).some(
    //   (singleTodo) => singleTodo.id === todo.id
    // );
    // console.log(found);
    // if (!found) {
    //   await saveTodo(todo);
    // } else {
    //   await editTodoAPI(todo);
    // }
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
