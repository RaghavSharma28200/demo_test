import React, { useContext, useEffect, useState } from "react";
import { images } from "../../actions/customFn";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Form from "react-bootstrap/Form";
import SendProgressReport from "../Modal/SendProgressReport";
import RequestReject from "../Modal/RequestReject";
import { useDispatch, useSelector } from "react-redux";
import { asyncStudentRequestDetail } from "../../actions/studentRequestAction";
import { useParams } from "react-router-dom";
import { asyncGetCategoryData } from "../../actions/categoryAction";
import { AppContext } from "../../App";
import RecordNotFound from "../RecordNotFound";
import ReactPaginate from "react-paginate";
import MiddleLoader from "../MiddleLoader";

ChartJS.register(ArcElement, Tooltip, Legend);
const StudentsRequest = ({ setLoading }) => {
  const chapter_list = [
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
      image: images["ss-2.png"],
      title: "Lorem Ipsum is simply dummy text",
      content: "Lorem Ipsum is simply dummy text of",
    },
    {
      image: images["ss-1.png"],
      title: "Lorem Ipsum is simply dummy text",
      content: "Lorem Ipsum is simply dummy text of",
    },
  ];

  // Modal
  const [RejectModal, SetRejectModal] = useState(false);
  const [chapterList, setChapterList] = useState([]);
  const [progressPercent, setProgressPercent] = useState("");
  const [rejectModalData, setRejectModalData] = useState({
    title: "",
    subheading: "",
  });
  const [categoryId, setCategoryId] = useState("");
  const studentRequestData = useSelector((state) => state.studentRequestData);
  const categoryData = useSelector((state) => state.categoryData.allCategory);

  // const { setLoading } = useContext(AppContext);

  const [updateStudentRequest, setUpdateStudentRequest] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);
  const [isDataLoad, setDataLoad] = useState(false);

  const [totalPage, setTotalPage] = useState(1);

  const [offSet, setOffset] = useState(0);

  const { id } = useParams();

  const dispatch = useDispatch();
  const ShowRejectModal = () => {
    SetRejectModal(true);
  };
  const CloseRejectModal = () => {
    SetRejectModal(false);
  };

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
      status: "Pending",
      student_id: id,
      offset: offSet,
    };
    if (categoryId !== "") {
      data.category_id = categoryId;
    }
    dispatch(
      asyncStudentRequestDetail(data, setLoading, setTotalPage, setDataLoad)
    );
  }, [categoryId, isUpdate, offSet]);

  const handleStatusClick = (status, chapterid) => {
    ShowRejectModal();
    setUpdateStudentRequest({
      user_id: localStorage.getItem("futr_user_id"),
      password: localStorage.getItem("futr_password"),
      role: localStorage.getItem("futr_role"),
      student_id: id,
      chapter_id: chapterid,
      status: status,
    });
    if (status === "Approve") {
      setRejectModalData({
        title: "Request Approved",
        subheading: "Approved Reason",
      });
    }
    if (status === "Reject") {
      setRejectModalData({
        title: "Request Reject",
        subheading: "Rejected Reason",
      });
    }
  };

  const handlePageChange = (e) => {
    setOffset(e.selected);
  };

  return (
    <>
      <div className="studer_all_request">
        <div className="student_chapter_list">
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12 div_order_one">
              <div className="list_chapter_main">
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
                              className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12"
                              key={index}
                            >
                              <div className="chapter_info_inner">
                                <div
                                  className="Course_slider_info"
                                  style={{
                                    backgroundImage: `url(${value.image})`,
                                  }}
                                >
                                  <span className="span_pending">Pending</span>
                                </div>
                                <div className="chapter_content_info">
                                  <h4>{value.title}</h4>
                                  <p>{value.short_description}</p>
                                </div>
                                <div className="chapter_date_info btn_last_prd">
                                  <button
                                    className="btn_approve"
                                    onClick={() => {
                                      handleStatusClick(
                                        "Approve",
                                        value.chapter_id
                                      );
                                    }}
                                  >
                                    Approve
                                  </button>
                                  <button
                                    className="btn_reject"
                                    onClick={() => {
                                      handleStatusClick(
                                        "Reject",
                                        value.chapter_id
                                      );
                                    }}
                                  >
                                    {" "}
                                    Reject{" "}
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <RecordNotFound Height={"80vh"} />
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
            <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 div_order_two">
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
                            <p>{studentRequestData.class} standard</p>
                          </div>
                        </div>
                        <div className="progress-view-btn">
                          <div className="teacher_contact_info">
                            <ul>
                              <li>
                                {" "}
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="Group_475"
                                    data-name="Group 475"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                  >
                                    <g
                                      id="Rectangle_115"
                                      data-name="Rectangle 115"
                                      fill="none"
                                      stroke="#707070"
                                      stroke-width="1"
                                      opacity="0"
                                    >
                                      <rect
                                        width="24"
                                        height="24"
                                        stroke="none"
                                      />
                                      <rect
                                        x="0.5"
                                        y="0.5"
                                        width="23"
                                        height="23"
                                        fill="none"
                                      />
                                    </g>
                                    <path
                                      id="phone"
                                      d="M19.288,21.368h-.117C5.571,20.586,3.641,9.112,3.371,5.61a2.076,2.076,0,0,1,1.91-2.235H9.094a1.384,1.384,0,0,1,1.288.872l1.051,2.589a1.384,1.384,0,0,1-.3,1.495L9.655,9.818a6.484,6.484,0,0,0,5.245,5.26l1.5-1.488a1.384,1.384,0,0,1,1.5-.284l2.609,1.045a1.384,1.384,0,0,1,.852,1.287v3.654A2.076,2.076,0,0,1,19.288,21.368ZM5.447,4.759a.692.692,0,0,0-.692.692v.055c.319,4.1,2.36,13.786,14.492,14.478a.692.692,0,0,0,.734-.65v-3.7l-2.609-1.045-1.986,1.972-.332-.042c-6.021-.754-6.837-6.775-6.837-6.837l-.042-.332,1.965-1.986L9.1,4.759Z"
                                      transform="translate(-0.364 -0.372)"
                                      fill="#fff"
                                    />
                                  </svg>
                                </span>{" "}
                                {studentRequestData.mobile_number}
                              </li>
                              <li>
                                {" "}
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="Group_483"
                                    data-name="Group 483"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                  >
                                    <g
                                      id="Rectangle_112"
                                      data-name="Rectangle 112"
                                      fill="none"
                                      stroke="#707070"
                                      stroke-width="1"
                                      opacity="0"
                                    >
                                      <rect
                                        width="24"
                                        height="24"
                                        stroke="none"
                                      />
                                      <rect
                                        x="0.5"
                                        y="0.5"
                                        width="23"
                                        height="23"
                                        fill="none"
                                      />
                                    </g>
                                    <path
                                      id="email"
                                      d="M18.964,6.75H3.536A1.286,1.286,0,0,0,2.25,8.036V18.321a1.286,1.286,0,0,0,1.286,1.286H18.964a1.286,1.286,0,0,0,1.286-1.286V8.036A1.286,1.286,0,0,0,18.964,6.75ZM17.55,8.036l-6.3,4.358L4.95,8.036ZM3.536,18.321v-9.7l7.348,5.085a.643.643,0,0,0,.733,0l7.348-5.085v9.7Z"
                                      transform="translate(0.75 -1.179)"
                                      fill="#fff"
                                    />
                                  </svg>
                                </span>
                                {studentRequestData.email}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="progress-select-sub">
                    <h2>Select Subject</h2>
                    <div className="input_chat all_chapter_select">
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
      </div>

      <RequestReject
        ModalOpen={RejectModal}
        ModalClose={CloseRejectModal}
        updateStudentRequest={updateStudentRequest}
        rejectModalData={rejectModalData}
        setIsUpdate={setIsUpdate}
      />
    </>
  );
};

export default StudentsRequest;
