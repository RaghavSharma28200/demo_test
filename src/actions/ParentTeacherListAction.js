import axios from "../axios";
import { notifyDanger } from "./customFn";

export const setParentList = (data) => {
  return {
    type: "SET_PARENT_LIST",
    payload: data,
  };
};

export const setTeacherList = (data) => {
  return {
    type: "SET_TEACHER_LIST",
    payload: data,
  };
};

export const asyncParentListData = () => {
  return (dispatch) => {
    const url = "/parent_list";
    const data = {
      user_id: localStorage.getItem("futr_user_id"),
      password: localStorage.getItem("futr_password"),
      role: localStorage.getItem("futr_role"),
    };
    axios
      .post(url, data)
      .then((res) => {
        const { message, data, status } = res.data;
        if (status) {
          dispatch(setParentList(data));
        } else {
          notifyDanger(message);
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const asyncTeacherListData = () => {
  return (dispatch) => {
    const url = "/teacher_list";
    const data = {
      user_id: localStorage.getItem("futr_user_id"),
      password: localStorage.getItem("futr_password"),
      role: localStorage.getItem("futr_role"),
    };
    axios
      .post(url, data)
      .then((res) => {
        const { message, data, status } = res.data;
        if (status) {
          dispatch(setTeacherList(data));
        } else {
          notifyDanger(message);
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};
