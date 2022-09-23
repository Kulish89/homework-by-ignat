const initState = {
  loading: false,
};
export type StateType = {
  loading: boolean;
};
type ActionType = ReturnType<typeof loadingAC>;
export const loadingReducer = (
  state = initState,
  action: ActionType
): StateType => {
  switch (action.type) {
    case "CHANGE-LOADING": {
      return { ...state, loading: action.loading };
    }
    default:
      return state;
  }
};

export const loadingAC = (isLoading: boolean) => {
  return {
    type: "CHANGE-LOADING",
    loading: isLoading,
  } as const;
};
