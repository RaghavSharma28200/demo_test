const initialState = {
  allCategory: [],
};

const categoryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CATEGORY_DATA":
      return {
        ...state,
        allCategory: payload,
      };

    default:
      return state;
  }
};


export  default categoryReducer