const initialState = {};

const homeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_HOME_DATA":
      return payload;
    default:
      return state;
  }
};

export default homeReducer;
