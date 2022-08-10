/* eslint-disable no-console */
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { v4 as uuidv4 } from "uuid";
import Todo from "../components/Todo";
import { ITodo } from "../types/todo";
import TodoProvider from "../context/todoContext";

describe("Todos", () => {
  const newBlankTodo: ITodo = {
    id: uuidv4(),
    titulo: "My first task",
    conteudo: "Subject of my first task",
    lista: "ToDo",
    previous: "ToDo"
  };

  beforeEach(() => {
    render(
      <TodoProvider>
        <Todo todo={newBlankTodo} />
      </TodoProvider>
    );
  });

  test("should show boards with specific board name", async () => {
    expect(screen.getByText(/Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Content/i)).toBeInTheDocument();
  });

  test("should show boar pass by props", async () => {
    expect(screen.getByText(/My first task/i)).toBeInTheDocument();
    expect(screen.queryByText(/My second task/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Subject of my first task/i)).toBeInTheDocument();
  });
});
