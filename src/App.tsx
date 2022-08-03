import { Routes, Route } from "react-router-dom";
import KanbanBoard from "./pages/KanbanBoard";
import TodoProvider from "./context/todoContext";
import Todos from "./containers/Todos";
import AddTodo from "./components/AddTodo";

const App = () => {
  return (
    <TodoProvider>
      <main className="App">
        <h1>My Todos</h1>
        <AddTodo />
        <Todos />
      </main>
      <Routes>
        <Route path="/" element={<KanbanBoard />} />
      </Routes>
    </TodoProvider>
  );
};

export default App;
