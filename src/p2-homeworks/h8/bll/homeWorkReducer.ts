import { UserType } from "../HW8";
export type ActionType = {
  type: "sort" | "check";
  payload: string | number;
};
export const homeWorkReducer = (
  state: Array<UserType>,
  action: ActionType
): Array<UserType> => {
  switch (action.type) {
    case "sort": {
      return [...state].sort((a, b) => {
        return action.payload === "up"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      });
    }
    case "check": {
      return [...state].filter((p) => p.age >= action.payload);
    }
    default:
      return state;
  }
};
