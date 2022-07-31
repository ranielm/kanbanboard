import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider, Typography } from "@mui/material";
import { ReactNode } from "react";

type OutlinedCardProps = {
  children: ReactNode;
};

const OutlinedCard = ({ children }: OutlinedCardProps) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Backlog | 1
          </Typography>
          <Divider />
          {children}
        </CardContent>
      </Card>
    </Box>
  );
};

export default OutlinedCard;
