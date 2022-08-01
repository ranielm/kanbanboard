import { Box, Card, CardContent, Grid, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
            label="Título"
            variant="standard"
            placeholder="Digite o nome da task"
            InputProps={{ disableUnderline: true }}
          />
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
          <TextField
            id="outlined-multiline-static"
            label="Assunto"
            multiline
            fullWidth
            rows={4}
            InputProps={{ disableUnderline: true }}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  </CardContent>
);

const CustomInput = () => {
  return (
    <Box sx={{ flexGrow: 1, minWidth: 275, mt: 2 }}>
      <Card variant="outlined">{title}</Card>
    </Box>
  );
};

export default CustomInput;
