export const ActionTypes = {
  ADDRESS: "ADDRESS",
};

export const addressAction = (data, operation) => {
  return {
    type: ActionTypes.ADDRESS,
    payload: { data: data, operation: operation },
  };
};

//for reference
// dispatch({ type: "ADDRESS", payload: { data: user, operation: "delete" } });
