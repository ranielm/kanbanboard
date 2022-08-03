/* eslint-disable no-console */
import { Divider, Stack, Typography } from "@mui/material";
import { useState } from "react";
// TODO: criar exportador de componentes
import GenerateCard from "../components/GenerateCard";
import { Card } from "../interfaces/Card";

const KanbanBoard = () => {
  // const [cardsToDo, setCardsToDo] = useState<Card[]>([]);
  // const [cardsDoing, setCardsDoing] = useState<Card[]>([]);
  // const [cardsDone, setCardsDone] = useState<Card[]>([]);
  const [cardsToDo] = useState<Card[]>([]);
  const [cardsDoing] = useState<Card[]>([]);
  const [cardsDone] = useState<Card[]>([]);

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
        <GenerateCard boardName="Todo" cards={cardsToDo} />
        <GenerateCard boardName="Doing" cards={cardsDoing} />
        <GenerateCard boardName="Done" cards={cardsDone} />
      </Stack>
    </>
  );
};

export default KanbanBoard;
