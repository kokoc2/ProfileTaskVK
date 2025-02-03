import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter/Counter";

const js = require("./Counter/Counter");
describe("Counter", () => {
  it("should increment count after 1 second", async () => {
    render(<Counter />);

    const incrementButton = screen.getByTestId("increment");
    const countDisplay = screen.getByTestId("count");

    fireEvent.click(incrementButton);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    expect(countDisplay.textContent).toBe("1");
  });

  it("should decrement count after 1 second", async () => {
    render(<Counter />);

    const decrementButton = screen.getByTestId("decrement");
    const countDisplay = screen.getByTestId("count");

    fireEvent.click(screen.getByTestId("increment"));
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    fireEvent.click(decrementButton);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    expect(countDisplay.textContent).toBe("0");
  });

  it("should not increment beyond 99", async () => {
    render(<Counter />);

    const incrementButton = screen.getByTestId("increment");
    const countDisplay = screen.getByTestId("count");

    for (let i = 0; i < 100; i++) {
      fireEvent.click(incrementButton);
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      });
    }

    expect(countDisplay.textContent).toBe("99");
  });

  it("should add + when count reaches 99", async () => {
    render(<Counter />);

    const incrementButton = screen.getByTestId("increment");
    const countDisplay = screen.getByTestId("count");

    for (let i = 0; i < 99; i++) {
      fireEvent.click(incrementButton);
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      });
    }

    fireEvent.click(incrementButton);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    expect(countDisplay.textContent).toBe("99+");
  });
});
