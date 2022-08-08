/* eslint-disable no-console */
import {
  createTheme,
  Divider,
  Stack,
  ThemeProvider,
  Typography
} from "@mui/material";
import { useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import CustomizedSnackbars from "../components/CustomizedSnackbars";
import Todos from "../containers/Todos";
import { TodoContext } from "../context/todoContext";
import { TodoContextType } from "../types/todo";

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  },
  components: {
    MuiInput: {
      defaultProps: {
        disableUnderline: true
      }
    }
  }
});

const KanbanBoard = () => {
  const { todos } = useContext(TodoContext) as TodoContextType;

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Typography variant="h2" gutterBottom component="div">
          Kanban Board
        </Typography>
        <CustomizedSnackbars />
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Todos boardName="Todo" todos={todos} />
          <Todos boardName="Doing" todos={todos} />
          <Todos boardName="Done" todos={todos} />
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

export default KanbanBoard;
