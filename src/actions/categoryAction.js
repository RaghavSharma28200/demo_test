import axios from "../axios";
import { notifyDanger } from "./customFn";

export const setCategoryData = (data) => {
  return {
    type: "SET_CATEGORY_DATA",
    payload: data,
  };
};

export const asyncGetCategoryData = (setLoading) => {
  return (dispatch) => {
    const url = "/get_categories";

    const data = {
      user_id: localStorage.getItem("futr_user_id"),
      password: localStorage.getItem("futr_password"),
      role:localStorage.getItem("futr_role")
    };
    axios
      .post(url,data)
      .then((res) => {
        const { status, message, data } = res.data;
        if (status) {
          dispatch(setCategoryData(data));
        } else {
          notifyDanger(message);
        }
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((err) => {
        console.log(err.response);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      
      });
  };
};
