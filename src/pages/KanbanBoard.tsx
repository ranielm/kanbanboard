/* eslint-disable no-console */
import { Divider, Stack, Typography } from "@mui/material";
import { useContext } from "react";
// TODO: criar exportador de componentes
import Todos from "../containers/Todos";
import { TodoContext } from "../context/todoContext";
import { TodoContextType } from "../types/todo";

const KanbanBoard = () => {
  const { todos } = useContext(TodoContext) as TodoContextType;

  return (
    <>
      <Typography variant="h2" gutterBottom component="div">
        Kanban Board
      </Typography>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Todos boardName="Todo" todos={todos} />
        <Todos boardName="Doing" todos={todos} />
        <Todos boardName="Done" todos={todos} />
      </Stack>
    </>
  );
};

export default KanbanBoard;
