import axios from "../axios";
import { notifyDanger, notifySuccess } from "./customFn";
import { asyncGetProfileData } from "./profileAction";

export const asyncAddUserSubscription = (
  setIsPackSucess,
  navigate,
  payment_method,
  token,
  plan_id,
  setLoading,
  closeModal,
  details
) => {
  return (dispatch) => {
    const url = "/add_user_subscription";
    let data = {
      user_id: localStorage.getItem("futr_user_id"),
      password: localStorage.getItem("futr_password"),
      role: localStorage.getItem("futr_role"),
      payment_method: payment_method,
      plan_id: plan_id,
    };
    if (payment_method === "Stripe") {
      data.token = token;
    }
    if (payment_method === "Paypal") {
      data.transaction_history = details;
    }
    axios
      .post(url, data)
      .then((res) => {
        const { message, data, status } = res.data;
        console.log(res.data, "rrrrrrrrrrrrrrr");

        if (status) {
          notifySuccess(message);

          setIsPackSucess((p) => !p);
          dispatch(asyncGetProfileData(navigate));
          setTimeout(()=>{
            navigate("/dashboard");
          },1000)
        } else {
          notifyDanger(message);
        }
        closeModal();
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((err) => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  };
};
