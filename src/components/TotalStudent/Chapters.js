import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "../../axios";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetCategoryData } from "../../actions/categoryAction";
import { AppContext } from "../../App";
import RecordNotFound from "../RecordNotFound";
import ReactPaginate from "react-paginate";
import MiddleLoader from "../MiddleLoader";

const Chapters = ({ setLoading }) => {
  const all_chapter = [
    {
      title: "Lorem Ipsum is simply dummy text",
      content:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Lorem Ipsum is simply dummy text",
      content:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Lorem Ipsum is simply dummy text",
      content:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Lorem Ipsum is simply dummy text",
      content:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Lorem Ipsum is simply dummy text",
      content:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Lorem Ipsum is simply dummy text",
      content:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Lorem Ipsum is simply dummy text",
      content:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Lorem Ipsum is simply dummy text",
      content:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Lorem Ipsum is simply dummy text",
      content:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  const [chapterList, setChapterList] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  const [totalPage, setTotalPage] = useState(1);
  const [isDataLoad, setDataLoad] = useState(false);
  const [offSet, setOffset] = useState(0);
  const categoryData = useSelector((state) => state.categoryData.allCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    setDataLoad(true);
    const url = "/total_chapters";
    const data = {
      user_id: localStorage.getItem("futr_user_id"),
      password: localStorage.getItem("futr_password"),
      role: localStorage.getItem("futr_role"),
      offset: offSet,
    };
    if (categoryId !== "") {
      data.category_id = categoryId;
    }
    axios
      .post(url, data)
      .then((res) => {
        const { data, status, page_count } = res.data;
        if (status) {
          setChapterList(data);
          setTotalPage(page_count);
        } else {
          setChapterList([]);
          setTotalPage(0);
        }
        setLoading(false);
        setTimeout(() => {
          setDataLoad(false);
        }, 500);
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false);
        setTimeout(() => {
          setDataLoad(false);
        }, 500);
      });
  }, [categoryId, offSet]);

  useEffect(() => {
    dispatch(asyncGetCategoryData(setLoading));
  }, []);

  const handlePageChange = (e) => {
    setOffset(e.selected);
  };

  return (
    <div className="dashboard_table_main">
      <div className="dashboard_table_top">
        <h2>Total Chapter</h2>
        <div className="input_chat all_chapter_select">
          <Form.Select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="" selected disabled hidden>
              select an option
            </option>
            {categoryData.length > 0 &&
              categoryData.map((value, i) => {
                return (
                  <option key={i} value={value.id}>
                    {value.title}
                  </option>
                );
              })}
          </Form.Select>
        </div>
      </div>
      {isDataLoad ? (
        <MiddleLoader />
      ) : (
        <>
          <div className="Chapter--all-list">
            <div className="row">
              {chapterList.length > 0 ? (
                chapterList.map(function (value, index) {
                  return (
                    <div
                      className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
                      key={index}
                    >
                      <div className="chapter_box">
                        <div className="course_content_left">
                          <div className="course_btn">
                            <div className="course_btn_one">
                              <button>{value.category}</button>
                            </div>
                            {/* <div className="course_btn_two">
                        <button>English</button>
                      </div> */}
                          </div>
                          <div className="course_sub_info ">
                            <h2>{value.title}</h2>
                            <p className="admin_profile_container chapter_list_scroll">{value.short_description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <RecordNotFound Height={"60vh"} />
              )}
            </div>
          </div>
          {totalPage > 1 && (
            <div className="pagination_all_main">
              <ReactPaginate
                pageCount={totalPage}
                pageRange={2}
                marginPagesDisplayed={2}
                forcePage={offSet}
                onPageChange={handlePageChange}
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
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Chapters;
