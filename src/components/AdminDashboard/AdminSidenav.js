import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { images } from "../../actions/customFn";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { asyncLogOut } from "../../actions/loginAction";
import { useDispatch } from "react-redux";

const AdminSidenav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div>
      {/* sidenav for desktop  */}
      <div className="admin_sidenav_container">
        <div className="admin_sidenav_logo">
          <div className="sidebar__logo">
            <NavLink to="/">
              {" "}
              <img src={images["logo.png"]} alt="" />{" "}
            </NavLink>
          </div>
        </div>
        <div className="admin_sidenav">
          <ul className="admin_sidenav_option">
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
                      id="fi-rr-home"
                      d="M19.267,7.566,12.947,1.24a4.172,4.172,0,0,0-5.893,0L.732,7.566A2.484,2.484,0,0,0,0,9.334V17.52a2.5,2.5,0,0,0,2.5,2.5h15a2.5,2.5,0,0,0,2.5-2.5V9.334A2.484,2.484,0,0,0,19.267,7.566ZM12.5,18.354h-5v-3.28a2.5,2.5,0,1,1,5,0Zm5.833-.834a.834.834,0,0,1-.833.834H14.167v-3.28a4.167,4.167,0,1,0-8.333,0v3.28H2.5a.834.834,0,0,1-.833-.834V9.334a.841.841,0,0,1,.244-.59L8.232,2.422a2.506,2.506,0,0,1,3.537,0l6.321,6.325a.841.841,0,0,1,.244.587Z"
                      transform="translate(52 110.979)"
                      fill="#8f78fb"
                    />
                  </g>
                </svg>
                <span> Dashboard </span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/my-profile"}>
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
                    <g
                      id="Group_3336"
                      data-name="Group 3336"
                      transform="translate(-1944.591 -1305.398)"
                    >
                      <path
                        id="Path_3357"
                        data-name="Path 3357"
                        d="M2018.59,1517.027v5.935a.763.763,0,0,1-.809.435q-9.251-.011-18.5-.005a.607.607,0,0,1-.682-.685c0-1.8.012-3.6-.008-5.406a.682.682,0,0,1,.742-.742c.924.015,1.848,0,2.771.009.194,0,.254-.046.253-.248-.009-1.613,0-3.227,0-4.84v-.238a3.68,3.68,0,0,1-.425.174.8.8,0,0,1-.373.035.574.574,0,0,1-.452-.544.6.6,0,0,1,.377-.565c.584-.27,1.171-.534,1.757-.8q2.3-1.044,4.6-2.086a.261.261,0,0,0,.177-.28c-.007-.989.007-1.978-.009-2.966a.755.755,0,0,1,.435-.809h2.811a.657.657,0,0,1,.431.744c-.011.129,0,.26,0,.39,0,.452-.212.662-.672.663-.547,0-1.094,0-1.64,0-.145,0-.192.041-.19.188.007.559.017,1.12,0,1.679a.4.4,0,0,0,.288.447c2.064.927,4.123,1.866,6.184,2.8a.6.6,0,0,1,.411.634.562.562,0,0,1-.763.5c-.141-.061-.282-.121-.441-.189-.007.076-.016.126-.016.176,0,1.646,0,3.293,0,4.939,0,.17.063.2.217.2.917-.006,1.835.005,2.752-.007A.73.73,0,0,1,2018.59,1517.027Zm-4.925-.565c0-1.848,0-3.695,0-5.542a.3.3,0,0,0-.208-.322c-.383-.161-.76-.339-1.138-.512-1.19-.541-2.378-1.085-3.571-1.619a.423.423,0,0,0-.309-.006c-1.582.711-3.16,1.432-4.74,2.148a.266.266,0,0,0-.183.279q.006,5.562,0,11.124c0,.158.041.214.206.212.729-.008,1.457-.01,2.186,0,.19,0,.225-.065.223-.235-.007-.956,0-1.913,0-2.869a.578.578,0,0,1,.656-.653h3.591c.468,0,.677.21.677.68,0,.956,0,1.913,0,2.869,0,.165.051.209.211.207.722-.007,1.444-.01,2.166,0,.188,0,.24-.051.24-.239C2013.662,1520.144,2013.665,1518.3,2013.665,1516.462Zm-13.9,3.507c0,.683,0,1.366,0,2.049,0,.166.053.207.212.206q1.083-.011,2.166,0c.161,0,.212-.045.211-.208q-.009-2.02,0-4.039c0-.2-.074-.245-.252-.244q-1.063.009-2.127,0c-.16,0-.212.044-.211.208C1999.774,1518.616,1999.77,1519.292,1999.77,1519.969Zm17.648.01c0-.676-.008-1.352.005-2.028,0-.2-.073-.234-.24-.216a4.093,4.093,0,0,1-.427.025c-.566,0-1.131.009-1.7,0-.186,0-.228.061-.227.235q.009,2.008,0,4.017c0,.155.035.217.2.215.728-.009,1.456-.007,2.184,0,.151,0,.2-.041.2-.2C2017.414,1521.344,2017.418,1520.661,2017.418,1519.979Zm-10.115.934c0,.377,0,.754,0,1.131,0,.135.041.181.178.18q1.111-.008,2.223,0c.15,0,.187-.051.185-.193q-.009-1.1,0-2.2c0-.143-.042-.193-.188-.191-.734.006-1.469.007-2.2,0-.161,0-.2.057-.2.2C2007.309,1520.2,2007.3,1520.555,2007.3,1520.912Z"
                        transform="translate(0 0)"
                        fill="#848490"
                      />
                      <path
                        id="Path_3358"
                        data-name="Path 3358"
                        d="M2196,1699.521a2.453,2.453,0,0,1-2.477,2.48,2.472,2.472,0,0,1,.015-4.944A2.445,2.445,0,0,1,2196,1699.521Zm-3.751-.02a1.288,1.288,0,1,0,2.576.025,1.258,1.258,0,0,0-1.3-1.3A1.277,1.277,0,0,0,2192.248,1699.5Z"
                        transform="translate(-184.944 -186.08)"
                        fill="#848490"
                      />
                    </g>
                  </g>
                </svg>
                <span> School Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/payment-history"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    id="Group_3337"
                    data-name="Group 3337"
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
                    <g id="card-outline" transform="translate(51.375 194.146)">
                      <path
                        id="Union_1"
                        data-name="Union 1"
                        d="M3.2,15.707a3.206,3.206,0,0,1-3.2-3.2V3.2A3.207,3.207,0,0,1,3.2,0H16.8A3.206,3.206,0,0,1,20,3.2v9.3a3.206,3.206,0,0,1-3.2,3.2ZM1.4,12.506A1.809,1.809,0,0,0,3.2,14.312H16.8A1.81,1.81,0,0,0,18.605,12.5V6.154H1.4Zm17.21-8.678V3.2A1.811,1.811,0,0,0,16.8,1.4H3.2A1.811,1.811,0,0,0,1.4,3.2v.625ZM4.275,11.646a.931.931,0,0,1-.93-.931V9.822a.931.931,0,0,1,.93-.931H6.422a.932.932,0,0,1,.931.931v.893a.932.932,0,0,1-.931.931Z"
                        transform="translate(2.625 6)"
                        fill="#848490"
                      />
                    </g>
                  </g>
                </svg>
                <span> Payment History</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/subscription"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    id="Group_3337"
                    data-name="Group 3337"
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
                    <g id="card-outline" transform="translate(51.375 194.146)">
                      <path
                        id="Union_1"
                        data-name="Union 1"
                        d="M3.2,15.707a3.206,3.206,0,0,1-3.2-3.2V3.2A3.207,3.207,0,0,1,3.2,0H16.8A3.206,3.206,0,0,1,20,3.2v9.3a3.206,3.206,0,0,1-3.2,3.2ZM1.4,12.506A1.809,1.809,0,0,0,3.2,14.312H16.8A1.81,1.81,0,0,0,18.605,12.5V6.154H1.4Zm17.21-8.678V3.2A1.811,1.811,0,0,0,16.8,1.4H3.2A1.811,1.811,0,0,0,1.4,3.2v.625ZM4.275,11.646a.931.931,0,0,1-.93-.931V9.822a.931.931,0,0,1,.93-.931H6.422a.932.932,0,0,1,.931.931v.893a.932.932,0,0,1-.931.931Z"
                        transform="translate(2.625 6)"
                        fill="#848490"
                      />
                    </g>
                  </g>
                </svg>
                <span> Upgrade Plan</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={`#`}
                className="deactive"
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
                <span>Logout</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* sidenav for mobile  */}
      <div className="nav_mobile_main nav_admin_dash_mobile">
        <div className="mobile_all">
          <div className="sidebar__logo">
            <NavLink to="/">
              {" "}
              <img src={images["logo.png"]} alt="" />{" "}
            </NavLink>
          </div>
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
                            id="fi-rr-home"
                            d="M19.267,7.566,12.947,1.24a4.172,4.172,0,0,0-5.893,0L.732,7.566A2.484,2.484,0,0,0,0,9.334V17.52a2.5,2.5,0,0,0,2.5,2.5h15a2.5,2.5,0,0,0,2.5-2.5V9.334A2.484,2.484,0,0,0,19.267,7.566ZM12.5,18.354h-5v-3.28a2.5,2.5,0,1,1,5,0Zm5.833-.834a.834.834,0,0,1-.833.834H14.167v-3.28a4.167,4.167,0,1,0-8.333,0v3.28H2.5a.834.834,0,0,1-.833-.834V9.334a.841.841,0,0,1,.244-.59L8.232,2.422a2.506,2.506,0,0,1,3.537,0l6.321,6.325a.841.841,0,0,1,.244.587Z"
                            transform="translate(52 110.979)"
                            fill="#8f78fb"
                          />
                        </g>
                      </svg>

                      <span className="hover_side"> Dashboard </span>
                    </NavLink>
                  </li>
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
                          <g
                            id="Group_3336"
                            data-name="Group 3336"
                            transform="translate(-1944.591 -1305.398)"
                          >
                            <path
                              id="Path_3357"
                              data-name="Path 3357"
                              d="M2018.59,1517.027v5.935a.763.763,0,0,1-.809.435q-9.251-.011-18.5-.005a.607.607,0,0,1-.682-.685c0-1.8.012-3.6-.008-5.406a.682.682,0,0,1,.742-.742c.924.015,1.848,0,2.771.009.194,0,.254-.046.253-.248-.009-1.613,0-3.227,0-4.84v-.238a3.68,3.68,0,0,1-.425.174.8.8,0,0,1-.373.035.574.574,0,0,1-.452-.544.6.6,0,0,1,.377-.565c.584-.27,1.171-.534,1.757-.8q2.3-1.044,4.6-2.086a.261.261,0,0,0,.177-.28c-.007-.989.007-1.978-.009-2.966a.755.755,0,0,1,.435-.809h2.811a.657.657,0,0,1,.431.744c-.011.129,0,.26,0,.39,0,.452-.212.662-.672.663-.547,0-1.094,0-1.64,0-.145,0-.192.041-.19.188.007.559.017,1.12,0,1.679a.4.4,0,0,0,.288.447c2.064.927,4.123,1.866,6.184,2.8a.6.6,0,0,1,.411.634.562.562,0,0,1-.763.5c-.141-.061-.282-.121-.441-.189-.007.076-.016.126-.016.176,0,1.646,0,3.293,0,4.939,0,.17.063.2.217.2.917-.006,1.835.005,2.752-.007A.73.73,0,0,1,2018.59,1517.027Zm-4.925-.565c0-1.848,0-3.695,0-5.542a.3.3,0,0,0-.208-.322c-.383-.161-.76-.339-1.138-.512-1.19-.541-2.378-1.085-3.571-1.619a.423.423,0,0,0-.309-.006c-1.582.711-3.16,1.432-4.74,2.148a.266.266,0,0,0-.183.279q.006,5.562,0,11.124c0,.158.041.214.206.212.729-.008,1.457-.01,2.186,0,.19,0,.225-.065.223-.235-.007-.956,0-1.913,0-2.869a.578.578,0,0,1,.656-.653h3.591c.468,0,.677.21.677.68,0,.956,0,1.913,0,2.869,0,.165.051.209.211.207.722-.007,1.444-.01,2.166,0,.188,0,.24-.051.24-.239C2013.662,1520.144,2013.665,1518.3,2013.665,1516.462Zm-13.9,3.507c0,.683,0,1.366,0,2.049,0,.166.053.207.212.206q1.083-.011,2.166,0c.161,0,.212-.045.211-.208q-.009-2.02,0-4.039c0-.2-.074-.245-.252-.244q-1.063.009-2.127,0c-.16,0-.212.044-.211.208C1999.774,1518.616,1999.77,1519.292,1999.77,1519.969Zm17.648.01c0-.676-.008-1.352.005-2.028,0-.2-.073-.234-.24-.216a4.093,4.093,0,0,1-.427.025c-.566,0-1.131.009-1.7,0-.186,0-.228.061-.227.235q.009,2.008,0,4.017c0,.155.035.217.2.215.728-.009,1.456-.007,2.184,0,.151,0,.2-.041.2-.2C2017.414,1521.344,2017.418,1520.661,2017.418,1519.979Zm-10.115.934c0,.377,0,.754,0,1.131,0,.135.041.181.178.18q1.111-.008,2.223,0c.15,0,.187-.051.185-.193q-.009-1.1,0-2.2c0-.143-.042-.193-.188-.191-.734.006-1.469.007-2.2,0-.161,0-.2.057-.2.2C2007.309,1520.2,2007.3,1520.555,2007.3,1520.912Z"
                              transform="translate(0 0)"
                              fill="#848490"
                            />
                            <path
                              id="Path_3358"
                              data-name="Path 3358"
                              d="M2196,1699.521a2.453,2.453,0,0,1-2.477,2.48,2.472,2.472,0,0,1,.015-4.944A2.445,2.445,0,0,1,2196,1699.521Zm-3.751-.02a1.288,1.288,0,1,0,2.576.025,1.258,1.258,0,0,0-1.3-1.3A1.277,1.277,0,0,0,2192.248,1699.5Z"
                              transform="translate(-184.944 -186.08)"
                              fill="#848490"
                            />
                          </g>
                        </g>
                      </svg>

                      <span className="hover_side"> School Profile </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/payment-history">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          id="Group_3337"
                          data-name="Group 3337"
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
                          <g
                            id="card-outline"
                            transform="translate(51.375 194.146)"
                          >
                            <path
                              id="Union_1"
                              data-name="Union 1"
                              d="M3.2,15.707a3.206,3.206,0,0,1-3.2-3.2V3.2A3.207,3.207,0,0,1,3.2,0H16.8A3.206,3.206,0,0,1,20,3.2v9.3a3.206,3.206,0,0,1-3.2,3.2ZM1.4,12.506A1.809,1.809,0,0,0,3.2,14.312H16.8A1.81,1.81,0,0,0,18.605,12.5V6.154H1.4Zm17.21-8.678V3.2A1.811,1.811,0,0,0,16.8,1.4H3.2A1.811,1.811,0,0,0,1.4,3.2v.625ZM4.275,11.646a.931.931,0,0,1-.93-.931V9.822a.931.931,0,0,1,.93-.931H6.422a.932.932,0,0,1,.931.931v.893a.932.932,0,0,1-.931.931Z"
                              transform="translate(2.625 6)"
                              fill="#848490"
                            />
                          </g>
                        </g>
                      </svg>

                      <span className="hover_side"> Payment History </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/subscription"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          id="Group_3337"
                          data-name="Group 3337"
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
                          <g
                            id="card-outline"
                            transform="translate(51.375 194.146)"
                          >
                            <path
                              id="Union_1"
                              data-name="Union 1"
                              d="M3.2,15.707a3.206,3.206,0,0,1-3.2-3.2V3.2A3.207,3.207,0,0,1,3.2,0H16.8A3.206,3.206,0,0,1,20,3.2v9.3a3.206,3.206,0,0,1-3.2,3.2ZM1.4,12.506A1.809,1.809,0,0,0,3.2,14.312H16.8A1.81,1.81,0,0,0,18.605,12.5V6.154H1.4Zm17.21-8.678V3.2A1.811,1.811,0,0,0,16.8,1.4H3.2A1.811,1.811,0,0,0,1.4,3.2v.625ZM4.275,11.646a.931.931,0,0,1-.93-.931V9.822a.931.931,0,0,1,.93-.931H6.422a.932.932,0,0,1,.931.931v.893a.932.932,0,0,1-.931.931Z"
                              transform="translate(2.625 6)"
                              fill="#848490"
                            />
                          </g>
                        </g>
                      </svg>
                      <span> Upgrade Plan</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      className="deactive"
                      onClick={() => dispatch(asyncLogOut(navigate))}
                    >
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
                            id="fi-rr-home"
                            d="M19.267,7.566,12.947,1.24a4.172,4.172,0,0,0-5.893,0L.732,7.566A2.484,2.484,0,0,0,0,9.334V17.52a2.5,2.5,0,0,0,2.5,2.5h15a2.5,2.5,0,0,0,2.5-2.5V9.334A2.484,2.484,0,0,0,19.267,7.566ZM12.5,18.354h-5v-3.28a2.5,2.5,0,1,1,5,0Zm5.833-.834a.834.834,0,0,1-.833.834H14.167v-3.28a4.167,4.167,0,1,0-8.333,0v3.28H2.5a.834.834,0,0,1-.833-.834V9.334a.841.841,0,0,1,.244-.59L8.232,2.422a2.506,2.506,0,0,1,3.537,0l6.321,6.325a.841.841,0,0,1,.244.587Z"
                            transform="translate(52 110.979)"
                            fill="#8f78fb"
                          />
                        </g>
                      </svg>

                      <span className="hover_side"> LogOut </span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidenav;
