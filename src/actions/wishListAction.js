import axios from "../axios";
import { notifyDanger, notifySuccess } from "./customFn";

export const asyncPostWishList = (data, setIsChange, setIsUpdate  ) => {
  return (dispatch) => {
    const url = "/wishlist";
    axios
      .post(url, data)
      .then((res) => {
        const { message, status , page_count } = res.data;
        if (status) {
          notifySuccess(message);
          setIsChange((p) => !p);
          setIsUpdate((p) => !p);
          
        } else {
          notifyDanger(message);
          setIsChange((p) => !p);
          setIsUpdate((p) => !p);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
