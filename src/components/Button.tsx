import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Input from "@mui/material/Input";
import { Typography } from "@mui/material";

declare module "@mui/material/Input" {
  interface InputPropsVariantOverrides {
    disableUnderline: true;
  }
}

const defaultTheme = createTheme();

const theme = createTheme({
  components: {
    MuiInput: {
      variants: [
        {
          props: { disableUnderline: true },
          style: {
            textTransform: "none",
            border: "none",
            color: defaultTheme.palette.primary.main
          }
        }
      ]
    }
  }
});

const GlobalThemeVariants = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Assunto
      </Typography>
      <Input disableUnderline sx={{ m: 1 }} />
    </ThemeProvider>
  );
};

export default GlobalThemeVariants;
