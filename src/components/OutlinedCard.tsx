import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider, Typography } from "@mui/material";
import { ReactNode } from "react";
import IconButton from "./IconButton";

type OutlinedCardProps = {
  boardName: string;
  children: ReactNode;
};

const OutlinedCard = ({ children, boardName }: OutlinedCardProps) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {boardName}
          </Typography>
          <Divider />
          {children}
        </CardContent>
        <Box sx={{ minWidth: 275, ml: 2, mb: 3 }}>
          <IconButton variant="add" />
        </Box>
      </Card>
    </Box>
  );
};

export default OutlinedCard;
