/* eslint-disable no-console */
import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import KanbanBoard from "../pages/KanbanBoard";
import "@testing-library/jest-dom";
import TodoProvider from "../context/todoContext";

describe("KanbanBoard: texts", () => {
  beforeEach(() => {
    render(
      <TodoProvider>
        <KanbanBoard />
      </TodoProvider>
    );
  });

  test("should show title all the time", () => {
    expect(screen.getByText(/Kanban Board/i)).toBeInTheDocument();
  });

  test("should not show the content at the start", () => {
    expect(screen.queryByText(/task/i)).not.toBeInTheDocument();
  });

  test("should show boards name all the time", () => {
    expect(screen.getByText(/ToDo/i)).toBeInTheDocument();
    expect(screen.getByText(/Doing/i)).toBeInTheDocument();
    expect(screen.getByText(/Todo/i)).toBeInTheDocument();
  });
});

describe("KanbanBoard: card classes", () => {
  test("renders react component", () => {
    const { container } = render(
      <TodoProvider>
        <KanbanBoard />
      </TodoProvider>
    );

    const boxes = container.getElementsByClassName("MuiCard-root");

    console.log(boxes.length);

    expect(boxes.length).toBe(3);
  });
});
