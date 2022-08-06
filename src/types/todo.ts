export interface ITodo {
  id: string;
  title: string;
  description: string;
  status: "Todo" | "Doing" | "Done";
  nextBoard?: "Todo" | "Doing" | "Done";
}

export type TodoContextType = {
  cardsTodo: ITodo[];
  cardsDoing: ITodo[];
  cardsDone: ITodo[];
  saveTodo: (todo: ITodo) => void;
  updateTodo: (todo: ITodo) => ITodo;
  deleteTodo: (todo: ITodo) => void;
};
