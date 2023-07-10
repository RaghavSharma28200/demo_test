import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { asyncVerifyOtp } from "../actions/loginAction";
import { notifySuccess } from "../actions/customFn";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const [OTP, setOTP] = useState("");
  const { state } = useLocation();

  const dispatch = useDispatch();

  const errors = {};

  const [otpErrs, setOtpErrs] = useState({});

  const validation = () => {
    if (OTP.length === 0) {
      errors.otp_err = "Please Provide Otp";
    }
    if (OTP.length > 0 && OTP.length < 6) {
      errors.otp_err = "Please Proivide six digit otp";
    }
    setOtpErrs(errors);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    validation();
    if (Object.keys(errors).length === 0) {
      const data = {
        email: state.email || "",
        otp: OTP,
      };
      dispatch(asyncVerifyOtp(data, navigate));
    }
  };

  return (
    <div className="login_main forgot_main new_opt_main">
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
                  <h2> Verification </h2>
                  <p>
                    Please Enter The 6 Digit Code Sent To Your email
                  </p>
                  <form>
                    <div className="login_frm_inner">
                      <div
                        className={`input_all input_otp ${
                          otpErrs.otp_err ? "input_otp_err" : ""
                        }`}
                      >
                        <OTPInput
                          value={OTP}
                          onChange={setOTP}
                          autoFocus
                          OTPLength={6}
                          numInputs={6}
                          otpType="password"
                          containerStyle={"otp_inp_rows"}
                          disabled={false}
                          renderInput={(props) => <input {...props} />}
                        />
                      </div>
                      {otpErrs.otp_err && (
                        <div className="signup_form_error mt-3">
                          {otpErrs.otp_err}
                        </div>
                      )}
                      <div className="otp_wrapper">
                        <div className="otp_info">
                          <p className="otp_info_txt">
                            Didn’t receive any code?
                          </p>
                          <p
                            className="otp_resend_txt"
                            onClick={() =>
                              notifySuccess("code send to your register email")
                            }
                          >
                            Resend a new code.
                          </p>
                        </div>

                        <div className="btn_login">
                          <button
                            className="btn-round"
                            onClick={handleVerifyOtp}
                          >
                            Verify
                          </button>
                        </div>
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

export default VerifyOtp;
