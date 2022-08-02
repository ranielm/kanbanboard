import { Routes, Route } from "react-router-dom";
import KanbanBoard from "./pages/KanbanBoard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<KanbanBoard />} />
    </Routes>
  );
};

export default App;
