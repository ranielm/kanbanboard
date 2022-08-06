import { Dispatch, SetStateAction } from "react";

export interface ITodo {
  id: string;
  title: string;
  description: string;
  status: "Todo" | "Doing" | "Done";
  nextBoard?: "Todo" | "Doing" | "Done";
}

export type TodoContextType = {
  todos: ITodo[];
  todoForDrop: ITodo;
  setTodoForDrop: Dispatch<SetStateAction<ITodo>>;
  saveTodo: (todo: ITodo) => void;
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (todo: ITodo) => void;
};
