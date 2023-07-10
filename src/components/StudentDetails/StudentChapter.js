import React, { useContext, useEffect, useState } from "react";
import { images } from "../../actions/customFn";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Form from "react-bootstrap/Form";
import SendProgressReport from "../Modal/SendProgressReport";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../../App";
import { useParams } from "react-router-dom";
import { asyncGetCategoryData } from "../../actions/categoryAction";
import { asyncStudentRequestDetail } from "../../actions/studentRequestAction";
import RecordNotFound from "../RecordNotFound";
import MiddleLoader from "../MiddleLoader";

// backgroundColor: (context) => {
//   const ctx = context.chart.ctx;
//   const gradient = ctx.createLinearGradient(0, 0, 0, 200);
//   gradient.addColorStop(0, "#8F78FB");
//   gradient.addColorStop(1, "#9B2ADC");

//   return gradient;
// },

// rgba(9, 9, 33, 1)

// const plugins = [
//   {
//     beforeDraw: (chart, args, options) => {
//       const { ctx } = chart;
//       console.log(ctx);
//       ctx.shadowColor = '#9B2ADC';
//       ctx.shadowBlur = 25;
//       ctx.shadowOffsetX = 2;
//       ctx.shadowOffsetY = 25;
//     },
//   },
// ];

ChartJS.register(ArcElement, Tooltip, Legend, Filler);
const StudentChapter = ({ setLoading }) => {
  const chapter_list = [
    {
      image: images["ss-1.png"],
      title: "Lorem Ipsum is simply dummy text",
      content: "Lorem Ipsum is simply dummy text of",
    },
    {
      image: images["ss-2.png"],
      title: "Lorem Ipsum is simply dummy text",
      content: "Lorem Ipsum is simply dummy text of",
    },
    {
      image: images["ss-1.png"],
      title: "Lorem Ipsum is simply dummy text",
      content: "Lorem Ipsum is simply dummy text of",
    },
    {
      image: images["ss-2.png"],
      title: "Lorem Ipsum is simply dummy text",
      content: "Lorem Ipsum is simply dummy text of",
    },
    {
      image: images["ss-1.png"],
      title: "Lorem Ipsum is simply dummy text",
      content: "Lorem Ipsum is simply dummy text of",
    },
    {
      image: images["ss-2.png"],
      title: "Lorem Ipsum is simply dummy text",
      content: "Lorem Ipsum is simply dummy text of",
    },
    {
      image: images["ss-1.png"],
      title: "Lorem Ipsum is simply dummy text",
      content: "Lorem Ipsum is simply dummy text of",
    },
    {
      image: images["ss-2.png"],
      title: "Lorem Ipsum is simply dummy text",
      content: "Lorem Ipsum is simply dummy text of",
    },
  ];

  const [ProgressModal, SetProgressModal] = useState(false);
  const ShowModal = () => {
    SetProgressModal(true);
  };

  // Modal
  const CloseModal = () => {
    SetProgressModal(false);
  };

  // Pagination
  const [pageCount, setPageCount] = useState("01");
  const [currentPage, setcurrentPage] = useState(0);
  const [chapterList, setChapterList] = useState([]);
  const [progressPercent, setProgressPercent] = useState("");

  const [categoryId, setCategoryId] = useState("");
  const studentRequestData = useSelector((state) => state.studentRequestData);
  const categoryData = useSelector((state) => state.categoryData.allCategory);

  // const { setLoading } = useContext(AppContext);
  const [isDataLoad, setDataLoad] = useState(false);

  const [updateStudentRequest, setUpdateStudentRequest] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);

  const [totalPage, setTotalPage] = useState(1);

  const [offSet, setOffset] = useState(0);

  const { id } = useParams();

  const dispatch = useDispatch();

  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: [progressPercent, progressPercent - 100],
        backgroundColor: ["rgba(155, 42, 220, 1)", "rgba(9, 9, 33, 1)"],
        borderWidth: 0,
      },
    ],
  };

  useEffect(() => {
    if (Object.keys(studentRequestData).length > 0) {
      setChapterList(studentRequestData.chapter_list);
      setProgressPercent(studentRequestData.report);
    }
  }, [studentRequestData]);

  useEffect(() => {
    dispatch(asyncGetCategoryData(setLoading));
  }, []);

  useEffect(() => {
    const data = {
      user_id: localStorage.getItem("futr_user_id"),
      password: localStorage.getItem("futr_password"),
      role: localStorage.getItem("futr_role"),
      status: "Approve",
      student_id: id,
    };
    if (categoryId !== "") {
      data.category_id = categoryId;
    }
    dispatch(
      asyncStudentRequestDetail(data, setLoading, setTotalPage, setDataLoad)
    );
  }, [categoryId, isUpdate, offSet]);

  const handlePageChange = (e) => {
    setOffset(e.selected);
  };

  return (
    <>
      <div className="student_chapter_list">
        <div className="row">
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12 cha_div_order_one">
            <div className="list_chapter_main list_new_chapter">
              <h2>Complete Chapter</h2>
              {isDataLoad ? (
                <MiddleLoader />
              ) : (
                <div className="list_all_prd">
                  <div className="row">
                    {chapterList.length > 0 ? (
                      chapterList.map(function (value, index) {
                        return (
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12"
                            key={index}
                          >
                            <div className="chapter_info_inner">
                              <div
                                className="Course_slider_info"
                                style={{
                                  backgroundImage: `url(${value.image})`,
                                }}
                              >
                                <span>Approved</span>
                              </div>
                              <div className="chapter_content_info">
                                <h4>{value.title}</h4>
                                <p>{value.short_description}</p>
                              </div>
                              <div className="chapter_date_info">
                                <p> Apply Date : 20/02/2023 </p>
                                <button className="view_remark">
                                  View Remark
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <RecordNotFound Height={"60vh"} />
                    )}
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
                </div>
              )}
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 cha_div_order_two">
            <div className="student_details_right">
              <h2>Student Info</h2>

              <div className="Progress-inner-box ">
                <div className="student_info_top">
                  <div className="student_info_inner">
                    <div className="div_bg_main">
                      <div className="student_inner_info">
                        <div className="pro-img-chat">
                          <img src={studentRequestData.image} alt="" />
                        </div>
                        <div className="pro-img-contert">
                          <p>{studentRequestData.user_name}</p>
                          <p>{studentRequestData.email}</p>
                        </div>
                      </div>
                      <div className="progress-view-btn">
                        <button className="progress-view" onClick={ShowModal}>
                          Send Progress Report
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="progress-select-sub ">
                  <h2>Select Subject</h2>
                  <div className="input_chat all_chapter_select ">
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => setCategoryId(e.target.value)}
                    >
                      <option value="" selected disabled hidden>
                        select an option
                      </option>

                      {categoryData.length > 0 &&
                        categoryData.map((value, i) => {
                          return (
                            <option key={i} value={value.id}>
                              {value.title}{" "}
                            </option>
                          );
                        })}
                    </Form.Select>
                  </div>
                </div>

                <div className="progress_tab_number">
                  <div className="chart_inner">
                    <div className="div_count_new">
                      <Doughnut data={data} />
                    </div>
                    <div className="div--new-count">
                      <div className="div_inner_count">
                        <p>{progressPercent}%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="progress_radio">
                  <div className="input_select_div">
                    <div className="btn_radio_one">
                      <input
                        type="radio"
                        id="Parents"
                        name="Type"
                        value="Parents"
                      />
                        <label htmlFor="Parents">Completed</label>
                    </div>
                    <div className="btn_radio_one">
                      <input
                        type="radio"
                        id="Teacher"
                        name="Type"
                        value="Teacher"
                        className="remaining_circle"
                      />
                        <label htmlFor="Teacher">Remaining</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SendProgressReport
        ModalOpen={ProgressModal}
        ModalClose={CloseModal}
        categoryData={categoryData}
        studentId={id}
      />
    </>
  );
};

export default StudentChapter;
