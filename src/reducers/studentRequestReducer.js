const initialState = {};

const studentRequestReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_STUDENT_REQUEST_DATA":
      return payload;

    default:
      return state;
  }
};


export default studentRequestReducer