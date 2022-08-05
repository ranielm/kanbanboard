import { Routes, Route } from "react-router-dom";
import KanbanBoard from "./pages/KanbanBoard";
import TodoProvider from "./context/todoContext";

const App = () => {
  return (
    <TodoProvider>
      <Routes>
        <Route path="/" element={<KanbanBoard />} />
      </Routes>
    </TodoProvider>
  );
};

export default App;
