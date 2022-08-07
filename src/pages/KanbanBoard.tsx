/* eslint-disable no-console */
import { Alert, Divider, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import Todos from "../containers/Todos";
import { TodoContext } from "../context/todoContext";
import { TodoContextType } from "../types/todo";

const KanbanBoard = () => {
  const { todos, error } = useContext(TodoContext) as TodoContextType;

  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {error.open && (
        <Alert variant="outlined" severity="error">
          This is an error alert — check it out!
        </Alert>
      )}
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
    </Stack>
  );
};

export default KanbanBoard;
