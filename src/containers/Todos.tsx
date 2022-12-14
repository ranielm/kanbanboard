import { DragEvent, Fragment, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Divider,
  Typography,
  Box,
  CardContent,
  Card as MaterialCard,
  IconButton,
  Tooltip,
  Grid
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Todo from "../components/Todo";
import { ITodo, TodoContextType } from "../types/todo";
import { TodoContext } from "../context/todoContext";

export type GenerateCardProps = {
  boardName: "ToDo" | "Doing" | "Done";
  todos: ITodo[];
};

const GenerateCard = ({ boardName, todos }: GenerateCardProps) => {
  const { addTodo, todoForDrop, setTodoForDrop, updateTodo } = useContext(
    TodoContext
  ) as TodoContextType;

  const dragStartHandler = (event: DragEvent<HTMLDivElement>, todo: ITodo) => {
    const startTodo = todo;
    startTodo.previous = boardName;
    setTodoForDrop(startTodo);
  };

  const dropHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    todoForDrop.lista = boardName;
    updateTodo(todoForDrop);
  };

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const newBlankTodo: ITodo = {
    id: uuidv4(),
    titulo: " ",
    conteudo: " ",
    lista: "ToDo",
    previous: "ToDo"
  };

  const handleSaveTodo = () => {
    addTodo(newBlankTodo);
  };

  const pointer = { cursor: "pointer" };

  const verifyBoard = (todo: ITodo) => {
    return (
      todo.lista === boardName && (
        <Box
          key={todo.id}
          onDragStart={(event) => dragStartHandler(event, todo)}
          draggable
        >
          <Todo todo={todo} />
        </Box>
      )
    );
  };

  const boardSize = () => {
    let countBoards = 0;
    todos.forEach((singleTodo) => {
      if (singleTodo.lista === boardName) {
        countBoards += 1;
      }
    });
    return countBoards;
  };

  return (
    <Box onDragOver={allowDrop} onDrop={dropHandler}>
      <MaterialCard sx={{ width: 300 }} variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <>
              {boardName} | {boardSize()}
            </>
          </Typography>
          <Divider />
          {todos.map((todo: ITodo) => verifyBoard(todo))}
        </CardContent>
        {boardName === "ToDo" && (
          <Grid container justifyContent="flex-end">
            <Tooltip title="Add ToDo" sx={{ mr: 1, mb: 2 }}>
              <IconButton style={pointer} onClick={() => handleSaveTodo()}>
                <AddCircleOutlineOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        )}
      </MaterialCard>
    </Box>
  );
};

export default GenerateCard;
