/* eslint-disable no-console */
import { ITodo } from "../types/todo";
import axiosInstance from "./api";

const todoForSave = { titulo: "", conteudo: "", lista: "" };

const persistTodo = async (todo: ITodo) => {
  todoForSave.titulo = todo.titulo;
  todoForSave.conteudo = todo.conteudo;
  todoForSave.lista = todo.lista;
  await axiosInstance.post("/cards", todoForSave);
};

export default persistTodo;
