import React, { useEffect, useState } from "react";
import PaymentModal from "./PaymentModal";
import MiddleLoader from "../MiddleLoader";
import axios from "../../axios";
import LoadingOverlay from "react-loading-overlay";
import Loader from "../Loader";
import { Table } from "react-bootstrap";

const paymentDataArr = [
  {
    name: "Shirley O. Bolton",
    email: "shirleyo.bolton@gmail.com",
    creditNo: "xxxx 0101",
    premium: "01 Year",
    playDate: "03 - 03 - 2023",
    price: "300",
  },
  {
    name: "Shirley O. Bolton",
    email: "shirleyo.bolton@gmail.com",
    creditNo: "xxxx 0101",
    premium: "01 Year",
    playDate: "03 - 03 - 2023",
    price: "300",
  },
  {
    name: "Shirley O. Bolton",
    email: "shirleyo.bolton@gmail.com",
    creditNo: "xxxx 0101",
    premium: "01 Year",
    playDate: "03 - 03 - 2023",
    price: "300",
  },
  {
    name: "Shirley O. Bolton",
    email: "shirleyo.bolton@gmail.com",
    creditNo: "xxxx 0101",
    premium: "01 Year",
    playDate: "03 - 03 - 2023",
    price: "300",
  },
  {
    name: "Shirley O. Bolton",
    email: "shirleyo.bolton@gmail.com",
    creditNo: "xxxx 0101",
    premium: "01 Year",
    playDate: "03 - 03 - 2023",
    price: "300",
  },
  {
    name: "Shirley O. Bolton",
    email: "shirleyo.bolton@gmail.com",
    creditNo: "xxxx 0101",
    premium: "01 Year",
    playDate: "03 - 03 - 2023",
    price: "300",
  },
];

const PaymentHistory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [offSet, setOffset] = useState(0);
  const [subscriptionHistory, setSubscriptionHistory] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [isDataLoad, setDataLoad] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [paymentDetails, setPaymentDetails] = useState({});

  const closeModal = () => {
    setIsOpen(false);
  };

  const OpenPaymentModal = (data) => {
    setIsOpen(true);
    setPaymentDetails(data);
  };

  useEffect(() => {
    getSubscriptionHistory();
  }, [offSet]);

  const getSubscriptionHistory = () => {
    setDataLoad(true);
    const url = "/subscription_history";
    const data = {
      user_id: localStorage.getItem("futr_user_id"),
      password: localStorage.getItem("futr_password"),
      role: localStorage.getItem("futr_role"),
      offset: offSet,
    };

    axios
      .post(url, data)
      .then((res) => {
        const { data, status, message, page_count } = res.data;
        if (status) {
          setSubscriptionHistory(data);
          setTotalPage(page_count);
        } else {
          setSubscriptionHistory([]);
          setTotalPage(0);
        }
        setLoading(false);
        setTimeout(() => {
          setDataLoad(false);
        }, 500);
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false);
        setTimeout(() => {
          setDataLoad(false);
        }, 500);
      });
  };

  return (
    <LoadingOverlay
      active={Loading}
      spinner={<Loader />}
      className="loading-screen"
    >
      <div className="payment_history_container">
        <div className="payment_history_heading">
          <h2>Payment History</h2>
          <div className="school_profile_hr"></div>
        </div>

        <div className="payment_detail admin_profile_container">
          <Table responsive className="addcontact_table  ">
            <thead>
              <tr className="payment_detail_title">
                <th>Name</th>
                <th>Payment Method</th>
                <th>Plan Type</th>
                <th>Pay Date</th>
                <th>Expiry Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody className="payment_detail_body">
              {isDataLoad ? (
                <tr>
                  <td colSpan="6">
                    <MiddleLoader />
                  </td>
                </tr>
              ) : (
                subscriptionHistory.map((data, i) => {
                  return (
                    <tr
                      className="payment_detail_desc2 "
                      key={i}
                      onClick={() => OpenPaymentModal(data)}
                    >
                      <td>
                        <h3>{data.username}</h3>
                        <p>{data.email}</p>
                      </td>
                      <td>
                        <p>{data.payment_method}</p>
                      </td>
                      <td>
                        <p>{data.plan_title}</p>
                        <p>{data.plan_type}</p>
                      </td>
                      <td>
                        <p>{data.pay_date}</p>
                      </td>
                      <td>
                        <p>{data.exp_date}</p>
                      </td>
                      <td>
                        <p>
                          {data.amount != "" ? (
                            <>
                              <span>$</span>
                              {data.amount}
                            </>
                          ) : (
                            ""
                          )}
                        </p>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </Table>

          {/* <div className="payment_detail_title row">
            <div className="col-2">Name</div>
            <div className="col-2">Payment Method</div>
            <div className="col-2">Plan Type</div>
            <div className="col-2">Pay Date</div>
            <div className="col-2">Expiry Date</div>
            <div className="col-2">Amount</div>
          </div>

          {paymentDataArr.map((data, i) => {
            return (
              <div
                key={i}
                className="payment_detail_desc row"
                onClick={() => setIsOpen(true)}
              >
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <h3>{data.name}</h3>
                  <p>{data.email}</p>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-7">
                  <h2 className="payment-detail_heading">Payment Method</h2>
                  <p>credit card</p>
                  <p>{data.creditNo}</p>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-5">
                  <h2 className="payment-detail_heading">Plan Type</h2>
                  <p>Premium</p>
                  <p>{data.premium}</p>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-7">
                  <h2 className="payment-detail_heading">Pay Date</h2>
                  <p>{data.playDate}</p>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-5 payment_history_price">
                  <h2 className="payment-detail_heading">Amount</h2>
                  <p>
                    <span>$</span>
                    {data.price}
                  </p>
                </div>
              </div>
            );
          })} */}
        </div>

        <PaymentModal isOpen={isOpen} closeModal={closeModal} paymentDetails={paymentDetails} />
      </div>
    </LoadingOverlay>
  );
};

export default PaymentHistory;
