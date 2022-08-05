import { FC, useContext, useState, FormEvent, useId } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../context/todoContext";
import { TodoContextType, ITodo } from "../types/todo";

const AddTodo: FC = () => {
  const titleId = useId();
  const descriptionId = useId();
  const { saveTodo } = useContext(TodoContext) as TodoContextType;

  const [formData, setFormData] = useState<ITodo>({
    id: uuidv4(),
    title: "",
    description: "",
    status: "Todo"
  });

  const handleTitle = (event: FormEvent<HTMLInputElement>): void => {
    const newTodo = { ...formData };
    newTodo.title = event.currentTarget.value;
    setFormData(newTodo);
  };

  const handleDescription = (event: FormEvent<HTMLInputElement>): void => {
    const newTodo = { ...formData };
    newTodo.description = event.currentTarget.value;
    setFormData(newTodo);
  };

  const handlesaveTodo = (event: FormEvent, handleFormData: ITodo) => {
    event.preventDefault();
    saveTodo(handleFormData);
  };

  return (
    <form
      onSubmit={(event) => {
        return handlesaveTodo(event, formData);
      }}
    >
      <div>
        <div>
          <input id={titleId} type="text" onChange={handleTitle} />
        </div>
        <div>
          <input id={descriptionId} type="text" onChange={handleDescription} />
        </div>
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};
export default AddTodo;
