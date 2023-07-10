import React, { useContext, useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { images } from "../../actions/customFn";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetCategoryData } from "../../actions/categoryAction";
import LoadingOverlay from "react-loading-overlay";
import Loader from "../Loader";
import { AppContext } from "../../App";

const Category = ({setLoading}) => {
  const dispatch = useDispatch();
  // const {setLoading} = useContext(AppContext)
  const categoryList = useSelector((state) => state.categoryData.allCategory);
  const [isLoading, setIsLoading] = useState(false);

  const [categoryDetail, setCategoryDetail] = useState([]);

  const Category_slider = {
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
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  };

  const slider = [
    {
      image: images["cat-1.png"],
      title: "Science",
    },
    {
      image: images["cat-2.png"],
      title: "Maths",
    },
    {
      image: images["cat-1.png"],
      title: "Science",
    },
    {
      image: images["cat-2.png"],
      title: "Maths",
    },
    {
      image: images["cat-1.png"],
      title: "Science",
    },
    {
      image: images["cat-1.png"],
      title: "Science",
    },
    {
      image: images["cat-2.png"],
      title: "Maths",
    },
    {
      image: images["cat-1.png"],
      title: "Science",
    },
    {
      image: images["cat-2.png"],
      title: "Maths",
    },
    {
      image: images["cat-1.png"],
      title: "Science",
    },
  ];
  useEffect(() => {
    setCategoryDetail(categoryList);
  }, [categoryList]);

  useEffect(() => {
    dispatch(asyncGetCategoryData(setLoading));
  }, []);

  return (
    <>
    
      <div className="Category--main slider--all">
        {categoryDetail.length > 0 && (
          <>
            <div className="Category--heding">
              <h2 className="all-home-heading"> Category </h2>
            </div>
            <div className="Category-slider">
              <OwlCarousel
                {...Category_slider}
                className="Trending_slider slider_all owl-carousel owl-theme"
              >
                {categoryDetail.map((value, index) => {
                  return (
                    <div className="item Category_slider_img" key={index}>
                      <NavLink to={`/category-details/${value.slug}`}>
                        <div className="Category_slider_info">
                          <img src={value.image} alt="" />
                          <div className="slider_text">
                            <p>{value.title}</p>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}
              </OwlCarousel>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Category;
