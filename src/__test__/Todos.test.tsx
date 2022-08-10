/* eslint-disable no-console */
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Todos from "../containers/Todos";
import TodoProvider from "../context/todoContext";

describe("Todos", () => {
  beforeEach(() => {
    render(
      <TodoProvider>
        <Todos boardName="ToDo" todos={[]} />
      </TodoProvider>
    );
  });

  test("should show boards with specific board name", async () => {
    expect(screen.getByText(/ToDo/i)).toBeInTheDocument();
    expect(screen.queryByText(/Doing/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Done/i)).not.toBeInTheDocument();
  });
});
