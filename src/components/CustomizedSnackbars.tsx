import { Snackbar, Alert } from "@mui/material";
import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import { TodoContextType } from "../types/todo";

const CustomizedSnackbars = () => {
  const { snackbar, setSnackbar } = useContext(TodoContext) as TodoContextType;
  const handleClose = () => {
    setSnackbar({
      message: "",
      open: false,
      type: "warning"
    });
  };

  return (
    <Snackbar
      open={snackbar.open}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={4000}
    >
      <Alert
        severity={snackbar.type}
        sx={{ width: "100%" }}
        onClose={handleClose}
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
};

export default CustomizedSnackbars;
