/* eslint-disable no-console */
import {
  Box,
  Card as MaterialCard,
  CardContent,
  Grid,
  TextField
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import IconButton from "./IconButton";
import { ITodo } from "../types/todo";

const theme = createTheme({
  components: {
    MuiInput: {
      defaultProps: {
        disableUnderline: true
      }
    }
  }
});

export interface TaskCardProps {
  todo: ITodo;
  changeTitle: (cardId: string, title: string) => void;
}

const TaskCard = ({ todo, changeTitle }: TaskCardProps) => {
  console.log(changeTitle);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  return (
    <Box sx={{ flexGrow: 1, minWidth: 275, mt: 2 }}>
      <MaterialCard variant="outlined">
        <CardContent>
          <ThemeProvider theme={theme}>
            <Grid
              container
              spacing={{ xs: 1, md: 1 }}
              columns={{ xs: 1, sm: 1, md: 1 }}
            >
              <Grid item xs={1} sm={1} md={1}>
                <TextField
                  id="standard-textarea"
                  variant="standard"
                  label="Title"
                  placeholder="Enter the task name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>
              <Grid item xs={1} sm={1} md={1}>
                <TextField
                  id="outlined-multiline-static"
                  label="Description"
                  placeholder="Enter the task subject"
                  value={description}
                  multiline
                  variant="standard"
                  fullWidth
                  rows={4}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
            </Grid>
          </ThemeProvider>
          <Box sx={{ mt: 0, mb: 0 }}>
            <IconButton variant="delete" />
          </Box>
        </CardContent>
      </MaterialCard>
    </Box>
  );
};

export default TaskCard;
