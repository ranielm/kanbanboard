import { FC, useContext, useState, FormEvent, useId } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToDoContext } from "../context/ToDoContext";
import { ToDoContextType, IToDo } from "../types/ToDo";

const AddTodo: FC = () => {
  const titleId = useId();
  const descriptionId = useId();
  const { saveToDo } = useContext(ToDoContext) as ToDoContextType;

  const [formData, setFormData] = useState<IToDo>({
    id: uuidv4(),
    title: "",
    description: "",
    status: false
  });

  const handleTitle = (event: FormEvent<HTMLInputElement>): void => {
    const newToDo = { ...formData };
    newToDo.title = event.currentTarget.value;
    setFormData(newToDo);
  };

  const handleDescription = (event: FormEvent<HTMLInputElement>): void => {
    const newToDo = { ...formData };
    newToDo.description = event.currentTarget.value;
    setFormData(newToDo);
  };

  const handlesaveToDo = (event: FormEvent, handleFormData: IToDo) => {
    event.preventDefault();
    saveToDo(handleFormData);
  };

  return (
    <form
      className="Form"
      onSubmit={(event) => {
        return handlesaveToDo(event, formData);
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
