const initialState = {
  countryData: [],
  stateData: [],
  cityData: [],
};

const countryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_COUNTRY_DATA":
      return {
        ...state,
        countryData: payload,
      };
    case "GET_STATE_DATA":
      return {
        ...state,
        stateData: payload,
      };
    case "GET_CITY_DATA":
      return {
        ...state,
        cityData: payload,
      };

    default:
      return state;
  }
};

export default countryReducer;
