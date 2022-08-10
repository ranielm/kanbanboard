/* eslint-disable no-console */
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import GenerateCard from "../containers/Todos";
import TodoProvider from "../context/todoContext";

describe("Todos", () => {
  beforeEach(() => {
    render(
      <TodoProvider>
        <GenerateCard boardName="ToDo" todos={[]} />
      </TodoProvider>
    );
  });

  test("renders react component", async () => {
    const todos = screen.getByRole("button");
    fireEvent.click(todos);

    console.log(todos);
    expect(await screen.findByText(/Task/i)).toBeInTheDocument();
  });
});
