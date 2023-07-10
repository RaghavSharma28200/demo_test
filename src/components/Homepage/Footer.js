import React from "react";
import { images, scrollToId } from "../../actions/customFn";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const homeData = useSelector((state) => state.homeData);

  const [settings, setSetting] = useState({});

  console.log(homeData);

  useEffect(() => {
    if (Object.keys(homeData).length > 0) {
      setSetting(homeData.settings);
    }
  }, [homeData]);

  return (
    <div className="footer_container">
      <div className="footer_curve_img">
        <svg fill="#151949" viewBox="0 0 1920 226">
          <path d="M1920,640H0V200C0,89.543,89.543,0,200,0L1920,205.193Z"></path>
        </svg>
      </div>
      {Object.keys(settings).length > 0 && (
        <div className="footer_bg">
          <div className="footer_main_div">
            <div className="container">
              <div className="footer_logo">
                <NavLink to={"/"}>
                  <img alt="" src={settings.footer_logo} />
                </NavLink>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                  <div className="footer_first">
                    <div className="footer_first_desc">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: settings.footer_text,
                        }}
                      ></p>
                    </div>
                    <div className="footer_media_links">
                      <ul>
                        <li>
                          <NavLink to={settings.facebook}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <g
                                id="Group_1"
                                data-name="Group 1"
                                transform="translate(-165 -15)"
                              >
                                <path
                                  id="Icon_awesome-facebook-f"
                                  data-name="Icon awesome-facebook-f"
                                  d="M10.954,10.125l.519-3.258H8.23V4.753a1.659,1.659,0,0,1,1.905-1.76h1.474V.22A18.625,18.625,0,0,0,8.993,0,4.05,4.05,0,0,0,4.578,4.385V6.867H1.609v3.258H4.578V18H8.23V10.125Z"
                                  transform="translate(170.391 18)"
                                  fill="#fff"
                                />
                                <g
                                  id="Rectangle_1"
                                  data-name="Rectangle 1"
                                  transform="translate(165 15)"
                                  fill="none"
                                  stroke="#fff"
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
                            </svg>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={settings.twitter}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <g
                                id="Group_2"
                                data-name="Group 2"
                                transform="translate(-325 -66)"
                              >
                                <path
                                  id="Icon_awesome-twitter"
                                  data-name="Icon awesome-twitter"
                                  d="M16.15,7.368c.011.175.011.35.011.525,0,5.337-3.712,11.487-10.5,11.487A9.783,9.783,0,0,1,0,17.568a6.98,6.98,0,0,0,.891.05,6.994,6.994,0,0,0,4.58-1.725,3.754,3.754,0,0,1-3.449-2.8,4.26,4.26,0,0,0,.7.062,3.585,3.585,0,0,0,.971-.137A3.965,3.965,0,0,1,.731,9.056v-.05A3.477,3.477,0,0,0,2.4,9.518,4.146,4.146,0,0,1,.754,6.156a4.3,4.3,0,0,1,.5-2.037A10.218,10.218,0,0,0,8.863,8.343a4.972,4.972,0,0,1-.091-.925,3.874,3.874,0,0,1,3.689-4.038,3.54,3.54,0,0,1,2.7,1.275A6.9,6.9,0,0,0,17.5,3.681a3.982,3.982,0,0,1-1.622,2.225A6.9,6.9,0,0,0,18,5.281a8.38,8.38,0,0,1-1.85,2.087Z"
                                  transform="translate(328 66.619)"
                                  fill="#fff"
                                />
                                <g
                                  id="Rectangle_2"
                                  data-name="Rectangle 2"
                                  transform="translate(325 66)"
                                  fill="none"
                                  stroke="#fff"
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
                            </svg>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={settings.linkdin}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <g
                                id="Group_3"
                                data-name="Group 3"
                                transform="translate(-386 -66)"
                              >
                                <path
                                  id="Icon_awesome-linkedin-in"
                                  data-name="Icon awesome-linkedin-in"
                                  d="M4.029,18H.3V5.983H4.029ZM2.161,4.344A2.172,2.172,0,1,1,4.322,2.162,2.179,2.179,0,0,1,2.161,4.344ZM18,18H14.272v-5.85c0-1.394-.028-3.182-1.94-3.182-1.94,0-2.238,1.515-2.238,3.082V18H6.367V5.983H9.946V7.622H10a3.921,3.921,0,0,1,3.531-1.941C17.306,5.682,18,8.169,18,11.4V18Z"
                                  transform="translate(389 68.999)"
                                  fill="#fff"
                                />
                                <g
                                  id="Rectangle_3"
                                  data-name="Rectangle 3"
                                  transform="translate(386 66)"
                                  fill="none"
                                  stroke="#fff"
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
                            </svg>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={settings.pintrest}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <g
                                id="Group_4"
                                data-name="Group 4"
                                transform="translate(-443 -112)"
                              >
                                <path
                                  id="Icon_awesome-skype"
                                  data-name="Icon awesome-skype"
                                  d="M17.068,13.012a8.746,8.746,0,0,0,.189-1.76A8.247,8.247,0,0,0,9.006,3a8.495,8.495,0,0,0-1.76.189,4.5,4.5,0,0,0-6.309,6.3,8.746,8.746,0,0,0-.189,1.76A8.247,8.247,0,0,0,9,19.5a8.495,8.495,0,0,0,1.76-.189A4.5,4.5,0,0,0,18,15.749a4.433,4.433,0,0,0-.932-2.737Zm-7.82,3.677c-2.636,0-4.843-1.173-4.843-2.612a1.129,1.129,0,0,1,1.186-1.23c1.254,0,1.37,1.8,3.541,1.8,1.033,0,1.7-.458,1.7-1.057,0-.752-.643-.868-1.688-1.125-2.512-.619-4.734-.884-4.734-3.5,0-2.379,2.355-3.259,4.384-3.259,2.214,0,4.453.88,4.453,2.226A1.211,1.211,0,0,1,12.028,9.21c-1.137,0-1.173-1.346-3.014-1.346-1.033,0-1.688.281-1.688.9,0,.8.836.876,2.777,1.326,1.664.374,3.645,1.077,3.645,3.119,0,2.375-2.295,3.476-4.5,3.476Z"
                                  transform="translate(446 112.75)"
                                  fill="#fff"
                                />
                                <g
                                  id="Rectangle_5"
                                  data-name="Rectangle 5"
                                  transform="translate(443 112)"
                                  fill="none"
                                  stroke="#fff"
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
                            </svg>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                  <div className="footer_second">
                    <div className="footer_options">
                      <ul>
                        {/* <li onClick={(e) => scrollToId("home")}>Home</li> */}
                        {/* <li onClick={(e) => scrollToId("about_us")}>
                          About us
                        </li> */}
                        {/* <li onClick={(e) => scrollToId("testimonial")}>
                          Testimonials
                        </li>
                        <li onClick={(e) => scrollToId("faq")}>Faq's</li> */}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                  <div className="footer_third">
                    <h1>Subscribe To Our Newsletter</h1>
                    <div className="footer_inp">
                      <input placeholder="Enter your email address" />
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                        >
                          <path
                            id="fi-sr-arrow-small-right"
                            d="M13.121,6.293a1,1,0,0,0,0,1.414L16.413,11,6,11.007a1,1,0,0,0,0,2L16.414,13l-3.293,3.293a1,1,0,1,0,1.414,1.414l3.586-3.585a3,3,0,0,0,0-4.243L14.535,6.293A1,1,0,0,0,13.121,6.293Z"
                            transform="translate(-5 -6)"
                            fill="#fff"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="copyright_text">
                <p>{settings.copy_rights}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
