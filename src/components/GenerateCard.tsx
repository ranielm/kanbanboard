/* eslint-disable no-console */
import { DragEvent } from "react";
import {
  Divider,
  Typography,
  Box,
  CardContent,
  Card as MaterialCard
} from "@mui/material";
import { Card } from "../interfaces/Card";
import IconButton from "./IconButton";
import TaskCard from "./TaskCard";

export type GenerateCardProps = {
  boardName: string;
  cards: Card[];
};

const GenerateCard = ({ boardName, cards }: GenerateCardProps) => {
  const dragStartHandler = (event: DragEvent<HTMLDivElement>, card: Card) => {
    event.dataTransfer.setData("id", card.id);
    event.dataTransfer.setData("title", card.title);
    // TODO: adicionar erro caso não haja title ou content
    event.dataTransfer.setData("content", card.title);
    event.dataTransfer.setData("list", card.list);
  };

  const dropHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log(event.dataTransfer.getData("list"));
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
          {cards.map((card: Card) => (
            <Box
              key={card.id}
              onDragStart={(event) => dragStartHandler(event, card)}
              draggable
            >
              {boardName}
              {card.list}
              <TaskCard card={card} changeTitle={changeTitle} />
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
