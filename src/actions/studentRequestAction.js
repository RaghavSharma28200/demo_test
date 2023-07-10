import axios from "../axios";
import { notifyDanger } from "./customFn";

export const setStudentRequestDetail = (data) => {
  return {
    type: "SET_STUDENT_REQUEST_DATA",
    payload: data,
  };
};

export const asyncStudentRequestDetail = (data, setLoading, setTotalPage, setDataLoad) => {
  return (dispatch) => {
    setDataLoad(true)
    const url = "/student_request_detail";
    axios
      .post(url, data)
      .then((res) => {
        const { data, status, message, page_count } = res.data;
        if (status) {
          dispatch(setStudentRequestDetail(data));
          setTotalPage(page_count);
        } else {
          notifyDanger(message);
          setTotalPage(0);
        }
        setTimeout(() => {
          setDataLoad(false);
        }, 500);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false);
        setTimeout(() => {
          setDataLoad(false);
        }, 500);
      });
  };
};
