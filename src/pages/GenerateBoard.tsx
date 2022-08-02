import { useState, DragEvent } from "react";
import { Divider, Stack, Typography } from "@mui/material";
// TODO: criar exportador de componentes
import OutlinedCard from "../components/OutlinedCard";
// import TaskCard from "../components/TaskCard";

// type Card = {
//   title: string;
//   content: string;
// };

const GenerateBoard = () => {
  // type Card = {
  //   title: string;
  //   content: string;
  // };
  // const [cards, setCards] = useState<Card[]>([]);
  // The content of the target box
  const [content, setContent] = useState<string>("drop a button here");

  // This function will be triggered when you start dragging
  const dragStartHandler = (event: DragEvent<HTMLDivElement>, data: string) => {
    // eslint-disable-next-line no-console
    console.log("data dragStartHandler: ", data);
    event.dataTransfer.setData("text", data);
  };

  // This function will be triggered when dropping
  const dropHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    // console.log("data dropHandler: ", data);
    setContent(data);
  };

  // This makes the third box become droppable
  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
    >
      {/* TODO: criar array de componentes e variar apenas a task name */}
      <OutlinedCard
        dragStartHandler={dragStartHandler}
        taskName="first task"
        boardName="ToDo"
      />
      <OutlinedCard
        dragStartHandler={dragStartHandler}
        taskName="second task"
        boardName="Doing"
      />
      <div onDragOver={allowDrop} onDrop={dropHandler}>
        <Typography>{content}</Typography>
      </div>
    </Stack>
  );
};

export default GenerateBoard;