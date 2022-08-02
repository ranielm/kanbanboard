import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider, Typography } from "@mui/material";
import { ReactNode } from "react";
import IconButton from "./IconButton";

type OutlinedCardProps = {
  children: ReactNode;
};

const OutlinedCard = ({ children }: OutlinedCardProps) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            ToDo | 1
          </Typography>
          <Divider />
          {children}
          <IconButton variant="add" />
        </CardContent>
      </Card>
    </Box>
  );
};

export default OutlinedCard;
