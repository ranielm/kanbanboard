/* eslint-disable no-console */
import { Divider, Stack, Typography } from "@mui/material";
import { useContext } from "react";
// TODO: criar exportador de componentes
import Todos from "../containers/Todos";
import { TodoContext } from "../context/todoContext";
import { TodoContextType } from "../types/todo";

const KanbanBoard = () => {
  const { cardsTodo } = useContext(TodoContext) as TodoContextType;
  const { cardsDoing } = useContext(TodoContext) as TodoContextType;
  const { cardsDone } = useContext(TodoContext) as TodoContextType;

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
        <Todos boardName="Todo" todos={cardsTodo} />
        <Todos boardName="Doing" todos={cardsDoing} />
        <Todos boardName="Done" todos={cardsDone} />
      </Stack>
    </>
  );
};

export default KanbanBoard;
