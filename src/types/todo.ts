import { Dispatch, SetStateAction } from "react";

export type BoardName = "Todo" | "Doing" | "Done";

export interface ITodo {
  id: string;
  title: string;
  description: string;
  status: BoardName;
  previous: BoardName;
}

export type TodoContextType = {
  todos: ITodo[];
  todoForDrop: ITodo;
  newBlankTodo: ITodo;
  setTodoForDrop: Dispatch<SetStateAction<ITodo>>;
  error: {
    message: string;
    open: boolean;
  };
  setError: Dispatch<
    SetStateAction<{
      message: string;
      open: boolean;
    }>
  >;
  addNewTodo: () => void;
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (todo: ITodo) => void;
};
