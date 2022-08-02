import {
  Box,
  Card as MaterialCard,
  CardContent,
  Grid,
  TextField
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "./IconButton";
import { Card } from "./GenerateCard";

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
  addCard: () => void;
}

const TaskCard = ({ card, addCard }: TaskCardProps) => {
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
                  // placeholder="Digite o nome da task"
                  placeholder={card.title}
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>
              <Grid item xs={1} sm={1} md={1}>
                <TextField
                  id="outlined-multiline-static"
                  // placeholder="Digite o assunto da task"
                  placeholder={card.content}
                  multiline
                  fullWidth
                  rows={4}
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>
            </Grid>
          </ThemeProvider>
          <Box sx={{ mt: 2, mb: 3 }}>
            <IconButton variant="delete" addCard={addCard} />
          </Box>
        </CardContent>
      </MaterialCard>
    </Box>
  );
};

export default TaskCard;
