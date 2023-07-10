import React, { useMemo } from "react";
import { Modal } from "react-bootstrap";
import { images, useResponsiveFontSize } from "../../actions/customFn";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { asyncAddUserSubscription } from "../../actions/SubscriptionAction";

import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import Loader from "../Loader";
import { BounceLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const SubscriptionModal = ({
  closeModal,
  openModal,
  subscriptionDetail,
  setLoading,
  setIsPackSucess,
}) => {
  const homeData = useSelector((state) => state.homeData);
  const [stripeKey, setStripeKey] = useState("");
  const [paypalClient, setPaypalClient] = useState("");
  const [activeTab, setActiveTab] = useState("stripe");

  const stripePromise = loadStripe(stripeKey);

  useEffect(() => {
    if (Object.keys(homeData).length > 0) {
      setStripeKey(homeData.settings.stripe_publish_key);
      setPaypalClient(homeData.settings.paypal_client_id);
    }
  }, [homeData]);

  //Paypal

  return (
    <Modal show={openModal} onHide={closeModal} className="progress_modal_main">
      <div className="subscription_modal_container">
        <button className="subscription_closebtn" onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              id="fi-rr-cross-small"
              d="M21.335,6.079h0a1.271,1.271,0,0,0-1.8,0l-5.83,5.83-5.83-5.83a1.271,1.271,0,0,0-1.8,0h0a1.271,1.271,0,0,0,0,1.8l5.83,5.83-5.83,5.83a1.271,1.271,0,0,0,0,1.8h0a1.271,1.271,0,0,0,1.8,0l5.83-5.83,5.83,5.83a1.271,1.271,0,0,0,1.8,0h0a1.271,1.271,0,0,0,0-1.8l-5.83-5.83,5.83-5.83A1.271,1.271,0,0,0,21.335,6.079Z"
              transform="translate(-5.707 -5.707)"
              fill="#fff"
            />
          </svg>
        </button>
        <div className="row">
          <div className="col-md-6">
            <div className="subscription_heading">
              <h2 className="myh2">{subscriptionDetail.type} Subscription</h2>
              <h3>Price ${subscriptionDetail.price}</h3>
            </div>
          </div>
          <div className="col-md-6">
            <div className="subs_tabs row">
              <div className="col-6">
                <div
                  className={`subs_tabs_one ${
                    activeTab === "stripe" ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveTab("stripe");
                  }}
                >
                  <img alt="" src={images["stripe-logo.png"]} />
                </div>
              </div>
              <div className="col-6">
                <div
                  className={`subs_tabs_two ${
                    activeTab === "paypal" ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveTab("paypal");
                  }}
                >
                  <img alt="" src={images["paypal-logo.png"]} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab_forms">
          <Tabs
            defaultActiveKey="paypal"
            activeKey={activeTab}
            id="uncontrolled-tab-example"
            className="mb-3 subs_tabs subs_tabs2"
          >
            <Tab
              eventKey="paypal"
              title={
                <div className="subs_tabs_two">
                  <img alt="" src={images["paypal-logo.png"]} />
                </div>
              }
            >
              <PayPalScriptProvider
                options={{
                  "client-id": paypalClient,
                  currency: "USD",
                }}
              >
                <PayPalButton
                  subscriptionDetail={subscriptionDetail}
                  setLoading={setLoading}
                  closeModal={closeModal}
                  setIsPackSucess={setIsPackSucess}
                />
              </PayPalScriptProvider>
            </Tab>
            <Tab
              eventKey="stripe"
              title={
                <div className="subs_tabs_one">
                  <img
                    alt=""
                    src={images["stripe-logo.png"]}
                    style={{ width: "100px" }}
                  />
                </div>
              }
            >
              <Elements stripe={stripePromise}>
                <div className="stripe_form">
                  <SplitForm
                    subscriptionDetail={subscriptionDetail}
                    setLoading={setLoading}
                    closeModal={closeModal}
                    setIsPackSucess={setIsPackSucess}
                  />
                </div>
              </Elements>
            </Tab>
          </Tabs>
        </div>
      </div>
    </Modal>
  );
};

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    [fontSize]
  );

  return options;
};

const SplitForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { subscriptionDetail, setLoading, closeModal, setIsPackSucess } = props;
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createToken(
      elements.getElement(CardNumberElement)
    );
    if (payload) {
      dispatch(
        asyncAddUserSubscription(
          setIsPackSucess,
          navigate,
          "Stripe",
          payload.token.id,
          subscriptionDetail.id,
          setLoading,
          closeModal
        )
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="student_profile_input_all">
        <label>
          Card number
          <CardNumberElement
            options={options}
            onReady={() => {}}
            onChange={(event) => {}}
            onBlur={() => {}}
            onFocus={() => {}}
          />
        </label>
      </div>
      <div className="student_profile_input_all">
        <label>
          Expiration date
          <CardExpiryElement options={options} />
        </label>
      </div>
      <div className="student_profile_input_all">
        <label>
          CVC
          <CardCvcElement options={options} />
        </label>
      </div>
      <button
        className="btn-add-new-std pay_btn"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
    </form>
  );
};

const PayPalButton = (props) => {
  const { setIsPackSucess } = props;
  const { subscriptionDetail, setLoading, closeModal } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [{ isPending }] = usePayPalScriptReducer();

  return (
    <div className="paypal_btn">
      {isPending ? (
        <div className="paypal_loder">
          <BounceLoader color="#8a77e1" />
        </div>
      ) : null}
      <PayPalButtons
        style={{
          layout: "horizontal",
          color: "blue",
          shape: "pill",
          tagline: false,
        }}
        className="paypal_element"
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: subscriptionDetail.price,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            if (details.status === "COMPLETED") {
              dispatch(
                asyncAddUserSubscription(
                  setIsPackSucess,
                  navigate,
                  "Paypal",
                  "",
                  subscriptionDetail.id,
                  setLoading,
                  closeModal,
                  details
                )
              );
            }
          });
        }}
        onError={(err) => {
          console.log("err", err);
        }}
      />
    </div>
  );
};

export default SubscriptionModal;
