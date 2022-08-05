/* eslint-disable no-console */
import {
  Box,
  Card as MaterialCard,
  CardContent,
  Grid,
  TextField
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { ITodo, TodoContextType } from "../types/todo";
import { TodoContext } from "../context/todoContext";

const theme = createTheme({
  components: {
    MuiInput: {
      defaultProps: {
        disableUnderline: true
      }
    }
  }
});

export interface TodoProps {
  todo: ITodo;
}

const Todo = ({ todo }: TodoProps) => {
  const [todoForm, setTodoForm] = useState(todo);
  const { deleteTodo } = useContext(TodoContext) as TodoContextType;

  const handleTitle = (title: string) => {
    const updateTodo = { ...todoForm };
    updateTodo.title = title;
    setTodoForm(updateTodo);
  };

  const handleDescription = (description: string) => {
    const updateTodo = { ...todoForm };
    updateTodo.description = description;
    setTodoForm(updateTodo);
  };

  const handleDeleteTodo = () => {
    deleteTodo(todoForm);
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
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
                  value={todoForm.title}
                  onChange={(e) => handleTitle(e.target.value)}
                />
              </Grid>
              <Grid item xs={1} sm={1} md={1}>
                <TextField
                  id="outlined-multiline-static"
                  label="Description"
                  placeholder="Enter the task subject"
                  value={todoForm.description}
                  multiline
                  variant="standard"
                  fullWidth
                  rows={2}
                  onChange={(e) => handleDescription(e.target.value)}
                />
              </Grid>
            </Grid>
          </ThemeProvider>
          <Box sx={{ mt: 0, mb: 0 }}>
            <DeleteIcon onClick={handleDeleteTodo} />
          </Box>
        </CardContent>
      </MaterialCard>
    </Box>
  );
};

export default Todo;
