import axios from "../axios";
import { notifyDanger, notifySuccess } from "./customFn";
import { asyncGetProfileData } from "./profileAction";

export const setLogin = () => {
  return {
    type: "SET_LOGIN",
    payload: true,
  };
};

export const setLogout = () => {
  return {
    type: "SET_LOGOUT",
    payload: false,
  };
};

export const asyncLogOut = (navigate) => {
  return (dispatch) => {
    localStorage.removeItem("futr_user_id");
    localStorage.removeItem("futr_password");
    localStorage.removeItem("futr_role");
    notifySuccess("Logout Success");
    dispatch(setLogout());
    navigate("/login");
  };
};

export const asyncLogin = (formData, navigate, initialState) => {
  return (dispatch) => {
    const url = "/login";

    axios
      .post(url, formData)
      .then((res) => {
        const { message, user_id, password, role } = res.data;
        if (res.data.status) {
          console.log(res.data);
          dispatch(setLogin());
          localStorage.setItem("futr_user_id", user_id);
          localStorage.setItem("futr_password", password);
          localStorage.setItem("futr_role", role);
          notifySuccess(message);
          dispatch(asyncGetProfileData(navigate));
          initialState();
        } else {
          console.log(res.data);
          notifyDanger(message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const asyncSignup = (formData, initialState, navigate) => {
  return (dispatch) => {
    const url = "/signup";
    axios
      .post(url, formData)
      .then((res) => {
        const { message } = res.data;
        if (res.data.status) {
          console.log(res.data.message);
          notifySuccess(message);
          initialState();
          navigate("/login");
        } else {
          notifyDanger(message);
        }
      })
      .catch((err) => {
        console.log(err);
        const { message } = err.response.data;
        notifyDanger(message);
      });
  };
};

export const asyncCheckEmail = (email, navigate) => {
  return (dispatch) => {
    const url = "/forgot_password";
    const data = {
      email,
    };
    axios
      .post(url, data)
      .then((res) => {
        const { message } = res.data;
        if (res.data.status) {
          notifySuccess(message);
          navigate("/verify-otp", { state: { email } });
          console.log(res.data.message);
        } else {
          notifyDanger(message);
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err.response);
        const { message } = err.response.data;
        notifyDanger(message);
      });
  };
};

export const asyncVerifyOtp = (data, navigate) => {
  return (dispatch) => {
    const url = "/check_otp";
    console.log(data);
    const { email } = data;
    axios
      .post(url, data)
      .then((res) => {
        const { message } = res.data;
        if (res.data.status) {
          notifySuccess(message);
          navigate("/create-new-password", { state: { email } });
          console.log(res.data.message);
        } else {
          notifyDanger(message);
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err.response);
        const { message } = err.response.data;
        notifyDanger(message);
      });
  };
};

export const asyncResetPassword = (data, navigate) => {
  return (dispatch) => {
    const url = "/reset_password";
    axios
      .post(url, data)
      .then((res) => {
        const { message } = res.data;
        if (res.data.status) {
          notifySuccess(message);
          navigate("/login");
          console.log(res.data.message);
        } else {
          notifyDanger(message);
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err.response);
        const { message } = err.response.data;
        notifyDanger(message);
      });
  };
};
