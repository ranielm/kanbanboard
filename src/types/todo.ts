export interface IToDo {
  id: string;
  title: string;
  description: string;
  status: boolean;
}
export type ToDoContextType = {
  todos: IToDo[];
  saveToDo: (todo: IToDo) => void;
  updateToDo: (id: string) => void;
};
