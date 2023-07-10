import axios from "../axios";

export  const setCountryData = (data) => {
  return {
    type: "GET_COUNTRY_DATA",
    payload: data,
  };
};

export const setStateData = (data) => {
  return {
    type: "GET_STATE_DATA",
    payload: data,
  };
};

export  const setCityData = (data) => {
  return {
    type: "GET_CITY_DATA",
    payload: data,
  };
};

export const asyncGetCountryData = () => {
  return (dispatch) => {
    const url = "/get_country";

    axios
      .post(url)
      .then((res) => {
        
        const { data } = res.data;
        const newArr = data.map((country) => {
          return {
            label: country.name,
            value: country.id,
            phonecode: country.phonecode,
          };
        });
        dispatch(setCountryData(newArr));
      })
      .catch((err) => {
        console.log(err.resposne);
      });
  };
};

export const asyncGetStateData = (countryId) => {
  return (dispatch) => {
    const url = "/get_state";
    const data = {
      country_id: countryId,
    };
    axios
      .post(url, data)
      .then((res) => {
        const { data } = res.data;
        const newArr = data.map((country) => {
          return {
            label: country.name,
            value: country.id,
          };
        });
        dispatch(setStateData(newArr));
      })
      .catch((err) => {
        console.log(err.resposne);
      });
  };
};

export const asyncGetCityData = (stateId) => {
  return (dispatch) => {
    const url = "/get_city";
    const data = {
      state_id: stateId,
    };
    axios
      .post(url, data)
      .then((res) => {
        const { data } = res.data;
     
        const newArr = data.map((country) => {
          return {
            label: country.name,
            value: country.id,
          };
        });
        dispatch(setCityData(newArr));
      })
      .catch((err) => {
        console.log(err.resposne);
      });
  };
};
