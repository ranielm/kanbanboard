import { Routes, Route } from "react-router-dom";
import KanbanBoard from "./pages/KanbanBoard";
import TodoProvider from "./context/todoContext";
import Todos from "./containers/Todos";
import AddTodo from "./components/AddTodo";

const App = () => {
  return (
    <TodoProvider>
      <h1>My Todos</h1>
      <AddTodo />
      <Todos />
      <Routes>
        <Route path="/" element={<KanbanBoard />} />
      </Routes>
    </TodoProvider>
  );
};

export default App;
