import React from "react";
import { images } from "../../actions/customFn";

const CourseInfo = () => {
  return (
    <>
      <div className="CourseInfo--main">
        <div className="row">
          <div className="Col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div
              className="Course_img"
              style={{ backgroundImage: `url(${images["top_banner.png"]})` }}
            >
              {/* <img src={images["top_banner.png"]} /> */}
              <div className="course_content">
                <div className="course_content_left">
                  <div className="heading_cus">
                    <h2>New course</h2>
                  </div>
                  <div className="course_btn">
                    <div className="course_btn_one">
                      <button>Maths</button>
                    </div>
                    {/* <div className="course_btn_two">
                      <button>English</button>
                    </div> */}
                  </div>
                  <div className="course_sub_info">
                    <h2>Lorem Ipsum is simply dummy text</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div className="course_content_right">
                  <img src={images["profile_ion.png"]} alt="" />
                  <span>Scott A. Foster</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="Col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="Course--right-box">
              <img src={images["box_inner.png"]} alt="" />
              <p>
                Subscribe now and <br />
                start learning
              </p>
              <button className="btn-round"> Subscribe </button>
            </div>
          </div> */}
        </div>
        {/* <div
          className="course--bg"
          style={{ backgroundImage: `url(${images["bg_top.png"]})` }}
        ></div> */}
      </div>
    </>
  );
};

export default CourseInfo;
