const initialState = {};

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_USER_PROFILE_DATA":
      return payload;

    default:
      return state;
  }
};


export default profileReducer