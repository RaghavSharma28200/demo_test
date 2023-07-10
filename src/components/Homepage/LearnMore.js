import React from "react";
import { images } from "../../actions/customFn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/fontawesome-free-solid";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Images = [
  {
    image: images["human-1.png"],
  },
  {
    image: images["human-2.png"],
  },
  {
    image: images["human-3.png"],
  },
  {
    image: images["human-1.png"],
  },
  {
    image: images["human-2.png"],
  },
  {
    image: images["human-3.png"],
  },
];

const LearnMore = () => {
  const homeData = useSelector((state) => state.homeData);
  const navigate = useNavigate()

  return (
    <div className="learn_more_container">
      <div className="container">
        <div className="row lear_more_div">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 home_order">
            <div className="learn_more_right">
              {Object.keys(homeData).length > 0 && (
                <img alt="" src={homeData.course_image} />
              )}
              {/* <img alt="" src={images["learn-more-img.png"]} /> */}
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 learn_more_left">
            {Object.keys(homeData).length > 0 && (
              <>
                <h1>{homeData.courses_heading}</h1>
              </>
            )}
            <p
              dangerouslySetInnerHTML={{ __html: homeData.courses_description }}
            ></p>
            {/* <h3>Top students</h3>
            <ul className="learnmore_img_grid">
              {Object.keys(homeData).length > 0 &&
                homeData.student_image.map((img, i) => {
                  return (
                    <li
                      className="img_grid_item"
                      key={i}
                      style={{ backgroundImage: `url(${img.student_image})` }}
                    ></li>
                  );
                })}
            </ul> */}
            <div className="middle_button_wrapper">
              <button className="get_start_btn" onClick={()=>navigate("/login")}>Learn More</button>
              {/* <button className="middle_paly_btn">
                <FontAwesomeIcon icon={faPlay} />
              </button>
              <span>Play Video</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
