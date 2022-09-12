import React from "react";
import { UserType } from "../../HW8";
import { ActionType, homeWorkReducer } from "../homeWorkReducer";

let initialState: Array<UserType>;

beforeEach(() => {
  initialState = [
    { _id: 0, name: "Кот", age: 3 },
    { _id: 1, name: "Александр", age: 66 },
    { _id: 2, name: "Коля", age: 16 },
    { _id: 3, name: "Виктор", age: 44 },
    { _id: 4, name: "Дмитрий", age: 40 },
    { _id: 5, name: "Ирина", age: 55 },
  ];
});

test("sort name up", () => {
  const newState = homeWorkReducer(initialState, {
    type: "sort",
    payload: "up",
  });

  expect(newState[0].name[0] < newState[newState.length - 1].name[0]).toBe(
    true
  );
});
test("sort name down", () => {
  const newState = homeWorkReducer(initialState, {
    type: "sort",
    payload: "down",
  });
  expect(newState[0].name[0] > newState[newState.length - 1].name[0]).toBe(
    true
  );
});
test("check age 18", () => {
  let action: ActionType = {
    type: "check",
    payload: 18,
  };

  const newState = homeWorkReducer(initialState, action);
  expect(newState[0].age > 18).toBe(true);
  expect(newState[newState.length - 1].age > action.payload).toBe(true);
});
