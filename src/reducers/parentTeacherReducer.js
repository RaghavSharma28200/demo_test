const initialState = {
  teacherList: [],
  parentList: [],
};

const parentTeacherReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case "SET_PARENT_LIST":
      return {
        ...state,
        parentList: payload,
      };
    case "SET_TEACHER_LIST":
      return {
        ...state,
        teacherList: payload,
      };
    default:
      return state;
  }
};


export default parentTeacherReducer