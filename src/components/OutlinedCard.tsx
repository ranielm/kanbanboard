import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider, Typography } from "@mui/material";
import { ReactNode } from "react";

export default function OutlinedCard(props: { children: ReactNode }) {
  const { children } = props;

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
}
