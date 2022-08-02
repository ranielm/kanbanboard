import { DragEvent } from "react";
import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "./IconButton";
import TaskCard from "./TaskCard";

export type OutlinedCardProps = {
  boardName: string;
  taskName: string;
  dragStartHandler: (event: DragEvent<HTMLDivElement>, data: string) => void;
};

const OutlinedCard = ({
  boardName,
  taskName,
  dragStartHandler
}: OutlinedCardProps) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {boardName}
          </Typography>
          <Divider />
          <Box
            onDragStart={(event) => dragStartHandler(event, taskName)}
            draggable
          >
            <TaskCard />
          </Box>
        </CardContent>
        <Box sx={{ minWidth: 275, ml: 2, mb: 3 }}>
          <IconButton variant="add" />
        </Box>
      </Card>
    </Box>
  );
};

export default OutlinedCard;
