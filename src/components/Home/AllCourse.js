import React from "react";
import OwlCarousel from "react-owl-carousel";
import { images } from "../../actions/customFn";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/fontawesome-free-solid";

const AllCourse = (props) => {
  const Course_slider = {
    loop: false,
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
      900: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1600: {
        items: 5,
      },
      1920: {
        items: 6,
      },
    },
  };

  const slider = [
    {
      image: images["slider-1.png"],
      title: "Lorem Ipsum is simply dummy text",
    },
    {
      image: images["slider-2.png"],
      title: "Lorem Ipsum is simply dummy text",
    },
    {
      image: images["slider-4.png"],
      title: "Lorem Ipsum is simply dummy text",
    },
    {
      image: images["slider-5.png"],
      title: "Lorem Ipsum is simply dummy text",
    },
    {
      image: images["slider-1.png"],
      title: "Lorem Ipsum is simply dummy text",
    },
    {
      image: images["slider-2.png"],
      title: "Lorem Ipsum is simply dummy text",
    },
    {
      image: images["slider-4.png"],
      title: "Lorem Ipsum is simply dummy text",
    },
    {
      image: images["slider-5.png"],
      title: "Lorem Ipsum is simply dummy text",
    },
  ];
  return (
    <>
      <div className="AllCourse--slider">
        <div className="all--course-slider">
          <div className="Category--heding">
            <h2 className="all-home-heading"> {props.heading} </h2>
          </div>
          <OwlCarousel
            {...Course_slider}
            className="Course_slider_inner owl-carousel owl-theme"
          >
            {slider.map(function (value, index) {
              return (
                <div className="item Course_slider_img" key={index}>
                  <div
                    className="Course_slider_info"
                    style={{ backgroundImage: `url(${[value.image]})` }}
                  >
                    {/* <img src={value.image} alt="" /> */}
                    <div className="slider_text">
                      <p>{value.title}</p>
                    </div>

                    <div className="cousre--content">
                      <div className="watch_btn">
                        <NavLink
                          to="/chapter-description"
                          className="btn_video_play"
                        >
                          <FontAwesomeIcon icon={faPlay} />{" "}
                          <span> Watch Video </span>
                        </NavLink>
                      </div>
                      <div className="course_btn">
                        <div className="course_btn_one">
                          <button>Maths</button>
                        </div>
                        {/* <div className="course_btn_two">
                          <button>English</button>
                        </div> */}
                      </div>
                      <div className="slider_text_inner">
                        <p>{value.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default AllCourse;
