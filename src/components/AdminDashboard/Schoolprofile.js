import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { asyncLogOut } from "../../actions/loginAction";
import { NavLink } from "react-router-dom";
import EditAdminProfile from "./EditAdminProfile";
import ChangeAdminPassword from "./ChangeAdminPassword";
import { images } from "../../actions/customFn";
import LoadingOverlay from "react-loading-overlay";
import Loader from "../Loader";

const Schoolprofile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const profileData = useSelector((state) => state.profileData);

  const [profileObj, setProfileObj] = useState({});
  const [newProfileImg, setnewProfileImg] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [Loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const handlegetLogout = () => {
    dispatch(asyncLogOut(navigate));
  };

  const handleFileChange = (e) => {
    setnewProfileImg(e.target.files[0]);
    if (e.target.files.length > 0) {
      setProfileImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  useEffect(() => {
    if (Object.keys(profileData).length > 0) {
      setProfileImg(profileData.image);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [profileData]);

  return (
    <>
      <LoadingOverlay
        active={Loading}
        spinner={<Loader />}
        className="loading-screen"
      >
        <div className=" chat_main school_profile_container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
              <div className="student-pro-info">
                <div className="chat-profie-box">
                  <div className="chat-pro-inner">
                    <div className=" student_profile_div">
                      <label htmlFor="studentprofileimg">
                        <img src={profileImg} alt="" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                        >
                          <g
                            id="Group_3386"
                            data-name="Group 3386"
                            transform="translate(-380 -222)"
                          >
                            <circle
                              id="Ellipse_147"
                              data-name="Ellipse 147"
                              cx="14"
                              cy="14"
                              r="14"
                              transform="translate(380 222)"
                              fill="#8f78fb"
                            />
                            <g
                              id="Group_2833"
                              data-name="Group 2833"
                              transform="translate(332 -154)"
                            >
                              <g id="camera" transform="translate(54 383.714)">
                                <path
                                  id="Path_2263"
                                  data-name="Path 2263"
                                  d="M18.071,16.911a2.286,2.286,0,1,1-2.286-2.286A2.286,2.286,0,0,1,18.071,16.911Z"
                                  transform="translate(-7.785 -10.054)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_2264"
                                  data-name="Path 2264"
                                  d="M16.535,7.911H14.428a.519.519,0,0,1-.343-.179L13.158,6.27A.554.554,0,0,0,13.11,6.2a1.594,1.594,0,0,0-1.218-.579H8.606A1.592,1.592,0,0,0,7.389,6.2a.554.554,0,0,0-.049.066L6.414,7.734a.468.468,0,0,1-.308.179V7.627a.571.571,0,0,0-.571-.571H4.677a.571.571,0,0,0-.571.571v.286H3.963A1.716,1.716,0,0,0,2.249,9.628v6.855A1.716,1.716,0,0,0,3.963,18.2H16.535a1.716,1.716,0,0,0,1.714-1.714V9.625a1.716,1.716,0,0,0-1.714-1.714Zm-6.286,8a3.429,3.429,0,1,1,3.429-3.429A3.429,3.429,0,0,1,10.25,15.911Z"
                                  transform="translate(-2.249 -5.625)"
                                  fill="#fff"
                                />
                              </g>
                              <g
                                id="Rectangle_565"
                                data-name="Rectangle 565"
                                transform="translate(52 380)"
                                fill="none"
                                stroke="#707070"
                                stroke-width="1"
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
                            </g>
                          </g>
                        </svg>
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        id="studentprofileimg"
                        className="d-none"
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="pro-img-contert">
                      <p>{profileData.username}</p>
                      <p>{profileData.tag_line}</p>
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
                        to="/change-admin-password"
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
                  <EditAdminProfile
                    newProfileImg={newProfileImg}
                    profileData={profileData}
                  />
                </div>
              ) : location.pathname === "/change-admin-password" ? (
                <div className="stu-pro-component">
                  <ChangeAdminPassword />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </LoadingOverlay>
    </>
  );
};

export default Schoolprofile;
