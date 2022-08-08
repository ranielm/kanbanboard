/* eslint-disable no-console */
import { ITodo } from "../types/todo";
import axiosInstance from "./api";

const todoForSave = { titulo: "", conteudo: "", lista: "" };

export const saveTodo = async (todo: ITodo) => {
  todoForSave.titulo = todo.titulo;
  todoForSave.conteudo = todo.conteudo;
  todoForSave.lista = todo.lista;
  await axiosInstance.post("/cards", todoForSave);
};

export const removeTodo = async (todo: ITodo) => {
  await axiosInstance.delete(`/cards/${todo.id}`);
};

export const editTodo = async (todo: ITodo) => {
  await axiosInstance.put(`/cards/${todo.id}`, todo.id);
};
