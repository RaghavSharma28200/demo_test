import React from "react";
import { images } from "../actions/customFn";
import { NavLink } from "react-router-dom";

const Exploring = () => {
  const exploring_list = [
    {
      image: images["us-2.png"],
      title: "Child",
    },
    {
      image: images["us-1.png"],
      title: "Parents",
    },
    {
      image: images["us-3.png"],
      title: "Teacher",
    },
  ];

  return (
    <div className="exploring-main-scr">
      <div className="SplashScreen--bg">
        <div className="container">
          <div className="exploring--main">
            <div className="exploring_heading">
              <h2 className="all-home-heading">Who’s Exploring?</h2>
            </div>
            <div className="exploring-all-box">
              <div className="row  justify-content-center">
                {exploring_list.map(function (value, index) {
                  return (
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
                      <NavLink to="">
                        <div className="exploring--box">
                          <div className="exploring--img" key={index}>
                            <img src={value.image} alt="" />
                          </div>
                          <div className="exploring--title">
                            <p>{value.title}</p>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}
                {/* <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="exploring--box">
                    <div className="exploring--img">
                      <img src={images["us-1.png"]} alt="" />
                    </div>
                    <div className="exploring--title">
                      <p> Child</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="exploring--box">
                    <div className="exploring--img">
                      <img src={images["us-1.png"]} alt="" />
                    </div>
                    <div className="exploring--title">
                      <p> Parents </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="exploring--box">
                    <div className="exploring--img">
                      <img src={images["us-1.png"]} alt="" />
                    </div>
                    <div className="exploring--title">
                      <p> Teacher </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exploring;
