import React, { useState } from "react";
import { images, scrollToId } from "../../actions/customFn";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "react-modern-drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/fontawesome-free-solid";
import { asyncLogOut } from "../../actions/loginAction";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const profileData = useSelector((state) => state.profileData);
  const homeData = useSelector((state) => state.homeData);
  const isLoggedIn = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [openOptions, setOpenOptions] = useState(false);

  return (
    <div className="home_header_container" id="home">
      <div className="container home_desktop ">
        <div className="home_header">
          <div className="home_logo">
            {Object.keys(homeData).length > 0 && (
              <NavLink to={"/"}>
                <img src={homeData.settings.header_logo} alt="" />
              </NavLink>
            )}
          </div>
          <div className="home_header_list">
            <ul id="header_home_lst">
              {/* <li
                onClick={(e) => scrollToId("home", e.target, "header_home_lst")}
              >
                Home
              </li> */}
              {/* <li onClick={(e) => scrollToId("about_us")}>About us</li> */}
              {/* <li
                onClick={(e) =>
                  scrollToId("testimonial", e.target, "header_home_lst")
                }
              >
                Testimonials
              </li>
              <li
                onClick={(e) => scrollToId("faq", e.target, "header_home_lst")}
              >
                Faq's
              </li> */}
            </ul>
          </div>
          {isLoggedIn ? (
            <div className="home_profile_wrapper">
              <div
                className="home_avatar"
                style={{ backgroundImage: `url(${profileData.image})` }}
              ></div>
              <div className="home_profiledetail">
                <h3>{profileData.username}</h3>
                <p onClick={() => setOpenOptions((p) => !p)}>
                  <h4>{profileData.email}</h4>
                  <FontAwesomeIcon icon={faCaretDown} />{" "}
                </p>
                {openOptions && <OpenOptios />}
              </div>
            </div>
          ) : (
            <div className="home_button_wrapper">
              <button className="login_btn" onClick={() => navigate("/login")}>
                Login
              </button>
              <button
                className="signup_btn"
                onClick={() => navigate("/signup")}
              >
                Signup
              </button>
            </div>
          )}
        </div>
      </div>

      {/* mobile header  */}

      <div className="nav_mobile_main nav_home_mob_header">
        <div className="mobile_all">
          <div className="mobile_logo"></div>
          <div className="mobile_drawer">
            <div className="btn_open_div">
              <NavLink to={"/"}>
                <img src={images["logo.png"]} alt="" />
              </NavLink>
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
              </button>
            </div>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="left"
              className="mobile_nav_menu"
              size={"300"}
            >
              <div className="drawer_nav_mobile">
                <ul className="navbar-nav">
                  <div className="sidebar__logo logo_mobile">
                    <NavLink to={"/"}>
                      <img src={images["logo.png"]} alt="" />
                    </NavLink>
                  </div>

                  {isLoggedIn ? (
                    <div className="home_mobile_profile">
                      <NavLink to={"/dashboard"}>
                        <div
                          className="mobile_profile_img"
                          style={{
                            backgroundImage: `url(${profileData.image})`,
                          }}
                        ></div>
                      </NavLink>
                      <h3>{profileData.username}</h3>
                      <h4>{profileData.email}</h4>
                    </div>
                  ) : (
                    <div className="home_button_wrapper btn_mobile_wraper">
                      <button
                        className="login_btn"
                        onClick={() => navigate("/login")}
                      >
                        Login
                      </button>
                      <button
                        className="signup_btn"
                        onClick={() => navigate("/signup")}
                      >
                        Signup
                      </button>
                    </div>
                  )}

                  {/* <li onClick={(e) => scrollToId("home")}>Home</li> */}
                  {/* <li onClick={(e) => scrollToId("about_us")}>About us</li> */}
                  {/* <li onClick={(e) => scrollToId("testimonial")}>
                    Testimonials
                  </li> */}
                  {/* <li onClick={(e) => scrollToId("faq")}>Faq's</li> */}
                  {isLoggedIn && (
                    <li onClick={(e) => dispatch(asyncLogOut(navigate))}>
                      Logout
                    </li>
                  )}
                </ul>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

const OpenOptios = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="home_option_list">
      <ul>
        <li>
          {" "}
          <NavLink to="/dashboard">
            <button className="home_btn_icon">
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
                    <rect x="0.5" y="0.5" width="23" height="23" fill="none" />
                  </g>
                  <path
                    id="fi-rr-home"
                    d="M19.267,7.566,12.947,1.24a4.172,4.172,0,0,0-5.893,0L.732,7.566A2.484,2.484,0,0,0,0,9.334V17.52a2.5,2.5,0,0,0,2.5,2.5h15a2.5,2.5,0,0,0,2.5-2.5V9.334A2.484,2.484,0,0,0,19.267,7.566ZM12.5,18.354h-5v-3.28a2.5,2.5,0,1,1,5,0Zm5.833-.834a.834.834,0,0,1-.833.834H14.167v-3.28a4.167,4.167,0,1,0-8.333,0v3.28H2.5a.834.834,0,0,1-.833-.834V9.334a.841.841,0,0,1,.244-.59L8.232,2.422a2.506,2.506,0,0,1,3.537,0l6.321,6.325a.841.841,0,0,1,.244.587Z"
                    transform="translate(52 110.979)"
                    fill="#848490"
                  />
                </g>
              </svg>
            </button>
            <span> Dashboard </span>
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/my-profile">
            <button className="home_btn_icon">
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
                    <rect x="0.5" y="0.5" width="23" height="23" fill="none" />
                  </g>
                  <path
                    id="user-o"
                    d="M13.4,8.75a4.828,4.828,0,0,1,1,.424,4.388,4.388,0,0,1,.993.815,5.252,5.252,0,0,1,.887,1.289A8.089,8.089,0,0,1,16.9,13.2a12.978,12.978,0,0,1,.246,2.639,4.209,4.209,0,0,1-1.116,2.941A3.514,3.514,0,0,1,13.337,20H3.806a3.514,3.514,0,0,1-2.69-1.222A4.206,4.206,0,0,1,0,15.837,12.972,12.972,0,0,1,.246,13.2a8.1,8.1,0,0,1,.614-1.919,5.248,5.248,0,0,1,.887-1.289,4.388,4.388,0,0,1,.993-.815,4.828,4.828,0,0,1,1-.424A5.661,5.661,0,0,1,3.309,3.5,5.653,5.653,0,0,1,6.356.452a5.653,5.653,0,0,1,4.431,0A5.657,5.657,0,0,1,13.834,3.5,5.664,5.664,0,0,1,13.4,8.75ZM8.572,1.428a4.129,4.129,0,0,0-3.03,1.256A4.132,4.132,0,0,0,4.286,5.714a4.125,4.125,0,0,0,1.256,3.03A4.134,4.134,0,0,0,8.572,10,4.126,4.126,0,0,0,11.6,8.744a4.13,4.13,0,0,0,1.256-3.03A4.13,4.13,0,0,0,11.6,2.684,4.128,4.128,0,0,0,8.572,1.428Zm4.766,17.143a2.155,2.155,0,0,0,1.679-.8,2.842,2.842,0,0,0,.7-1.936,8.535,8.535,0,0,0-.876-4.208,2.927,2.927,0,0,0-2.517-1.618,5.52,5.52,0,0,1-3.75,1.417,5.52,5.52,0,0,1-3.75-1.417A2.929,2.929,0,0,0,2.3,11.629a8.537,8.537,0,0,0-.877,4.208,2.839,2.839,0,0,0,.7,1.936,2.158,2.158,0,0,0,1.679.8h9.531Z"
                    transform="translate(55.429 198)"
                    fill="#848490"
                  />
                </g>
              </svg>
            </button>
            <span> My Profile </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"#"}
            onClick={() => {
              dispatch(asyncLogOut(navigate));
            }}
          >
            <button className="home_btn_icon">
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
                    <rect x="0.5" y="0.5" width="19" height="19" fill="none" />
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
            </button>
            <span> Logout </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
