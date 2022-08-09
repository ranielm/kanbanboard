import { Dispatch, SetStateAction } from "react";

export type BoardName = "ToDo" | "Doing" | "Done";

export type AlertColor = "success" | "info" | "warning" | "error";

export interface ILoginRequest {
  login: string;
  senha: string;
}

export interface ITodo {
  id: string;
  titulo: string;
  conteudo: string;
  lista: BoardName;
  previous: BoardName;
}

export interface ISnackbar {
  message: string;
  open: boolean;
  type: AlertColor;
}

export interface ICredential {
  token: string;
  expiresIn: number;
}

export type TodoContextType = {
  todos: ITodo[];
  todoForDrop: ITodo;
  newBlankTodo: ITodo;
  snackbar: ISnackbar;
  credential: ICredential;
  setCredential: Dispatch<SetStateAction<ICredential>>;
  setTodoForDrop: Dispatch<SetStateAction<ITodo>>;
  setSnackbar: Dispatch<SetStateAction<ISnackbar>>;
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
  addTodo: (todo: ITodo) => void;
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (todo: ITodo) => void;
};
