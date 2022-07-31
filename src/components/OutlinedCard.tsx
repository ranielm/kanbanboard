import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider, Typography } from "@mui/material";

export default function OutlinedCard(props: { children: any }) {
  const { children } = props;

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Backlog | 1
            </Typography>
            <Divider />
            {children}
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}
