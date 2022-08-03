import { Button, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SaveIcon from "@mui/icons-material/Save";

export interface ButtonProps {
  variant: "save" | "delete" | "add";
}

const PresetButton = ({ variant }: ButtonProps) => {
  switch (variant) {
    case "save":
      return (
        <Button variant="outlined" endIcon={<SaveIcon />}>
          Save
        </Button>
      );
    case "delete":
      return (
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      );
    case "add":
      return (
        <Button variant="contained" endIcon={<AddCircleIcon />}>
          Add
        </Button>
      );
    default:
      throw new Error("invalid button kind");
  }
};

const IconButton = ({ variant }: ButtonProps) => {
  return (
    <Stack direction="row" spacing={2}>
      <PresetButton variant={variant} />
    </Stack>
  );
};

export default IconButton;
