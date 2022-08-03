import {
  Box,
  Card as MaterialCard,
  CardContent,
  Grid,
  TextField
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "./IconButton";
import { Card } from "../interfaces/Card";

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
  card: Card;
  changeTitle: (cardId: string, title: string) => void;
}

const TaskCard = ({ card, changeTitle }: TaskCardProps) => {
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
                  label={card.title}
                  onChange={(e) => changeTitle(card.id, e.target.value)}
                  placeholder="Enter the task name"
                />
              </Grid>
              <Grid item xs={1} sm={1} md={1}>
                <TextField
                  id="outlined-multiline-static"
                  placeholder="Enter the task subject"
                  multiline
                  variant="standard"
                  fullWidth
                  rows={4}
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
