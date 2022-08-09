import { ITodo } from "../types/todo";
import axiosInstance from "./api";

const todoForSave = { titulo: "", conteudo: "", lista: "" };

export const getTodos = async (): Promise<ITodo[]> => {
  const response = await axiosInstance.get("/cards");
  return response.data;
};

export const saveTodo = async (todo: ITodo): Promise<ITodo> => {
  todoForSave.titulo = todo.titulo;
  todoForSave.conteudo = todo.conteudo;
  todoForSave.lista = todo.lista;
  const response = await axiosInstance.post("/cards", todoForSave);
  return response.data;
};

export const removeTodo = async (todo: ITodo): Promise<ITodo[]> => {
  const response = await axiosInstance.delete(`/cards/${todo.id}`);
  return response.data;
};

export const editTodo = async (todo: ITodo): Promise<ITodo> => {
  const response = await axiosInstance.put(`/cards/${todo.id}`, todo);
  return response.data;
};
