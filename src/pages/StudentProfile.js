import React, { useContext, useEffect, useState } from "react";
import { EditProfile, SideBar } from "../components";
import { NavLink, useLocation } from "react-router-dom";
import ChangePassword from "../components/StudentProfile/ChangePassword";
import { images } from "../actions/customFn";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncLogOut } from "../actions/loginAction";
import { AppContext } from "../App";
import LoadingOverlay from "react-loading-overlay";
import Loader from "../components/Loader";
const StudentProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [Loading, setLoading] = useState(true)

  const profileData = useSelector((state) => state.profileData);

  const [profileObj, setProfileObj] = useState({});
  const dispatch = useDispatch();

  const handlegetLogout = () => {
    dispatch(asyncLogOut(navigate));
  };

  useEffect(() => {
    setProfileObj(profileData);
    if (profileData) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } else {
      setTimeout(() => {
        setLoading(true);
      }, 500);
    }
  }, [profileData]);

  return (
    <LoadingOverlay
      active={Loading}
      spinner={<Loader />}
      className="loading-screen"
    >
      <div className="home__pagemian padding--all">
        <div className="container-fluid">
          <div className="Side--bar-left">
            <SideBar />
          </div>
          <div className="Page--info-right">
            <div className="student-pro-banner">
              <div className="SplashScreen--main">
                <div className="SplashScreen--bg">
                  <div className="splashScreen_inner">
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
                  </div>
                </div>
              </div>
            </div>

            <div className="Edit-profile-main chat_main">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
                  <div className="student-pro-info">
                    <div className="chat-profie-box">
                      <div className="chat-pro-inner">
                        <div className="pro-img-chat">
                          <img src={profileObj.image} alt="" />
                        </div>
                        <div className="pro-img-contert">
                          <p>{profileObj.username}</p>
                          <p>{profileObj.email}</p>
                        </div>
                      </div>

                      <div className="pro-inner-button">
                        <div className="btn-one-pro">
                          <NavLink
                            to="/my-profile"
                            className="btn-pro-page btn_pro_all btn-change-pass"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <g
                                id="Group_2412"
                                data-name="Group 2412"
                                transform="translate(-52 -196)"
                              >
                                <g
                                  id="Rectangle_304"
                                  data-name="Rectangle 304"
                                  transform="translate(52 196)"
                                  fill="none"
                                  stroke="#707070"
                                  strokeWidth="1"
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
                                <path
                                  id="user-o"
                                  d="M13.4,8.75a4.828,4.828,0,0,1,1,.424,4.388,4.388,0,0,1,.993.815,5.252,5.252,0,0,1,.887,1.289A8.089,8.089,0,0,1,16.9,13.2a12.978,12.978,0,0,1,.246,2.639,4.209,4.209,0,0,1-1.116,2.941A3.514,3.514,0,0,1,13.337,20H3.806a3.514,3.514,0,0,1-2.69-1.222A4.206,4.206,0,0,1,0,15.837,12.972,12.972,0,0,1,.246,13.2a8.1,8.1,0,0,1,.614-1.919,5.248,5.248,0,0,1,.887-1.289,4.388,4.388,0,0,1,.993-.815,4.828,4.828,0,0,1,1-.424A5.661,5.661,0,0,1,3.309,3.5,5.653,5.653,0,0,1,6.356.452a5.653,5.653,0,0,1,4.431,0A5.657,5.657,0,0,1,13.834,3.5,5.664,5.664,0,0,1,13.4,8.75ZM8.572,1.428a4.129,4.129,0,0,0-3.03,1.256A4.132,4.132,0,0,0,4.286,5.714a4.125,4.125,0,0,0,1.256,3.03A4.134,4.134,0,0,0,8.572,10,4.126,4.126,0,0,0,11.6,8.744a4.13,4.13,0,0,0,1.256-3.03A4.13,4.13,0,0,0,11.6,2.684,4.128,4.128,0,0,0,8.572,1.428Zm4.766,17.143a2.155,2.155,0,0,0,1.679-.8,2.842,2.842,0,0,0,.7-1.936,8.535,8.535,0,0,0-.876-4.208,2.927,2.927,0,0,0-2.517-1.618,5.52,5.52,0,0,1-3.75,1.417,5.52,5.52,0,0,1-3.75-1.417A2.929,2.929,0,0,0,2.3,11.629a8.537,8.537,0,0,0-.877,4.208,2.839,2.839,0,0,0,.7,1.936,2.158,2.158,0,0,0,1.679.8h9.531Z"
                                  transform="translate(55.429 198)"
                                  fill="#848490"
                                />
                              </g>
                            </svg>
                            <span className="btn-inner-text"> My Profile </span>
                          </NavLink>
                          <NavLink
                            to="/change-password"
                            className="btn-change-pass btn_pro_all"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                            >
                              <g
                                id="Group_2783"
                                data-name="Group 2783"
                                transform="translate(-52 -196)"
                              >
                                <g
                                  id="Rectangle_304"
                                  data-name="Rectangle 304"
                                  transform="translate(52 196)"
                                  fill="none"
                                  stroke="#707070"
                                  strokeWidth="1"
                                  opacity="0"
                                >
                                  <rect width="20" height="20" stroke="none" />
                                  <rect
                                    x="0.5"
                                    y="0.5"
                                    width="19"
                                    height="19"
                                    fill="none"
                                  />
                                </g>
                                <g
                                  id="__TEMP__SVG__"
                                  transform="translate(49.786 194.75)"
                                >
                                  <path
                                    id="Path_2262"
                                    data-name="Path 2262"
                                    d="M17.357,9.964a2.571,2.571,0,0,1,2.571,2.571v5.143a2.571,2.571,0,0,1-2.571,2.571H7.071A2.571,2.571,0,0,1,4.5,17.679V12.536A2.571,2.571,0,0,1,7.071,9.964V7.393a5.143,5.143,0,1,1,10.286,0Zm-5.143-6a3.429,3.429,0,0,1,3.429,3.429V9.964H8.786V7.393a3.429,3.429,0,0,1,3.429-3.429Zm5.143,7.714H7.071a.857.857,0,0,0-.857.857v5.143a.857.857,0,0,0,.857.857H17.357a.857.857,0,0,0,.857-.857V12.536A.857.857,0,0,0,17.357,11.679Z"
                                    fill="#848490"
                                    fillRule="evenodd"
                                  />
                                </g>
                              </g>
                            </svg>
                            <span className="btn-inner-text">
                              {" "}
                              Change Password{" "}
                            </span>
                          </NavLink>
                          <button
                            className="btn-logout btn_pro_all"
                            onClick={handlegetLogout}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                            >
                              <g
                                id="Group_2785"
                                data-name="Group 2785"
                                transform="translate(-52 -196)"
                              >
                                <g
                                  id="Rectangle_304"
                                  data-name="Rectangle 304"
                                  transform="translate(52 196)"
                                  fill="none"
                                  stroke="#e80000"
                                  strokeWidth="1"
                                  opacity="0"
                                >
                                  <rect width="20" height="20" stroke="none" />
                                  <rect
                                    x="0.5"
                                    y="0.5"
                                    width="19"
                                    height="19"
                                    fill="none"
                                  />
                                </g>
                                <g
                                  id="md-log-out"
                                  transform="translate(49.625 193.625)"
                                >
                                  <path
                                    id="Path_2255"
                                    data-name="Path 2255"
                                    d="M13.5,16.33h8.208l-1.887,1.934,1.294,1.294L25.269,15.4,21.115,11.25l-1.342,1.294,1.934,1.934H13.5v1.852Z"
                                    transform="translate(-3.894 -3.029)"
                                    fill="#e80000"
                                  />
                                  <path
                                    id="Path_2256"
                                    data-name="Path 2256"
                                    d="M12.362,19.528a7.153,7.153,0,0,1,0-14.305A7.087,7.087,0,0,1,17.4,7.308L18.713,6a9.554,9.554,0,0,0-1.2-1,9.006,9.006,0,1,0,1.2,13.755L17.4,17.442a7.082,7.082,0,0,1-5.041,2.086Z"
                                    fill="#e80000"
                                  />
                                  <path
                                    id="Path_2257"
                                    data-name="Path 2257"
                                    d="M31.477,18.014l-.037-.037.037-.037.037.037Z"
                                    transform="translate(-10.794 -5.602)"
                                    fill="#e80000"
                                  />
                                </g>
                              </g>
                            </svg>
                            <span className="btn-inner-text"> Logout </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12">
                  {location.pathname === "/my-profile" ? (
                    <div className="stu-pro-component">
                      <EditProfile profileObj={profileObj} />
                    </div>
                  ) : location.pathname === "/change-password" ? (
                    <div className="stu-pro-component">
                      <ChangePassword />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default StudentProfile;
