import { Dispatch, SetStateAction } from "react";

export type BoardName = "ToDo" | "Doing" | "Done";

export type AlertColor = "success" | "info" | "warning" | "error";

// ILoginRequest
export interface ILoginRequest {
  login: string;
  senha: string;
}

export interface ITodo {
  id: string;
  title: string;
  description: string;
  status: BoardName;
  previous: BoardName;
}

export interface ISnackbar {
  message: string;
  open: boolean;
  type: AlertColor;
}

export type TodoContextType = {
  todos: ITodo[];
  todoForDrop: ITodo;
  newBlankTodo: ITodo;
  snackbar: ISnackbar;
  setTodoForDrop: Dispatch<SetStateAction<ITodo>>;
  setSnackbar: Dispatch<SetStateAction<ISnackbar>>;
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  addNewTodo: () => void;
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (todo: ITodo) => void;
};
