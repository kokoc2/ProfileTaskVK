import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

const js = require("./Counter");

test("renders counter with initial count", () => {
  /* render(<Counter />);
  const countDisplay = screen.getByText(/count:/i);
  expect(countDisplay).toHaveTextContent("Count: 0"); */
  expect(js.count).toBe(0);
});
describe("Counter Component", () => {
  test("renders counter with initial count", () => {
    render(<Counter />);
    const countDisplay = screen.getByText(/count:/i);
    expect(countDisplay).toHaveTextContent("Count: 0");
  });

  test("increments count when increment button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByText(/increment/i);
    fireEvent.click(incrementButton);
    const countDisplay = screen.getByText(/count:/i);
    expect(countDisplay).toHaveTextContent("Count: 1");
  });

  test("decrements count when decrement button is clicked", () => {
    render(<Counter />);
    const decrementButton = screen.getByText(/decrement/i);
    fireEvent.click(decrementButton);
    const countDisplay = screen.getByText(/count:/i);
    expect(countDisplay).toHaveTextContent("Count: -1");
  });

  test("resets count when reset button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByText(/increment/i);
    fireEvent.click(incrementButton); // Увеличиваем до 1
    fireEvent.click(incrementButton); // Увеличиваем до 2

    const resetButton = screen.getByText(/reset/i);
    fireEvent.click(resetButton);

    const countDisplay = screen.getByText(/count:/i);
    expect(countDisplay).toHaveTextContent("Count: 0");
  });
});
