import { Dispatch, SetStateAction } from "react";

export type BoardName = "Todo" | "Doing" | "Done";

export type AlertColor = "success" | "info" | "warning" | "error";

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
  setTodoForDrop: Dispatch<SetStateAction<ITodo>>;
  snackbar: ISnackbar;
  setSnackbar: Dispatch<SetStateAction<ISnackbar>>;
  addNewTodo: () => void;
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (todo: ITodo) => void;
};
