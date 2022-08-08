/* eslint-disable no-console */
import { Routes, Route } from "react-router-dom";
import KanbanBoard from "./pages/KanbanBoard";
import TodoProvider from "./context/todoContext";

const App = () => {
  console.log("App");
  return (
    <TodoProvider>
      <Routes>
        <Route path="/" element={<KanbanBoard />} />
      </Routes>
    </TodoProvider>
  );
};

export default App;
