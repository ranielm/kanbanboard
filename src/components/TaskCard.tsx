import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "./IconButton";

const theme = createTheme({
  components: {
    MuiInput: {
      defaultProps: {
        disableUnderline: true
      }
    }
  }
});
const title = (
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
            placeholder="Digite o nome da task"
            InputProps={{ disableUnderline: true }}
          />
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
          <TextField
            id="outlined-multiline-static"
            placeholder="Digite o assunto da task"
            multiline
            fullWidth
            rows={4}
            InputProps={{ disableUnderline: true }}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
    <CardActions>
      <IconButton variant="delete" />
    </CardActions>
  </CardContent>
);

const TaskCard = () => {
  return (
    <Box sx={{ flexGrow: 1, minWidth: 275, mt: 2 }}>
      <Card variant="outlined">{title}</Card>
    </Box>
  );
};

export default TaskCard;
