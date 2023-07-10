import axios from "../axios";

export const setHomeData = (data) => {
  return {
    type: "SET_HOME_DATA",
    payload: data,
  };
};

export const asyncHomeData = () => {
  return (dispatch) => {
    const url = "/homepage_details";
    axios
      .post(url)
      .then((res) => {
        const { message, status, data } = res.data;
        if (status) {
          dispatch(setHomeData(data));
        } else {
          dispatch(setHomeData({}));
        }
      })
      .catch((err) => {
        const { message } = err.response.data;
        dispatch(setHomeData({}));
        console.log(err.response);
      });
  };
};
