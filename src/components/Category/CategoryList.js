import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { images, notifyDanger } from "../../actions/customFn";
import { NavLink, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/fontawesome-free-solid";
import ReactPaginate from "react-paginate";
import axios from "../../axios";
import PageNotFound from "../PageNotFound";
import RecordNotFound from "../RecordNotFound";

const CategoryList = (props) => {
  const {setLoading} = props
  const [pageCount, setPageCount] = useState("01");
  const [currentPage, setcurrentPage] = useState(0);

  const [categoryDetail, setCategoryDetail] = useState([]);
  const [checkDetail, setCheckDetail] = useState(false);

  const { id } = useParams();
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

  useEffect(() => {
    const url = "/categories_detail";
    const data = {
      slug: id,
      user_id: localStorage.getItem("futr_user_id"),
      password: localStorage.getItem("futr_password"),
      role:localStorage.getItem("futr_role")
    };
    axios
      .post(url, data)
      .then((res) => {
        const { data, status, message } = res.data;
        if (status) {
          setCategoryDetail(data);
          setLoading(false)
        } else {
          // notifyDanger(message);
          setCheckDetail(true);
          setLoading(false)

        }
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false)

      });
  }, []);
  return (
    <>
      {checkDetail ? (
      <RecordNotFound Height={"90vh"}/>
      ) : (
        <div className="AllCourse--slider">
          <div className="all--course-slider">
            <div className="Category--heding">
              <h2 className="all-home-heading">
                {" "}
                {categoryDetail.length > 0
                  ? categoryDetail[0].category
                  : ""}{" "}
              </h2>
            </div>
            <div className="row">
              {categoryDetail.map(function (value, index) {
                return (
                  <div className="col-12 col-xl-3 col-lg-4 col-md-6 col-sm-12 category_list">
                    <div className="item Course_slider_img" key={index}>
                      <div
                        className="Course_slider_info"
                        style={{
                          backgroundImage: `url(${[value.thumbnail_image]})`,
                        }}
                      >
                        {/* <img src={value.image} alt="" /> */}
                        <div className="slider_text">
                          <p>{value.title}</p>
                        </div>

                        <div className="cousre--content">
                          <div className="watch_btn">
                            {value.video !== "" && (
                              <NavLink
                                to={`/chapter-description/${value.slug}`}
                                className="btn_video_play"
                              >
                                <FontAwesomeIcon icon={faPlay} />{" "}
                                <span> Watch Video </span>
                              </NavLink>
                            )}
                          </div>
                          <div className="course_btn">
                            <div className="course_btn_one">
                              <button>{value.subcategory}</button>
                            </div>
                            {/* <div className="course_btn_one">
                            <button>{value.category}</button>
                          </div> */}
                          </div>
                          <div className="slider_text_inner">
                            <p>{value.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <div className="pagination_all_main">
            <ReactPaginate
              pageCount={pageCount}
              pageRange={2}
              marginPagesDisplayed={2}
              forcePage={currentPage}
              // onPageChange={handlePageChange}
              containerClassName={"pagination"}
              previousLinkClassName={"page-item"}
              breakClassName={"page-item"}
              nextLinkClassName={"page-item"}
              pageClassName={"page-item"}
              disabledClassNae={"disabled"}
              activeClassName={"active"}
              nextLabel={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7.172"
                  height="14"
                  viewBox="0 0 7.172 14"
                >
                  <path
                    id="fi-rr-angle-small-down"
                    d="M13.707,6.879a1,1,0,0,1-1.414,0L7.707,2.293a1.021,1.021,0,0,0-1.414,0L1.707,6.879A1,1,0,1,1,.293,5.465L4.878.879a3,3,0,0,1,4.243,0l4.586,4.586a1,1,0,0,1,0,1.414Z"
                    transform="translate(7.172) rotate(90)"
                    fill="#fff"
                  />
                </svg>
              }
              previousLabel={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7.172"
                  height="14"
                  viewBox="0 0 7.172 14"
                >
                  <path
                    id="fi-rr-angle-small-down"
                    d="M18.707,8.207a1,1,0,0,0-1.414,0l-4.586,4.586a1.021,1.021,0,0,1-1.414,0L6.707,8.207A1,1,0,1,0,5.293,9.621l4.585,4.586a3,3,0,0,0,4.243,0l4.586-4.586a1,1,0,0,0,0-1.414Z"
                    transform="translate(15.086 -5) rotate(90)"
                    fill="#fff"
                  />
                </svg>
              }
            />
          </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryList;
