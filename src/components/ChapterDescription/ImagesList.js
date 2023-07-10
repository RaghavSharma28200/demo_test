import React from "react";
import OwlCarousel from "react-owl-carousel";
import { images } from "../../actions/customFn";
const ImagesList = () => {
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
      1000: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1600: {
        items: 3,
      },
    },
  };

  const image_slider = [
    {
      image: images["image_1.png"],
      title: "Lorem Ipsum is simply dummy text of the printing",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
    },
    {
      image: images["image_2.png"],
      title: "Lorem Ipsum is simply dummy text of the printing",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
    },
    {
      image: images["image_3.png"],
      title: "Lorem Ipsum is simply dummy text of the printing",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
    },
    {
      image: images["image_1.png"],
      title: "Lorem Ipsum is simply dummy text of the printing",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
    },
    {
      image: images["image_2.png"],
      title: "Lorem Ipsum is simply dummy text of the printing",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
    },
    {
      image: images["image_3.png"],
      title: "Lorem Ipsum is simply dummy text of the printing",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
    },
    {
      image: images["image_1.png"],
      title: "Lorem Ipsum is simply dummy text of the printing",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
    },
    {
      image: images["image_2.png"],
      title: "Lorem Ipsum is simply dummy text of the printing",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
    },
    {
      image: images["image_3.png"],
      title: "Lorem Ipsum is simply dummy text of the printing",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
    },
  ];
  return (
    <div className="image_list_main">
      <div className="description-top-heading">
        <img src={images["image_icon.png"]} alt="" />
        <span>Images</span>
      </div>
      <OwlCarousel
        {...Course_slider}
        className="Course_slider_inner owl-carousel owl-theme"
      >
        {image_slider.map(function (value, index) {
          return (
            <>
              <div className="item" key={index}>
                <div
                  className="Course_slider_info"
                  style={{ backgroundImage: `url(${[value.image]})` }}
                ></div>
                <div className="slider_text">
                  <p>{value.title}</p>
                  <span>{value.content}</span>
                </div>
              </div>
            </>
          );
        })}
      </OwlCarousel>
    </div>
  );
};

export default ImagesList;
