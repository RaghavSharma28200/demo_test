import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { images } from "../actions/customFn";
import axios from "../axios";
import SubscriptionModal from "../components/Modal/SubscriptionModal";
import LoadingOverlay from "react-loading-overlay";
import Loader from "../components/Loader";
import { useDispatch } from "react-redux";
import { asyncGetProfileData } from "../actions/profileAction";

const Subscription = () => {
  const [subscriptionData, setSubscriptionData] = useState([]);
  const [Loading, setLoading] = useState(true);

  const [subscriptionDetail, setSubscriptionDetail] = useState({
    id: "",
    type: "",
    price: "",
  });

  const [openModal, setOpenModal] = useState(false);
  const [isPackSuccess, setIsPackSucess] = useState(false);
  const dispatch = useDispatch();

  const closeModal = () => {
    setOpenModal(false);
  };

  const navigate = useNavigate();

  const handleOpenModal = (id, text, totalPrice) => {
    setOpenModal(true);
    setSubscriptionDetail({
      id: id,
      type: text,
      price: totalPrice,
    });
  };

  useEffect(() => {
    const url = "/subscription_list";
    let data = {
      user_id: localStorage.getItem("futr_user_id"),
    };
    axios
      .post(url, data)
      .then((res) => {
        const { data, status } = res.data;
        if (status) {
          setSubscriptionData(data);
        }
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [isPackSuccess]);

  return (
    <LoadingOverlay
      active={Loading}
      spinner={<Loader />}
      className="loading-screen"
    >
      <div className="subscription_container">
        <div className="subscription_header">
          <div className="sidebar__logo subscription_logo">
            <NavLink to="/">
              {" "}
              <img src={images["logo.png"]} alt="" />{" "}
            </NavLink>
          </div>
          <div className="row">
            <div className=" col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="subscription_detail">
                <h2>Subscribe now and start streaming</h2>
                <div className="subscription_detail_list">
                  <ul>
                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                    <li>Lorem Ipsum is simply dummy text</li>
                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                    <li>Lorem Ipsum is simply dummy text</li>
                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                    <li>Lorem Ipsum is simply dummy text</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="row">
                {subscriptionData.length > 0 &&
                  subscriptionData.map((data) => {
                    return (
                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="subscription_pack_div">
                          <div className="subscription_packbtn">
                            <h3>{data.title}</h3>
                          </div>
                          <div className="subscription_wrapper">
                            <div className="subscription_price">
                              <p>
                                <span>$</span>
                                {data.price}/<small>per Weekly</small>
                              </p>
                            </div>
                            <div className="subscription_options">
                              <div className="subscription_option_list">
                                <RightIcon />{" "}
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing
                                </p>
                              </div>
                              <div className="subscription_option_list">
                                <CrossIcon />
                                <p>Lorem Ipsum is simply dummy text</p>
                              </div>
                              <div className="subscription_option_list">
                                <RightIcon />
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing
                                </p>
                              </div>
                              <div className="subscription_option_list">
                                <CrossIcon />
                                <p>Lorem Ipsum is simply dummy text</p>
                              </div>
                              <div className="subscription_option_list">
                                <RightIcon />{" "}
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing
                                </p>
                              </div>
                              <div className="subscription_option_list">
                                <RightIcon />{" "}
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="btn_subscription">
                          {data.is_user_exist_plan === true ||
                          data.is_small_exist_plan === true ? (
                            data.is_user_exist_plan === true ? (
                              <button
                                disabled={true}
                                className="btn_update_main active"
                              >
                                Subscribed Plan
                              </button>
                            ) : (
                              ""
                            )
                          ) : (
                            <button
                              className="btn_update_main"
                              onClick={() => {
                                handleOpenModal(
                                  data.id,
                                  data.title,
                                  data.price
                                );
                              }}
                            >
                              Get Start
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <SubscriptionModal
          closeModal={closeModal}
          setOpenModal={setOpenModal}
          openModal={openModal}
          setLoading={setLoading}
          subscriptionDetail={subscriptionDetail}
          setIsPackSucess={setIsPackSucess}
        />
      </div>
    </LoadingOverlay>
  );
};

const CrossIcon = () => {
  return (
    <button className="subscription_icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21.5"
        height="21.5"
        viewBox="0 0 21.5 21.5"
      >
        <g
          id="Group_2738"
          data-name="Group 2738"
          transform="translate(-164.25 -309.25)"
        >
          <circle
            id="Ellipse_146"
            data-name="Ellipse 146"
            cx="10"
            cy="10"
            r="10"
            transform="translate(165 310)"
            fill="none"
            stroke="#ff4343"
            stroke-width="1.5"
          />
          <path
            id="fi-rr-cross-small"
            d="M13.521,5.893h0a.636.636,0,0,0-.9,0L9.707,8.808,6.792,5.893a.636.636,0,0,0-.9,0h0a.636.636,0,0,0,0,.9L8.808,9.707,5.893,12.622a.636.636,0,0,0,0,.9h0a.636.636,0,0,0,.9,0l2.915-2.915,2.915,2.915a.636.636,0,0,0,.9,0h0a.636.636,0,0,0,0-.9L10.606,9.707l2.915-2.915A.636.636,0,0,0,13.521,5.893Z"
            transform="translate(165.293 310.293)"
            fill="#ff4343"
            stroke="#ff4343"
            stroke-width="0.5"
          />
        </g>
      </svg>
    </button>
  );
};

const RightIcon = () => {
  return (
    <button className="subscription_icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19.5"
        height="19.5"
        viewBox="0 0 19.5 19.5"
      >
        <g
          id="Group_2790"
          data-name="Group 2790"
          transform="translate(-164.25 -309.25)"
        >
          <circle
            id="Ellipse_146"
            data-name="Ellipse 146"
            cx="9"
            cy="9"
            r="9"
            transform="translate(165 310)"
            fill="none"
            stroke="#8f78fb"
            stroke-width="1.5"
          />
          <path
            id="fi-rr-check"
            d="M10.058,4.266,3.84,10.331a.458.458,0,0,1-.638,0L.8,7.983a.458.458,0,0,0-.638,0h0a.431.431,0,0,0,0,.622l2.405,2.346a1.378,1.378,0,0,0,1.912,0L10.7,4.887a.431.431,0,0,0,0-.621h0a.458.458,0,0,0-.638,0Z"
            transform="translate(168.572 311.263)"
            fill="#8f78fb"
            stroke="#8f78fb"
            stroke-width="1"
          />
        </g>
      </svg>
    </button>
  );
};

export default Subscription;
