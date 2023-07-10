import React from "react";
import { images } from "../../actions/customFn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/fontawesome-free-solid";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MiddleSection = () => {
  const homeData = useSelector((state) => state.homeData);
  const navigate = useNavigate()
  return (
    <div className="home_middle_container">
      <div className="container">
        <div className="row">
          <div className=" col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
            {Object.keys(homeData).length > 0 && (
              <div className="home_middle_right">
                <p className="middle_heading">{homeData.heading}</p>
                <h1>{homeData.sub_heading} </h1>

                <p
                  dangerouslySetInnerHTML={{ __html: homeData.description }}
                ></p>
                <div className="middle_button_wrapper">
                  <button className="get_start_btn"  onClick={()=>navigate("/login")}>Get Start</button>
                  {/* <button className="middle_paly_btn">
                    <FontAwesomeIcon icon={faPlay} />
                  </button>
                  <span>Play Video</span> */}
                </div>
                <div className="middle_info_wrapper">
                  <div className="middle_info_btn">
                    <h2>50+</h2>
                    <p>Courses</p>
                  </div>
                  <div className="middle_info_btn">
                    <h2>1M+</h2>
                    <p>Students</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
            <div className="middle_left_img">
              {/* <img alt="" src={images["middle_child-img.png"]} /> */}
              {Object.keys(homeData).length > 0 && (
                <img
                  alt=""
                  src={homeData.home_banner_image}
                  className="middle_section_img"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
