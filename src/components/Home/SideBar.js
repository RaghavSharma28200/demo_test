import React from "react";
import { images } from "../../actions/customFn";
import { NavLink, useNavigate } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { asyncLogOut } from "../../actions/loginAction";
import { useDispatch } from "react-redux";

const SideBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="sidebar--main">
        <div className="sidebar__logo">
          <NavLink to="/">
            {" "}
            <img src={images["logo.png"]} alt="" />{" "}
          </NavLink>
        </div>
        <div className="sidebar--list desktop_side_bar">
          <ul>
            {/* <li>
              <NavLink to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    id="Group_2411"
                    data-name="Group 2411"
                    transform="translate(-52 -154)"
                  >
                    <g
                      id="Rectangle_303"
                      data-name="Rectangle 303"
                      transform="translate(52 154)"
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
                    <g id="search" transform="translate(48.007 153.707)">
                      <path
                        id="Path_395"
                        data-name="Path 395"
                        d="M21.146,15.955a8.468,8.468,0,1,0-1.494,1.494l.046.048,4.488,4.492a1.059,1.059,0,1,0,1.5-1.5L21.194,16l-.048-.044Zm-2.2-9.686a6.349,6.349,0,1,1-8.977,0,6.354,6.354,0,0,1,8.977,0Z"
                        transform="translate(0 0)"
                        fill="#848490"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </svg>

                <span className="hover_side"> Home </span>
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/dashboard">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    id="Group_2410"
                    data-name="Group 2410"
                    transform="translate(-50 -109)"
                  >
                    <g
                      id="Rectangle_302"
                      data-name="Rectangle 302"
                      transform="translate(50 109)"
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
                      id="fi-rr-home"
                      d="M19.267,7.566,12.947,1.24a4.172,4.172,0,0,0-5.893,0L.732,7.566A2.484,2.484,0,0,0,0,9.334V17.52a2.5,2.5,0,0,0,2.5,2.5h15a2.5,2.5,0,0,0,2.5-2.5V9.334A2.484,2.484,0,0,0,19.267,7.566ZM12.5,18.354h-5v-3.28a2.5,2.5,0,1,1,5,0Zm5.833-.834a.834.834,0,0,1-.833.834H14.167v-3.28a4.167,4.167,0,1,0-8.333,0v3.28H2.5a.834.834,0,0,1-.833-.834V9.334a.841.841,0,0,1,.244-.59L8.232,2.422a2.506,2.506,0,0,1,3.537,0l6.321,6.325a.841.841,0,0,1,.244.587Z"
                      transform="translate(52 110.979)"
                      fill="#848490"
                    />
                  </g>
                </svg>
                <span className="hover_side"> Home </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/chat">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    id="Group_2758"
                    data-name="Group 2758"
                    transform="translate(-52 -196)"
                  >
                    <g
                      id="Rectangle_304"
                      data-name="Rectangle 304"
                      transform="translate(52 196)"
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
                    <path
                      id="chatbubble-outline"
                      d="M13.539,21.511a8.3,8.3,0,0,0,8.336-8.352,8.091,8.091,0,0,0-.18-1.692,8.262,8.262,0,0,0-2.914-4.7,8.659,8.659,0,0,0-5.414-1.9,8.548,8.548,0,0,0-6.1,2.51,8.134,8.134,0,0,0-1.07,10.2c.063.087.122.176.177.268l.015.025a2.41,2.41,0,0,1,.336,1.855v.005L6.3,21.246l1.4-.507a2.959,2.959,0,0,1,1.117-.217H8.83a2.984,2.984,0,0,1,1.072.2c.229.088.8.294,1.327.442a10.239,10.239,0,0,0,2.31.347M4.762,23.374a.462.462,0,0,1-.46-.468.762.762,0,0,1,.029-.158l.944-3.411a1.088,1.088,0,0,0-.19-.715,2.154,2.154,0,0,0-.122-.183,9.606,9.606,0,0,1-1.586-5.288,9.867,9.867,0,0,1,9.992-9.776,9.958,9.958,0,0,1,9.8,7.781,9.567,9.567,0,0,1,.213,2,9.8,9.8,0,0,1-9.836,9.852,11.745,11.745,0,0,1-2.715-.4c-.648-.182-1.294-.422-1.461-.486a1.5,1.5,0,0,0-.54-.1,1.476,1.476,0,0,0-.576.117L4.986,23.315A.769.769,0,0,1,4.762,23.374Z"
                      transform="translate(50.625 194.625)"
                      fill="#848490"
                    />
                  </g>
                </svg>
                <span className="hover_side"> Chat </span>
              </NavLink>
            </li>
            {localStorage.getItem("futr_role") === "Student" && (
              <>
                <li>
                  <NavLink to="/wish-list">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        id="Group_2688"
                        data-name="Group 2688"
                        transform="translate(-52 -280)"
                      >
                        <g
                          id="Rectangle_520"
                          data-name="Rectangle 520"
                          transform="translate(52 280)"
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
                          id="fi-rr-heart"
                          d="M14.577,1.917A5.331,5.331,0,0,0,10,4.666,5.331,5.331,0,0,0,5.414,1.917,5.664,5.664,0,0,0,0,7.79c0,3.788,3.987,7.924,7.33,10.729a4.143,4.143,0,0,0,5.331,0c3.344-2.8,7.33-6.941,7.33-10.729a5.664,5.664,0,0,0-5.414-5.873ZM11.59,17.244a2.476,2.476,0,0,1-3.19,0C4.12,13.653,1.665,10.208,1.665,7.79A4,4,0,0,1,5.414,3.583,4,4,0,0,1,9.162,7.79a.833.833,0,0,0,1.666,0,4,4,0,0,1,3.748-4.207A4,4,0,0,1,18.325,7.79c0,2.418-2.455,5.863-6.735,9.451Z"
                          transform="translate(54.005 281.297)"
                          fill="#848490"
                        />
                      </g>
                    </svg>
                    <span className="hover_side"> Favourites </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/history">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        id="Group_2689"
                        data-name="Group 2689"
                        transform="translate(-52 -248)"
                      >
                        <g
                          id="video-gallery-line"
                          transform="translate(52 249)"
                        >
                          <path
                            id="Path_2241"
                            data-name="Path 2241"
                            d="M20.825,10H3.175A1.152,1.152,0,0,0,2,11.128V22.072A1.152,1.152,0,0,0,3.175,23.2h17.65A1.152,1.152,0,0,0,22,22.072V11.128A1.152,1.152,0,0,0,20.825,10ZM20.75,22H3.25V11.2h17.5Z"
                            transform="translate(0 -3.2)"
                            fill="#848490"
                          />
                          <path
                            id="Path_2242"
                            data-name="Path 2242"
                            d="M21.14,2.6a.613.613,0,0,0-.625-.6H6.765a.613.613,0,0,0-.625.6v.6h15Z"
                            transform="translate(-1.552)"
                            fill="#848490"
                          />
                          <path
                            id="Path_2243"
                            data-name="Path 2243"
                            d="M21.62,6.6a.613.613,0,0,0-.625-.6H4.745a.613.613,0,0,0-.625.6v.6h17.5Z"
                            transform="translate(-0.795 -1.6)"
                            fill="#848490"
                          />
                          <path
                            id="Path_2244"
                            data-name="Path 2244"
                            d="M12.531,22.055a1.12,1.12,0,0,0,.581.168,1.087,1.087,0,0,0,.431-.09l6.106-2.616a1,1,0,0,0,0-1.86l-6.106-2.616a1.1,1.1,0,0,0-1.009.076,1.011,1.011,0,0,0-.484.854V21.2a1.01,1.01,0,0,0,.481.852Zm.394-6.084a.173.173,0,0,1,.087-.15.2.2,0,0,1,.1,0,.176.176,0,0,1,.075,0l6.106,2.61a.174.174,0,0,1,.113.168.168.168,0,0,1-.113.162l-6.106,2.616a.181.181,0,0,1-.175,0,.184.184,0,0,1-.088-.15Z"
                            transform="translate(-3.769 -5.181)"
                            fill="#848490"
                          />
                        </g>
                        <g
                          id="Rectangle_519"
                          data-name="Rectangle 519"
                          transform="translate(52 248)"
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
                      </g>
                    </svg>
                    <span className="hover_side"> History </span>
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink to="/my-profile">
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
                <span className="hover_side"> Profile </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#" onClick={() => dispatch(asyncLogOut(navigate))}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <g
                    id="Group_3414"
                    data-name="Group 3414"
                    transform="translate(-52 -196)"
                  >
                    <g
                      id="Rectangle_304"
                      data-name="Rectangle 304"
                      transform="translate(52 196)"
                      fill="none"
                      stroke="#e80000"
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
                    <g id="md-log-out" transform="translate(49.625 193.625)">
                      <path
                        id="Path_2255"
                        data-name="Path 2255"
                        d="M13.5,16.33h8.208l-1.887,1.934,1.294,1.294L25.269,15.4,21.115,11.25l-1.342,1.294,1.934,1.934H13.5v1.852Z"
                        transform="translate(-3.894 -3.029)"
                        fill="#848490"
                      />
                      <path
                        id="Path_2256"
                        data-name="Path 2256"
                        d="M12.362,19.528a7.153,7.153,0,0,1,0-14.305A7.087,7.087,0,0,1,17.4,7.308L18.713,6a9.554,9.554,0,0,0-1.2-1,9.006,9.006,0,1,0,1.2,13.755L17.4,17.442a7.082,7.082,0,0,1-5.041,2.086Z"
                        fill="#848490"
                      />
                      <path
                        id="Path_2257"
                        data-name="Path 2257"
                        d="M31.477,18.014l-.037-.037.037-.037.037.037Z"
                        transform="translate(-10.794 -5.602)"
                        fill="#848490"
                      />
                    </g>
                  </g>
                </svg>
                <span className="hover_side"> Logout </span>
              </NavLink>
            </li>
          </ul>
          <div className="list_last_main">
            <li>
              <NavLink to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    id="Group_2415"
                    data-name="Group 2415"
                    transform="translate(44 -418)"
                  >
                    <g
                      id="Rectangle_305"
                      data-name="Rectangle 305"
                      transform="translate(-44 418)"
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
                    <g id="help" transform="translate(-44.25 417.75)">
                      <path
                        id="Path_396"
                        data-name="Path 396"
                        d="M12.25,2.25a10,10,0,1,0,10,10A10,10,0,0,0,12.25,2.25Zm0,18.571a8.571,8.571,0,1,1,8.571-8.571A8.571,8.571,0,0,1,12.25,20.821Z"
                        transform="translate(0 0)"
                        fill="#848490"
                      />
                      <path
                        id="Path_397"
                        data-name="Path 397"
                        d="M18.456,25.837a1.072,1.072,0,1,1-1.071-1.046A1.072,1.072,0,0,1,18.456,25.837Z"
                        transform="translate(-5.134 -8.229)"
                        fill="#848490"
                      />
                      <path
                        id="Path_398"
                        data-name="Path 398"
                        d="M16.66,9H15.589a3.207,3.207,0,0,0-3.215,3.215v.357H13.8v-.357a1.786,1.786,0,0,1,1.786-1.786H16.66a1.786,1.786,0,1,1,0,3.572H15.232v3.215H16.66V15.428A3.214,3.214,0,1,0,16.66,9Z"
                        transform="translate(-3.696 -2.464)"
                        fill="#848490"
                      />
                    </g>
                  </g>
                </svg>
              </NavLink>
            </li>
          </div>
        </div>

        <div className="nav_mobile_main">
          <div className="mobile_all">
            <div className="mobile_logo"></div>
            <div className="mobile_drawer">
              <button className="Btn_show_drawer" onClick={toggleDrawer}>
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      id="fi-rr-cross-small"
                      d="M29.149,6.266h0a1.907,1.907,0,0,0-2.7,0l-8.745,8.745L8.962,6.266a1.907,1.907,0,0,0-2.7,0h0a1.907,1.907,0,0,0,0,2.7l8.745,8.745L6.266,26.452a1.907,1.907,0,0,0,0,2.7h0a1.907,1.907,0,0,0,2.7,0L17.707,20.4l8.745,8.745a1.907,1.907,0,0,0,2.7,0h0a1.907,1.907,0,0,0,0-2.7L20.4,17.707l8.745-8.745A1.907,1.907,0,0,0,29.149,6.266Z"
                      transform="translate(-5.707 -5.707)"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="30px"
                    height="30px"
                  >
                    <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
                  </svg>
                )}

                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="30px"
                  height="30px"
                >
                  <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
                </svg> */}
              </button>
              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="left"
                className="mobile_nav_menu"
              >
                <div className="drawer_nav_mobile">
                  <ul className="navbar-nav">
                    <div className="sidebar__logo logo_mobile">
                      <NavLink to={"/"}>
                        <img src={images["logo.png"]} alt="" />
                      </NavLink>
                    </div>
                    <li>
                      <NavLink to="/dashboard">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <g
                            id="Group_2410"
                            data-name="Group 2410"
                            transform="translate(-50 -109)"
                          >
                            <g
                              id="Rectangle_302"
                              data-name="Rectangle 302"
                              transform="translate(50 109)"
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
                              id="fi-rr-home"
                              d="M19.267,7.566,12.947,1.24a4.172,4.172,0,0,0-5.893,0L.732,7.566A2.484,2.484,0,0,0,0,9.334V17.52a2.5,2.5,0,0,0,2.5,2.5h15a2.5,2.5,0,0,0,2.5-2.5V9.334A2.484,2.484,0,0,0,19.267,7.566ZM12.5,18.354h-5v-3.28a2.5,2.5,0,1,1,5,0Zm5.833-.834a.834.834,0,0,1-.833.834H14.167v-3.28a4.167,4.167,0,1,0-8.333,0v3.28H2.5a.834.834,0,0,1-.833-.834V9.334a.841.841,0,0,1,.244-.59L8.232,2.422a2.506,2.506,0,0,1,3.537,0l6.321,6.325a.841.841,0,0,1,.244.587Z"
                              transform="translate(52 110.979)"
                              fill="#848490"
                            />
                          </g>
                        </svg>
                        <span className="hover_side"> Home </span>
                      </NavLink>
                    </li>
                    {/* <li>
                      <NavLink to="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <g
                            id="Group_2411"
                            data-name="Group 2411"
                            transform="translate(-52 -154)"
                          >
                            <g
                              id="Rectangle_303"
                              data-name="Rectangle 303"
                              transform="translate(52 154)"
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
                            <g
                              id="search"
                              transform="translate(48.007 153.707)"
                            >
                              <path
                                id="Path_395"
                                data-name="Path 395"
                                d="M21.146,15.955a8.468,8.468,0,1,0-1.494,1.494l.046.048,4.488,4.492a1.059,1.059,0,1,0,1.5-1.5L21.194,16l-.048-.044Zm-2.2-9.686a6.349,6.349,0,1,1-8.977,0,6.354,6.354,0,0,1,8.977,0Z"
                                transform="translate(0 0)"
                                fill="#848490"
                                fillRule="evenodd"
                              />
                            </g>
                          </g>
                        </svg>
                        <span className="hover_side"> Search </span>
                      </NavLink>
                    </li> */}
                    <li>
                      <NavLink to="/chat">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <g
                            id="Group_2758"
                            data-name="Group 2758"
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
                            <g
                              id="chatbubble-outline"
                              transform="translate(50.625 194.625)"
                              fill="none"
                              strokeLinecap="round"
                            >
                              <path
                                d="M5.274,19.337a1.088,1.088,0,0,0-.19-.715,2.157,2.157,0,0,0-.122-.183,9.606,9.606,0,0,1-1.586-5.288,9.867,9.867,0,0,1,9.992-9.776,9.958,9.958,0,0,1,9.8,7.781,9.567,9.567,0,0,1,.213,2,9.8,9.8,0,0,1-9.836,9.852,11.745,11.745,0,0,1-2.715-.4c-.648-.182-1.294-.422-1.461-.486a1.5,1.5,0,0,0-.535-.1,1.476,1.476,0,0,0-.581.117L4.986,23.315a.769.769,0,0,1-.224.059.462.462,0,0,1-.46-.468.762.762,0,0,1,.029-.158Z"
                                stroke="none"
                              />
                              <path
                                d="M 13.5390567779541 21.5105152130127 C 15.79612636566162 21.5105152130127 17.90082550048828 20.63897514343262 19.46542549133301 19.05643463134766 C 21.01921653747559 17.48483467102051 21.87492561340332 15.39014434814453 21.87492561340332 13.1588249206543 C 21.87469673156738 12.59245491027832 21.81436729431152 12.02447509765625 21.69489669799805 11.46728515625 C 21.30711555480957 9.638315200805664 20.27228736877441 7.970154762268066 18.78102684020996 6.770094871520996 C 17.26241683959961 5.548024654388428 15.33958625793457 4.875004768371582 13.36674690246582 4.875004768371582 C 11.04492664337158 4.875004768371582 8.877566337585449 5.766504764556885 7.263916492462158 7.385274887084961 C 5.716526508331299 8.937564849853516 4.86811637878418 10.98365497589111 4.874976634979248 13.15144443511963 C 4.87490701675415 14.73047256469727 5.330742835998535 16.26213073730469 6.193708896636963 17.58358573913574 C 6.2564377784729 17.67010688781738 6.315805912017822 17.76001167297363 6.370566368103027 17.85145568847656 L 6.38529634475708 17.87659454345703 C 6.763556480407715 18.53697395324707 6.876476287841797 19.16101455688477 6.720916271209717 19.73137474060059 L 6.719486236572266 19.73657417297363 L 6.302009582519531 21.2458381652832 L 7.705813407897949 20.73924446105957 C 8.06202220916748 20.59491920471191 8.437501907348633 20.52178382873535 8.822626113891602 20.52178382873535 L 8.830336570739746 20.52179527282715 C 9.198036193847656 20.52238464355469 9.558476448059082 20.58967399597168 9.901866912841797 20.72189521789551 C 10.13079643249512 20.81008529663086 10.70281600952148 21.01588439941406 11.22907638549805 21.16354560852051 C 11.83691596984863 21.33410453796387 12.86715602874756 21.5105152130127 13.5390567779541 21.5105152130127 M 4.761636257171631 23.37427520751953 C 4.63827657699585 23.37391471862793 4.520186424255371 23.32419395446777 4.43372631072998 23.2361946105957 C 4.347276210784912 23.14819526672363 4.299646377563477 23.02924537658691 4.301466464996338 22.9058952331543 C 4.305456638336182 22.85237503051758 4.315076351165771 22.79943466186523 4.330186367034912 22.74794387817383 L 5.273776531219482 19.3366756439209 C 5.331216335296631 19.12607383728027 5.204716205596924 18.83342552185059 5.083696365356445 18.62214469909668 C 5.046026229858398 18.55924415588379 5.005176544189453 18.49831390380859 4.961296558380127 18.43958473205566 C 3.926446437835693 16.87005424499512 3.37489652633667 15.03136444091797 3.374976396560669 13.1513843536377 C 3.357886552810669 7.754474639892578 7.833086490631104 3.375004768371582 13.36674690246582 3.375004768371582 C 18.19271659851074 3.375004768371582 22.22142601013184 6.718584537506104 23.16227722167969 11.156174659729 C 23.30337715148926 11.81418514251709 23.37465667724609 12.48525428771973 23.37492561340332 13.15822505950928 C 23.37492561340332 18.56265449523926 19.07271575927734 23.0105152130127 13.5390567779541 23.0105152130127 C 12.65905666351318 23.0105152130127 11.47205638885498 22.7896556854248 10.8238468170166 22.60777473449707 C 10.17564678192139 22.42589569091797 9.529496192932129 22.18589401245117 9.362656593322754 22.12162399291992 C 9.190378189086914 22.05529022216797 9.00721549987793 22.02173614501953 8.822630882263184 22.02178573608398 C 8.624792098999023 22.02178573608398 8.428969383239746 22.06153297424316 8.246766090393066 22.13871383666992 L 4.985916614532471 23.31546401977539 C 4.914556503295898 23.34628486633301 4.838936328887939 23.36611557006836 4.761636257171631 23.37427520751953 Z"
                                stroke="none"
                                fill="#848490"
                              />
                            </g>
                          </g>
                        </svg>
                        <span className="hover_side"> Chat </span>
                      </NavLink>
                    </li>
                    {localStorage.getItem("futr_role") === "Student" && (
                      <>
                        <li>
                          <NavLink to="/wish-list">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <g
                                id="Group_2688"
                                data-name="Group 2688"
                                transform="translate(-52 -280)"
                              >
                                <g
                                  id="Rectangle_520"
                                  data-name="Rectangle 520"
                                  transform="translate(52 280)"
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
                                  id="fi-rr-heart"
                                  d="M14.577,1.917A5.331,5.331,0,0,0,10,4.666,5.331,5.331,0,0,0,5.414,1.917,5.664,5.664,0,0,0,0,7.79c0,3.788,3.987,7.924,7.33,10.729a4.143,4.143,0,0,0,5.331,0c3.344-2.8,7.33-6.941,7.33-10.729a5.664,5.664,0,0,0-5.414-5.873ZM11.59,17.244a2.476,2.476,0,0,1-3.19,0C4.12,13.653,1.665,10.208,1.665,7.79A4,4,0,0,1,5.414,3.583,4,4,0,0,1,9.162,7.79a.833.833,0,0,0,1.666,0,4,4,0,0,1,3.748-4.207A4,4,0,0,1,18.325,7.79c0,2.418-2.455,5.863-6.735,9.451Z"
                                  transform="translate(54.005 281.297)"
                                  fill="#848490"
                                />
                              </g>
                            </svg>
                            <span className="hover_side"> Whish List </span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/history">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <g
                                id="Group_2689"
                                data-name="Group 2689"
                                transform="translate(-52 -248)"
                              >
                                <g
                                  id="video-gallery-line"
                                  transform="translate(52 249)"
                                >
                                  <path
                                    id="Path_2241"
                                    data-name="Path 2241"
                                    d="M20.825,10H3.175A1.152,1.152,0,0,0,2,11.128V22.072A1.152,1.152,0,0,0,3.175,23.2h17.65A1.152,1.152,0,0,0,22,22.072V11.128A1.152,1.152,0,0,0,20.825,10ZM20.75,22H3.25V11.2h17.5Z"
                                    transform="translate(0 -3.2)"
                                    fill="#848490"
                                  />
                                  <path
                                    id="Path_2242"
                                    data-name="Path 2242"
                                    d="M21.14,2.6a.613.613,0,0,0-.625-.6H6.765a.613.613,0,0,0-.625.6v.6h15Z"
                                    transform="translate(-1.552)"
                                    fill="#848490"
                                  />
                                  <path
                                    id="Path_2243"
                                    data-name="Path 2243"
                                    d="M21.62,6.6a.613.613,0,0,0-.625-.6H4.745a.613.613,0,0,0-.625.6v.6h17.5Z"
                                    transform="translate(-0.795 -1.6)"
                                    fill="#848490"
                                  />
                                  <path
                                    id="Path_2244"
                                    data-name="Path 2244"
                                    d="M12.531,22.055a1.12,1.12,0,0,0,.581.168,1.087,1.087,0,0,0,.431-.09l6.106-2.616a1,1,0,0,0,0-1.86l-6.106-2.616a1.1,1.1,0,0,0-1.009.076,1.011,1.011,0,0,0-.484.854V21.2a1.01,1.01,0,0,0,.481.852Zm.394-6.084a.173.173,0,0,1,.087-.15.2.2,0,0,1,.1,0,.176.176,0,0,1,.075,0l6.106,2.61a.174.174,0,0,1,.113.168.168.168,0,0,1-.113.162l-6.106,2.616a.181.181,0,0,1-.175,0,.184.184,0,0,1-.088-.15Z"
                                    transform="translate(-3.769 -5.181)"
                                    fill="#848490"
                                  />
                                </g>
                                <g
                                  id="Rectangle_519"
                                  data-name="Rectangle 519"
                                  transform="translate(52 248)"
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
                              </g>
                            </svg>
                            <span className="hover_side"> History </span>
                          </NavLink>
                        </li>
                      </>
                    )}
                    <li>
                      <NavLink to="/my-profile">
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
                        <span className="hover_side"> User </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="#"
                        onClick={() => dispatch(asyncLogOut(navigate))}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                        >
                          <g
                            id="Group_3414"
                            data-name="Group 3414"
                            transform="translate(-52 -196)"
                          >
                            <g
                              id="Rectangle_304"
                              data-name="Rectangle 304"
                              transform="translate(52 196)"
                              fill="none"
                              stroke="#e80000"
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
                            <g
                              id="md-log-out"
                              transform="translate(49.625 193.625)"
                            >
                              <path
                                id="Path_2255"
                                data-name="Path 2255"
                                d="M13.5,16.33h8.208l-1.887,1.934,1.294,1.294L25.269,15.4,21.115,11.25l-1.342,1.294,1.934,1.934H13.5v1.852Z"
                                transform="translate(-3.894 -3.029)"
                                fill="#848490"
                              />
                              <path
                                id="Path_2256"
                                data-name="Path 2256"
                                d="M12.362,19.528a7.153,7.153,0,0,1,0-14.305A7.087,7.087,0,0,1,17.4,7.308L18.713,6a9.554,9.554,0,0,0-1.2-1,9.006,9.006,0,1,0,1.2,13.755L17.4,17.442a7.082,7.082,0,0,1-5.041,2.086Z"
                                fill="#848490"
                              />
                              <path
                                id="Path_2257"
                                data-name="Path 2257"
                                d="M31.477,18.014l-.037-.037.037-.037.037.037Z"
                                transform="translate(-10.794 -5.602)"
                                fill="#848490"
                              />
                            </g>
                          </g>
                        </svg>
                        <span className="hover_side">Logout</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
