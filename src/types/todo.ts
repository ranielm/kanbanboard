export interface ITodo {
  id: string;
  title: string;
  description: string;
  status: boolean;
}

export type TodoContextType = {
  todos: ITodo[];
  saveToDo: (todo: ITodo) => void;
  updateToDo: (id: string) => void;
};
