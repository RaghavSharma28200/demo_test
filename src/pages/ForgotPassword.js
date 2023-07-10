import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asyncCheckEmail } from "../actions/loginAction";

import vaidator from "validator";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [inValidEmail, setInValidEmail] = useState({});
  const errors = {};
  const validation = () => {
    if (!vaidator.isEmail(email) || email.length === 0) {
      errors.invalidEmail = "Please Provide Valid Email";
    }
    setInValidEmail(errors);
  };
  const handleForgotPassword = (e) => {
    e.preventDefault();
    validation();
    if (Object.keys(errors).length === 0) {
      dispatch(asyncCheckEmail(email, navigate));
    }
  };
  return (
    <div className="login_main forgot_main">
      <div className="login_bg_main">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 dis_mobile"></div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="login_inner">
                <div className="main_logo text-left">
                  {/* <img src={images["logo.png"]} alt="" /> */}
                  <svg
                    onClick={() => navigate(-1)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                  >
                    <g
                      id="Group_3297"
                      data-name="Group 3297"
                      transform="translate(-10179 -2759)"
                    >
                      <rect
                        id="Rectangle_598"
                        data-name="Rectangle 598"
                        width="38"
                        height="38"
                        rx="8"
                        transform="translate(10179 2759)"
                        fill="#8f78fb"
                      />
                      <g
                        id="Group_3081"
                        data-name="Group 3081"
                        transform="translate(34 -61)"
                      >
                        <path
                          id="arrow-backward"
                          d="M2.515,8.576,9.39,2.561a1.094,1.094,0,0,1,1.686-.088V6.529h.3c6.5,0,11.315,4.614,11.315,10.89,0,2.186-1,1.389-1.421.627a11.1,11.1,0,0,0-9.947-6.056h-.246v3.969a1.217,1.217,0,0,1-1.686.088L2.514,10.5a1.362,1.362,0,0,1,0-1.924Z"
                          transform="translate(10151.598 2828.523)"
                          fill="#fff"
                          fill-rule="evenodd"
                        />
                        <g
                          id="Rectangle_599"
                          data-name="Rectangle 599"
                          transform="translate(10152 2827)"
                          fill="none"
                          stroke="#707070"
                          stroke-width="1"
                          opacity="0"
                        >
                          <rect width="24" height="24" stroke="none" />
                          <rect
                            x="0.5"
                            y="0.5"
                            width="23"
                            height="23"
                            fill="none"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="login_form">
                  <h2> Forgot Password? </h2>
                  <p>
                    Please enter your email to receive a
                    verification code.
                  </p>
                  <form>
                    <div className="login_frm_inner">
                      <div className="input_all">
                        <label>Email Address</label>
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={inValidEmail.invalidEmail ? "form_invalid_br" : ""}
                        />
                      </div>
                      {inValidEmail.invalidEmail && (
                        <div className="signup_form_error">{inValidEmail.invalidEmail}</div>
                      )}
                      <div className="btn_login">
                        <button
                          className="btn-round"
                          onClick={handleForgotPassword}
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
