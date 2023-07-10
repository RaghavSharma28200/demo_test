import axios from "../axios";
import { notifyDanger, notifySuccess } from "./customFn";
import { asyncLogOut } from "./loginAction";

export const setUserProfileData = (data) => {
  return {
    type: "SET_USER_PROFILE_DATA",
    payload: data,
  };
};

export const asyncGetProfileData = (navigate) => {
  return (dispatch) => {
    const url = "/user_detail";
    const data = {
      user_id: localStorage.getItem("futr_user_id"),
      password: localStorage.getItem("futr_password"),
      role:localStorage.getItem("futr_role")
    };
    axios
      .post(url, data)
      .then((res) => {
        if (res.data.status) {
          dispatch(setUserProfileData(res.data.data));
        }
      })
      .catch((err) => {
        console.log(err);
        const { status } = err.response;
        const { message } = err.response.data;
        if (status === 401) {
         dispatch(asyncLogOut(navigate))
        }
      });
  };
};

// export asyncChangeProfileData = (data)=>{
//   return (dispatch)=>{

//   }
// }

export const asyncChangePassword = (formdata, navigate, initialState) => {
  return (dispatch) => {
    const url = "/change_password";
    axios
      .post(url, formdata)
      .then((res) => {
        const { message, status, new_password, user_id } = res.data;
        if (status) {
          console.log(message);
          localStorage.setItem("futr_user_id", user_id);
          localStorage.setItem("futr_password", new_password);
          notifySuccess(message);
          initialState();
        } else {
          console.log(message);
          notifyDanger(message);
        }
      })
      .catch((err) => {
        const { status } = err.response;
        const { message } = err.response.data;
        notifyDanger(message);
        if (status === 401) {
          dispatch(asyncLogOut(navigate))
        }
        console.log(err);
      });
  };
};

export const asyncUpdateProfile = (data, setIsProfileUpdate) => {
  return (dispatch) => {
    const url = "/user_profile_update";
    axios
      .post(url, data)
      .then((res) => {
        const { message, status } = res.data;
        if (status) {
          notifySuccess(message);
          setIsProfileUpdate((p) => !p);
        } else {
          notifyDanger(message);
        }
      })
      .catch((err) => {
        const { message } = err.response.data;
        notifyDanger(message);
        console.log(err.response);
      });
  };
};
