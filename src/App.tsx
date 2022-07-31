import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
