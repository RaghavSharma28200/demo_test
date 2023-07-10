import React from "react";
import OwlCarousel from "react-owl-carousel";
import { images } from "../../actions/customFn";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const Category_slider = {
  loop: false,
  margin: 20,
  nav: false,
  dots: true,
  autoplay: false,
  autoplaySpeed: 3000,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    900: {
      items: 1,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
};

const TESTIMONIAL_CARD = [
  {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    name: "Kevin R. Miranda",
    image: images["human-1.png"],
  },
  {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    name: "Kevin R. Miranda",
    image: images["human-2.png"],
  },
  {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    name: "Kevin R. Miranda",
    image: images["human-3.png"],
  },
  {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    name: "Kevin R. Miranda",
    image: images["human-3.png"],
  },
];

const Testimonial = () => {
  const homeData = useSelector((state) => state.homeData);

  const [testimonialArr, setTestimonialArr] = useState([]);

  useEffect(() => {
    if (Object.keys(homeData).length > 0) {
      setTestimonialArr(homeData.testimonial);
    }
  }, [homeData]);

  return (
    <div className="testimonial_container" id="testimonial">
      <div className="container">
        <div className="testtimonia_div">
          {Object.keys(homeData).length > 0 && (
            <h1>{homeData.testimonial_heading}</h1>
          )}

          {testimonialArr.length > 0 && (
            <OwlCarousel
              {...Category_slider}
              className="Trending_slider slider_all owl-carousel owl-theme"
            >
              {testimonialArr.length > 0 &&
                testimonialArr.map((data, i) => {
                  return (
                    <div className="testimonialcard">
                      <div className="testimonial_desc">
                        <p>{data.testimonial_description} </p>
                        <img
                          alt=""
                          src={images["comment-right.png"]}
                          className="comment-right"
                        />
                        <img
                          alt=""
                          src={images["comment-left.png"]}
                          className="comment-left"
                        />
                      </div>
                      <div
                        className="testimonial_img"
                        style={{
                          backgroundImage: `url(${data.testimonial_image})`,
                        }}
                      ></div>
                      <h4>{data.testimonial_title}</h4>
                    </div>
                  );
                })}
            </OwlCarousel>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
