import { createContext, FC, ReactNode, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContextType, ITodo } from "../types/todo";

export const TodoContext = createContext<TodoContextType | null>(null);

type Props = {
  children: ReactNode;
};

const TodoProvider: FC<Props> = ({ children }) => {
  const [cardsTodo, setCardsTodo] = useState<ITodo[]>([]);
  const [cardsDoing, setCardsDoing] = useState<ITodo[]>([]);
  const [cardsDone, setCardsDone] = useState<ITodo[]>([]);

  const saveTodo = (todo: ITodo) => {
    const newTodo: ITodo = {
      id: uuidv4(),
      title: todo.title,
      description: todo.description,
      status: todo.status
    };

    switch (todo.status) {
      case "Doing":
        setCardsDoing((prevTodos) => [...prevTodos, newTodo]);
        break;
      case "Done":
        setCardsDone((prevTodos) => [...prevTodos, newTodo]);
        break;
      default:
        setCardsTodo((prevTodos) => [...prevTodos, newTodo]);
        break;
    }
  };

  const updateTodo = (todo: ITodo) => {
    switch (todo.status) {
      case "Doing":
        cardsDoing.forEach((cardDoing, index) => {
          if (cardDoing.id === todo.id) {
            cardsDoing[index] = cardDoing;
            setCardsDoing([...cardsDoing]);
          }
        });
        break;
      case "Done":
        cardsDone.forEach((cardDone, index) => {
          if (cardDone.id === todo.id) {
            cardsDone[index] = cardDone;
            setCardsDone([...cardsDone]);
          }
        });
        break;
      default:
        cardsTodo.forEach((cardTodo, index) => {
          if (cardTodo.id === todo.id) {
            cardsTodo[index] = cardTodo;
            setCardsTodo([...cardsTodo]);
          }
        });
        break;
    }
  };

  const value = useMemo(
    () => ({
      cardsTodo,
      cardsDoing,
      cardsDone,
      saveTodo,
      updateTodo
    }),
    [cardsTodo, cardsDoing, cardsDone]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;