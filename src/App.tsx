import { Routes, Route } from "react-router-dom";
import KanbanBoard from "./pages/KanbanBoard";
import ToDoProvider from "./context/ToDoContext";
import ToDos from "./containers/ToDos";
import AddTodo from "./components/AddToDo";

const App = () => {
  return (
    <ToDoProvider>
      <main className="App">
        <h1>My ToDos</h1>
        <AddTodo />
        <ToDos />
      </main>
      <Routes>
        <Route path="/" element={<KanbanBoard />} />
      </Routes>
    </ToDoProvider>
  );
};

export default App;
