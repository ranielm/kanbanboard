import { useState } from "react";
import { Divider, Stack, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import OutlinedCard from "../components/OutlinedCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

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
          <Item>first task</Item>
        </OutlinedCard>
      </div>
      <div
        onDragStart={(event) => dragStartHandler(event, "second task")}
        draggable
      >
        <Item>second task</Item>
      </div>
      <div onDragOver={allowDrop} onDrop={dropHandler}>
        <h2>{content}</h2>
      </div>
    </Stack>
  );
};

export default Home;
