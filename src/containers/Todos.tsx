/* eslint-disable no-console */
import { DragEvent, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
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
  boardName: string;
  todos: ITodo[];
};

const GenerateCard = ({ boardName, todos }: GenerateCardProps) => {
  const { saveTodo } = useContext(TodoContext) as TodoContextType;
  const dragStartHandler = (event: DragEvent<HTMLDivElement>, todo: ITodo) => {
    console.log("todo: ", todo);
    // TODO: adicionar erro caso não haja title ou content
    event.dataTransfer.setData("id", todo.id);
    event.dataTransfer.setData("status", todo.status);
  };

  const dropHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log(event.dataTransfer.getData("id"));
    console.log(event.dataTransfer.getData("status"));
    console.log(boardName);
  };

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleSaveTodo = () => {
    const newBlankTodo: ITodo = {
      id: uuidv4(),
      title: "",
      description: "",
      status: "Todo"
    };

    console.log("newBlankTodo: ", newBlankTodo);
    saveTodo(newBlankTodo);
  };

  return (
    <Box onDragOver={allowDrop} onDrop={dropHandler}>
      <MaterialCard sx={{ width: 300 }} variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {boardName}
          </Typography>
          <Divider />
          {todos.map((todo: ITodo) => (
            <Box
              key={todo.id}
              onDragStart={(event) => dragStartHandler(event, todo)}
              draggable
            >
              <Todo todo={todo} />
            </Box>
          ))}
        </CardContent>
        <Box sx={{ ml: 2, mb: 3 }}>
          <Button
            variant="contained"
            endIcon={<AddCircleIcon />}
            onClick={handleSaveTodo}
          >
            Add
          </Button>
        </Box>
      </MaterialCard>
    </Box>
  );
};

export default GenerateCard;
