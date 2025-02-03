import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

const js = require("./Counter/Counter");

describe("increment and decrement functions", () => {
  beforeEach(() => {
    jest.useFakeTimers(); // Используем фейковые таймеры
    count = 0; // Сбрасываем count перед каждым тестом
  });

  afterEach(() => {
    jest.useRealTimers(); // Возвращаем настоящие таймеры после каждого теста
  });

  test("increment should increase count by 1 if count is less than 99", () => {
    increment(); // Вызываем функцию
    jest.advanceTimersByTime(1000); // Пропускаем таймер на 1 секунду

    expect(count).toBe(1); // Проверяем, что count увеличился на 1
  });

  test("increment should add '+' to count if count is 99 or more", () => {
    count = 99; // Устанавливаем count в 99
    increment(); // Вызываем функцию
    jest.advanceTimersByTime(1000); // Пропускаем таймер на 1 секунду

    expect(count).toBe("99+"); // Проверяем, что count стал "99+"
  });

  test("decrement should decrease count by 1 if count is a number", () => {
    count = 10; // Устанавливаем count в 10
    decrement(); // Вызываем функцию
    jest.advanceTimersByTime(1000); // Пропускаем таймер на 1 секунду

    expect(count).toBe(9); // Проверяем, что count уменьшился на 1
  });

  test("decrement should not change count if count is not a number", () => {
    count = "99+"; // Устанавливаем count в "99+"
    decrement(); // Вызываем функцию
    jest.advanceTimersByTime(1000); // Пропускаем таймер на 1 секунду

    expect(count).toBe("99+"); // Проверяем, что count не изменился
  });
});
});
