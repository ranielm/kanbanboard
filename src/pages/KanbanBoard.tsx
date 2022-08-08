/* eslint-disable no-console */
import {
  AppBar,
  Box,
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
  console.log("KanbanBoard");
  const { todos } = useContext(TodoContext) as TodoContextType;

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CustomizedSnackbars />
      <AppBar position="static">
        <Typography sx={{ mt: 1 }} align="center" gutterBottom variant="h4">
          Kanban Board
        </Typography>
      </AppBar>
      <Box display="flex" sx={{ mt: 2 }} alignItems="center">
        <Box m="auto">
          <Stack
            sx={{ mt: 2 }}
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Todos boardName="ToDo" todos={todos} />
            <Todos boardName="Doing" todos={todos} />
            <Todos boardName="Done" todos={todos} />
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default KanbanBoard;
