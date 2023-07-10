import React, { useEffect, useState } from "react";
import { images } from "../actions/customFn";
import { NavLink, useNavigate } from "react-router-dom";
import { asyncSignup } from "../actions/loginAction";
import { useDispatch, useSelector } from "react-redux";

import validator from "validator";

const Signup = () => {
  const [signup, setSignup] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const errors = {};
  const [formError, setFormError] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.login);

  const [userType, setUserType] = useState("");

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };
  const handleUserType = (e) => {
    const { value } = e.target;
    setUserType(value);
  };

  const initialState = () => {
    setSignup({
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    });
    setUserType("");
  };
  const validation = () => {
    if (signup.username.length === 0) {
      errors.error_username = "Please Provide username";
    }
    if (!validator.isEmail(signup.email) || signup.email.length === 0) {
      errors.error_email = "Please Provide valid email";
    }
    if (signup.password.length === 0) {
      errors.error_password = "Please Provide Password";
    }
    if (signup.confirm_password.length === 0) {
      errors.error_confirm_password = "Please Provide Confirm Password";
    }
    if (signup.password.length > 0 && signup.password.length < 6) {
      errors.error_password = "Please Provide six digit Password";
    }
    if (
      signup.confirm_password.length > 0 &&
      signup.confirm_password.length < 6
    ) {
      errors.error_confirm_password =
        "Please Provide six digit Confirm Password";
    }
    if (userType.length === 0) {
      errors.error_user_type = "Please Provide user type";
    }
    if (
      signup.confirm_password !== signup.password &&
      signup.confirm_password.length > 0 &&
      signup.password.length > 0
    ) {
      errors.error_confirm_password = "confirm password does not match";
    }
    setFormError(errors);
  };
  const handleSignUpClick = (e) => {
    e.preventDefault();
    validation();
    if (Object.keys(errors).length === 0) {
      const data = {
        username: signup.username,
        email: signup.email,
        password: signup.password,
        confirm_password: signup.confirm_password,
        user_type: userType,
      };
      console.log(data);
      dispatch(asyncSignup(data, initialState, navigate));
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/my-profile");
    }
  }, [isLoggedIn]);
  return (
    <div className="login_main sign_up_new pb-4">
      <div className="login_bg_main">
        <div className="container">
          <div className="row  login_container">
            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-6 dis_mobile">
            <img alt="" src={images["loginsignup_right.png"]}/>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="login_inner">
                <div className="main_logo">
                  {/* <img src={images["logo.png"]} alt="" /> */}
                  <NavLink to={"/"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="160"
                      height="88.077"
                      viewBox="0 0 160 88.077"
                    >
                      <g
                        id="Group_2408"
                        data-name="Group 2408"
                        transform="translate(-331.14 -273.23)"
                      >
                        <g
                          id="Group_2409"
                          data-name="Group 2409"
                          transform="translate(331.14 273.23)"
                        >
                          <g
                            id="Group_1"
                            data-name="Group 1"
                            transform="translate(24.342 34.949)"
                          >
                            <path
                              id="Path_1"
                              data-name="Path 1"
                              d="M413.207,348.4a1.45,1.45,0,0,1-1.433,1.418H385.811v12.118H407.2a1.428,1.428,0,0,1,1.02.412,1.377,1.377,0,0,1,.409,1.005,1.411,1.411,0,0,1-.409,1.034,1.428,1.428,0,0,1-1.02.413H385.811V378.33a1.411,1.411,0,0,1-.432,1.033,1.351,1.351,0,0,1-1,.412,1.438,1.438,0,0,1-1.024-.412,1.465,1.465,0,0,1-.409-1.033V348.4a1.465,1.465,0,0,1,.409-1.033,1.438,1.438,0,0,1,1.024-.412h27.392a1.344,1.344,0,0,1,1,.412A1.416,1.416,0,0,1,413.207,348.4Z"
                              transform="translate(-382.95 -346.95)"
                              fill="#fff"
                            />
                            <path
                              id="Path_2"
                              data-name="Path 2"
                              d="M557.975,346.951a1.35,1.35,0,0,1,1,.412,1.417,1.417,0,0,1,.434,1.031,1.332,1.332,0,0,1-.434,1.006,1.349,1.349,0,0,1-1,.413h-11.7v28.518a1.464,1.464,0,0,1-.408,1.031,1.437,1.437,0,0,1-1.023.413,1.346,1.346,0,0,1-1-.413,1.415,1.415,0,0,1-.435-1.031V349.813H530.581a1.434,1.434,0,0,1-1.022-.413,1.373,1.373,0,0,1-.409-1.006,1.463,1.463,0,0,1,.409-1.031,1.436,1.436,0,0,1,1.022-.412Z"
                              transform="translate(-460.46 -346.951)"
                              fill="#fff"
                            />
                            <path
                              id="Path_3"
                              data-name="Path 3"
                              d="M628.7,363.736a8.981,8.981,0,0,0,4.677-7.864,8.653,8.653,0,0,0-2.606-6.317,8.459,8.459,0,0,0-6.236-2.6H603.293A1.05,1.05,0,0,0,602.248,348V378.33a1.428,1.428,0,0,0,.432,1.033,1.353,1.353,0,0,0,1,.412,1.434,1.434,0,0,0,1.019-.412,1.464,1.464,0,0,0,.409-1.033V364.793h17.709a7.4,7.4,0,0,1,5.443,2.3,7.518,7.518,0,0,1,2.248,5.492v5.75a1.413,1.413,0,0,0,.435,1.031,1.408,1.408,0,0,0,1.993,0,1.415,1.415,0,0,0,.434-1.031v-5.75A10.1,10.1,0,0,0,628.7,363.736Zm-4.165-1.8H605.109V349.813H624.53a5.677,5.677,0,0,1,4.217,1.779,6.077,6.077,0,0,1,0,8.56A5.676,5.676,0,0,1,624.53,361.931Z"
                              transform="translate(-499.214 -346.95)"
                              fill="#fff"
                            />
                            <path
                              id="Path_4"
                              data-name="Path 4"
                              d="M485.872,347.363a1.41,1.41,0,0,0-1.993,0,1.417,1.417,0,0,0-.434,1.031v20.731a7.573,7.573,0,0,1-2.249,5.492,7.437,7.437,0,0,1-5.443,2.269c-.022,0-.042,0-.064.006v-.018h-9.35a7.418,7.418,0,0,1-5.178-2.257,7.57,7.57,0,0,1-2.249-5.492V348.394a1.42,1.42,0,0,0-.435-1.031,1.35,1.35,0,0,0-1-.412,1.436,1.436,0,0,0-1.022.412,1.464,1.464,0,0,0-.409,1.031v20.731a10.306,10.306,0,0,0,3.092,7.529,10.1,10.1,0,0,0,7.2,3.108v.012h9.35v-.006c.022,0,.041.006.064.006a10.122,10.122,0,0,0,7.462-3.12,10.309,10.309,0,0,0,3.092-7.529V348.394A1.419,1.419,0,0,0,485.872,347.363Z"
                              transform="translate(-421.705 -346.951)"
                              fill="#fff"
                            />
                          </g>
                          <g id="Group_2" data-name="Group 2">
                            <path
                              id="Path_5"
                              data-name="Path 5"
                              d="M398.454,305.966H396.1a31.324,31.324,0,1,0-42.943,30.578v2.541a33.915,33.915,0,1,1,45.3-33.119Z"
                              transform="translate(-331.14 -273.23)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                        <path
                          id="Path_396"
                          data-name="Path 396"
                          d="M48.346.809H0V-.5H48.346Z"
                          transform="translate(331.14 354.821)"
                          fill="#fff"
                        />
                        <path
                          id="Path_396-2"
                          data-name="Path 396"
                          d="M48.346.809H0V-.5H48.346Z"
                          transform="translate(442.794 354.821)"
                          fill="#fff"
                        />
                        <path
                          id="Path_6"
                          data-name="Path 6"
                          d="M10.168,7.153H8.7L7.492,3.97H2.677L1.545,7.153H.064L4.419-4.2H5.8ZM7.056,2.775,5.275-2.063a4.632,4.632,0,0,1-.174-.76H5.069a4.241,4.241,0,0,1-.182.76L3.121,2.775ZM19.171-4.2l-4.2,11.355H13.5L9.384-4.2h1.481l3.143,9a5.345,5.345,0,0,1,.23,1.006h.032a4.932,4.932,0,0,1,.261-1.021L17.738-4.2Zm9.47,11.355H27.168l-1.2-3.183H21.15L20.018,7.153H18.537L22.892-4.2H24.27ZM25.529,2.775,23.748-2.063a4.633,4.633,0,0,1-.174-.76h-.032a4.241,4.241,0,0,1-.182.76L21.594,2.775ZM35.862-3H32.584V7.153h-1.33V-3h-3.27V-4.2h7.879ZM45.324,7.153H43.852l-1.2-3.183H37.834L36.7,7.153H35.221L39.576-4.2h1.378ZM42.213,2.775,40.431-2.063a4.634,4.634,0,0,1-.174-.76h-.032a4.242,4.242,0,0,1-.182.76L38.277,2.775ZM55.135,7.153H53.551l-1.9-3.183a6.931,6.931,0,0,0-.507-.756,2.888,2.888,0,0,0-.5-.511,1.742,1.742,0,0,0-.554-.289,2.279,2.279,0,0,0-.669-.091H48.325v4.83H47V-4.2h3.389a4.83,4.83,0,0,1,1.374.186,3.074,3.074,0,0,1,1.093.566,2.631,2.631,0,0,1,.725.946,3.138,3.138,0,0,1,.261,1.326,3.194,3.194,0,0,1-.178,1.089A2.843,2.843,0,0,1,53.151.8a3.072,3.072,0,0,1-.792.661,4.042,4.042,0,0,1-1.041.424v.032a2.4,2.4,0,0,1,.495.289,2.723,2.723,0,0,1,.4.384,5.086,5.086,0,0,1,.376.5q.186.281.416.653ZM48.325-3V1.12h1.805a2.738,2.738,0,0,0,.922-.15,2.135,2.135,0,0,0,.732-.432,1.957,1.957,0,0,0,.483-.689,2.306,2.306,0,0,0,.174-.915,1.78,1.78,0,0,0-.59-1.421A2.534,2.534,0,0,0,50.147-3Z"
                          transform="translate(383.54 354.154)"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                  </NavLink>
                </div>
                <div className="login_form">
                  <h2> Signup </h2>
                  <p>Sign up your account</p>
                  <form>
                    <div className="login_frm_inner">
                      <div className="input_all">
                        <label>User Name</label>
                        <input
                          type="text"
                          placeholder="Enter your user name"
                          name="username"
                          value={signup.username}
                          onChange={handleSignUpChange}
                          className={
                            formError.error_username ? "form_invalid_br" : ""
                          }
                        />
                      </div>
                      {formError.error_username && (
                        <div className="signup_form_error">
                          {formError.error_username}
                        </div>
                      )}
                      <div className="input_all input_pass mt-4">
                        <label>Email Address</label>
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          name="email"
                          className={
                            formError.error_email ? "form_invalid_br" : ""
                          }
                          value={signup.email}
                          onChange={handleSignUpChange}
                        />
                      </div>
                      {formError.error_email && (
                        <div className="signup_form_error">
                          {formError.error_email}
                        </div>
                      )}
                      <div className="input_all  input_pass mt-4">
                        <label>Select User Type</label>
                        <div className="input_select_div">
                          <div className="btn_radio_one">
                            <input
                              type="radio"
                              id="Parents"
                              name="Type"
                              value="Parent"
                              onChange={handleUserType}
                            />
                            <label htmlFor="Parents">Parents</label>
                          </div>
                          <div className="btn_radio_one">
                            <input
                              type="radio"
                              id="Teacher"
                              name="Type"
                              value="Teacher"
                              onChange={handleUserType}
                            />
                              <label htmlFor="Teacher">Teacher</label>
                          </div>
                        </div>
                      </div>
                      {formError.error_user_type && (
                        <div className="signup_form_error">
                          {formError.error_user_type}
                        </div>
                      )}
                      <div className="input_all input_pass mt-4">
                        <label>Password</label>
                        <input
                          type="password"
                          placeholder="Enter your password"
                          name="password"
                          value={signup.password}
                          className={
                            formError.error_password ? "form_invalid_br" : ""
                          }
                          onChange={handleSignUpChange}
                        />
                      </div>
                      {formError.error_password && (
                        <div className="signup_form_error">
                          {formError.error_password}
                        </div>
                      )}
                      <div className="input_all input_pass mt-4">
                        <label>Confirm Password</label>
                        <input
                          type="password"
                          placeholder="Enter your confirm password"
                          name="confirm_password"
                          value={signup.confirm_password}
                          className={
                            formError.error_confirm_password
                              ? "form_invalid_br"
                              : ""
                          }
                          onChange={handleSignUpChange}
                        />
                      </div>
                      {formError.error_confirm_password && (
                        <div className="signup_form_error">
                          {formError.error_confirm_password}
                        </div>
                      )}
                      <div className="btn_login">
                        <button
                          className="btn-round"
                          onClick={handleSignUpClick}
                        >
                          Sign Up
                        </button>
                      </div>

                      <div className="border_btm">
                        <p>
                          {" "}
                          <span>Or</span>{" "}
                        </p>
                        <p>
                          Already have an account?{" "}
                          <NavLink to="/login">Login</NavLink>
                        </p>
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

export default Signup;
