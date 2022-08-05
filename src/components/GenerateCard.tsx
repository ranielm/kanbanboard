/* eslint-disable no-console */
import { DragEvent } from "react";
import {
  Divider,
  Typography,
  Box,
  CardContent,
  Card as MaterialCard
} from "@mui/material";
import IconButton from "./IconButton";
import TaskCard from "./TaskCard";
import { ITodo } from "../types/todo";

export type GenerateCardProps = {
  boardName: string;
  todos: ITodo[];
};

const GenerateCard = ({ boardName, todos }: GenerateCardProps) => {
  const dragStartHandler = (event: DragEvent<HTMLDivElement>, todo: ITodo) => {
    event.dataTransfer.setData("id", todo.id);
    event.dataTransfer.setData("title", todo.title);
    // TODO: adicionar erro caso não haja title ou content
    event.dataTransfer.setData("title", todo.title);
    event.dataTransfer.setData("status", todo.status);
  };

  const dropHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log(event.dataTransfer.getData("status"));
  };

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const changeTitle = (cardId: string, title: string) => {
    console.log("cardId: ", cardId);
    console.log("title: ", title);
  };

  return (
    <Box sx={{ minWidth: 275 }} onDragOver={allowDrop} onDrop={dropHandler}>
      <MaterialCard variant="outlined">
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
              {boardName}
              {todo.status}
              <TaskCard todo={todo} changeTitle={changeTitle} />
            </Box>
          ))}
        </CardContent>
        <Box sx={{ minWidth: 275, ml: 2, mb: 3 }}>
          <IconButton variant="add" />
        </Box>
      </MaterialCard>
    </Box>
  );
};

export default GenerateCard;
