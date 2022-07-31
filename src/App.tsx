import { Routes, Route } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Home from "./pages/Home";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const App = () => {
  return (
    <>
      <Typography variant="h2" gutterBottom component="div">
        Kanban Board
      </Typography>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
