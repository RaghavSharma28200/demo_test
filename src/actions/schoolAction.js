import axios from "../axios";
import { notifyDanger, notifySuccess } from "./customFn";

export const asyncCreateNewStudent = (formdata, initialState) => {
  return (dispatch) => {
    const url = "/add_student_detail";
    axios
      .post(url, formdata)
      .then((res) => {
        const { message, status } = res.data;
        if (status) {
          notifySuccess(message);
          initialState()
        } else {
          notifyDanger(message);
        }
      })
      .catch((err) => {
        console.log(err.response);
        const {message} = err.response.data
        notifyDanger(message)
      });
  };
};
