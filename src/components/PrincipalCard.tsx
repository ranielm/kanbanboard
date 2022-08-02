import { DragEvent } from "react";
// import { Box } from "@mui/material";
// import OutlinedCard from "./OutlinedCard";
import TaskCard from "./TaskCard";

export type PrincipalCardProps = {
  boardName: string;
  taskName: string;
  dragStartHandler: (event: DragEvent<HTMLDivElement>, data: string) => void;
};

const PrincipalCard = () => {
  return (
    // <OutlinedCard boardName={boardName}>
    //   <Box onDragStart={(event) => dragStartHandler(event, taskName)} draggable>
    <TaskCard />
    //   </Box>
    // </OutlinedCard>
  );
};

export default PrincipalCard;
