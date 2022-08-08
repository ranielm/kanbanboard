/* eslint-disable no-console */
import { DragEvent, useContext } from "react";
import {
  Divider,
  Typography,
  Box,
  CardContent,
  Card as MaterialCard,
  Button
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Todo from "../components/Todo";
import { ITodo, TodoContextType } from "../types/todo";
import { TodoContext } from "../context/todoContext";

export type GenerateCardProps = {
  boardName: "Todo" | "Doing" | "Done";
  todos: ITodo[];
};

const GenerateCard = ({ boardName, todos }: GenerateCardProps) => {
  const { addNewTodo, todoForDrop, setTodoForDrop, updateTodo } = useContext(
    TodoContext
  ) as TodoContextType;

  const dragStartHandler = (event: DragEvent<HTMLDivElement>, todo: ITodo) => {
    const startTodo = todo;
    startTodo.previous = boardName;
    setTodoForDrop(startTodo);
  };

  const dropHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    todoForDrop.status = boardName;
    updateTodo(todoForDrop);
  };

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleSaveTodo = () => {
    addNewTodo();
  };

  const verifyBoard = (todo: ITodo) => {
    return (
      todo.status === boardName && (
        <Box
          key={todo.id}
          onDragStart={(event) => dragStartHandler(event, todo)}
          draggable
        >
          <Todo todo={todo} />
        </Box>
      )
    );
  };

  return (
    <Box onDragOver={allowDrop} onDrop={dropHandler}>
      <MaterialCard sx={{ width: 300 }} variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {boardName}
          </Typography>
          <Divider />
          {todos.map((todo: ITodo) => verifyBoard(todo))}
        </CardContent>
        {boardName === "Todo" && (
          <Box sx={{ ml: 3, mb: 3 }}>
            <Button
              variant="contained"
              endIcon={<AddCircleIcon />}
              onClick={handleSaveTodo}
            >
              Add
            </Button>
          </Box>
        )}
      </MaterialCard>
    </Box>
  );
};

export default GenerateCard;
