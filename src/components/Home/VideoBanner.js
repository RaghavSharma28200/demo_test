import React from "react";
import videobg from "../../assets/video/mixkit-young-teacher-teaching-complicated-equations-4623-medium.mp4";
import { images } from "../../actions/customFn";
import OwlCarousel from "react-owl-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/fontawesome-free-solid";
import { NavLink } from "react-router-dom";

const VideoBanner = () => {
  const video_slider = {
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 3000,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  };

  const videoslider = [
    {
      image: images["slider-1.png"],
    },
    {
      image: images["slider-2.png"],
    },
    {
      image: images["slider-4.png"],
    },
    {
      image: images["slider-5.png"],
    },
    {
      image: images["slider-1.png"],
    },
    {
      image: images["slider-2.png"],
    },
    {
      image: images["slider-4.png"],
    },
    {
      image: images["slider-5.png"],
    },
  ];
  return (
    <>
      <div className="video_banner_main">
        <div className="video--banner-inner">
          <h2 className="all-home-heading">Popular Course</h2>
          <div className="video_player">
            <video autoPlay loop muted id="myVideo">
              <source src={videobg} type="video/mp4" />
            </video>
          </div>

          <div className="course_content">
            <div className="row align-items-end">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="course_content_left">
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
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                  </div>
                </div>
                <div className="course_content_right">
                  <div className="content--user">
                    <img src={images["profile_ion.png"]} alt="" />
                    <span>Scott A. Foster</span>
                  </div>
                  <div className="watch_btn">
                    <NavLink
                      to="/chapter-description"
                      className="btn_video_play"
                    >
                      <FontAwesomeIcon icon={faPlay} />{" "}
                      <span> Watch Video </span>
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="video-side-slider">
                  <OwlCarousel
                    {...video_slider}
                    className="Video_slider owl-carousel owl-theme"
                  >
                    {videoslider.map(function (value, index) {
                      return (
                        <>
                          <div className="item Video_slider_img" key={index}>
                            <div
                              className="Video_slider_info"
                              style={{
                                backgroundImage: `url(${[value.image]})`,
                              }}
                            ></div>
                          </div>
                        </>
                      );
                    })}
                  </OwlCarousel>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoBanner;
