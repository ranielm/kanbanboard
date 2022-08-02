import { DragEvent, useState } from "react";
import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "./IconButton";
import TaskCard from "./TaskCard";

export type GenerateCardProps = {
  boardName: string;
  taskName: string;
  dragStartHandler: (event: DragEvent<HTMLDivElement>, data: string) => void;
};

type Card = {
  title: string;
  content: string;
};

const GenerateCard = ({
  boardName,
  taskName,
  dragStartHandler
}: GenerateCardProps) => {
  const [cards, setCards] = useState<Card[]>([]);

  const addCard = () => {
    // State change will cause component re-render
    const card: Card = { title: "100", content: "Bob" };
    setCards((prevCards) => [...prevCards, card]);
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {boardName}
          </Typography>
          <Divider />
          {cards.map((card: Card) => (
            <Box
              onDragStart={(event) => dragStartHandler(event, taskName)}
              draggable
            >
              {card.title}
              <TaskCard addCard={addCard} />
            </Box>
          ))}
        </CardContent>
        <Box sx={{ minWidth: 275, ml: 2, mb: 3 }}>
          <IconButton addCard={addCard} variant="add" />
        </Box>
      </Card>
    </Box>
  );
};

export default GenerateCard;
