import { useState } from "react";
import { Divider, Stack } from "@mui/material";
// TODO: criar exportador de componentes
import OutlinedCard from "../components/OutlinedCard";
import TaskCard from "../components/TaskCard";

const Home = () => {
  // The content of the target box
  const [content, setContent] = useState<string>("drop a button here");

  // This function will be triggered when you start dragging
  const dragStartHandler = (
    event: React.DragEvent<HTMLDivElement>,
    data: string
  ) => {
    // console.log("data dragStartHandler: ", data);
    event.dataTransfer.setData("text", data);
  };

  // This function will be triggered when dropping
  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    // console.log("data dropHandler: ", data);
    setContent(data);
  };

  // This makes the third box become droppable
  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
    >
      <div
        onDragStart={(event) => dragStartHandler(event, "first task")}
        draggable
      >
        <OutlinedCard>
          <TaskCard />
        </OutlinedCard>
      </div>
      <div
        onDragStart={(event) => dragStartHandler(event, "second task")}
        draggable
      >
        <OutlinedCard>
          <TaskCard />
        </OutlinedCard>
      </div>
      <div onDragOver={allowDrop} onDrop={dropHandler}>
        <OutlinedCard>
          <h2>{content}</h2>
        </OutlinedCard>
      </div>
    </Stack>
  );
};

export default Home;
