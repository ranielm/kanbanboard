import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Typography from "@mui/material/Typography";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Typography variant="h2" gutterBottom component="div">
        Welcome to React Router!{" "}
      </Typography>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
