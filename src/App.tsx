import { Routes, Route } from "react-router-dom";
import Typography from "@mui/material/Typography";
import GenerateBoard from "./pages/GenerateBoard";

const App = () => {
  return (
    <>
      <Typography variant="h2" gutterBottom component="div">
        Kanban Board
      </Typography>
      <Routes>
        <Route path="/" element={<GenerateBoard />} />
      </Routes>
    </>
  );
};

export default App;
