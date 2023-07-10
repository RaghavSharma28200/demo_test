import React, { useContext, useEffect, useState } from "react";
import { Dashboard, SideBar } from "../components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Form from "react-bootstrap/Form";
import { images } from "../actions/customFn";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetCategoryData } from "../actions/categoryAction";
import { AppContext } from "../App";
import { useParams } from "react-router-dom";
import axios from "../axios";
import LoadingOverlay from "react-loading-overlay";
import Loader from "../components/Loader";

ChartJS.register(ArcElement, Tooltip, Legend);
const ProgressReport = () => {
  const now = 70;

  const { id } = useParams();

  const [categoryId, setCategoryId] = useState("");
  const [categoryName, setCategoryName] = useState("");

  const categoryData = useSelector((state) => state.categoryData.allCategory);
  const [childDetail, setChildDetail] = useState({});
  const [teacherDetail, setTeacherDetail] = useState({});
  const dispatch = useDispatch();
  const [subjectPercent, setSubjectPercent] = useState("");

  // const { setLoading } = useContext(AppContext);

  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(asyncGetCategoryData(setLoading));
  }, []);

  useEffect(() => {
    if (categoryId !== "") {
      const url = "/get_subject_percent";
      const data = {
        user_id: localStorage.getItem("futr_user_id"),
        password: localStorage.getItem("futr_password"),
        role: localStorage.getItem("futr_role"),
        student_id: id,
        category_id: categoryId,
      };

      axios
        .post(url, data)
        .then((res) => {
          const { status, report } = res.data;
          if (status) {
            setSubjectPercent(report);
          } else {
            setSubjectPercent(0);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.response);
          setLoading(false);
        });
    }
  }, [categoryId]);

  useEffect(() => {
    const url = "/get_child_detail";
    const data = {
      user_id: localStorage.getItem("futr_user_id"),
      password: localStorage.getItem("futr_password"),
      role: localStorage.getItem("futr_role"),
      student_id: id,
    };

    axios
      .post(url, data)
      .then((res) => {
        const { status, data } = res.data;
        if (status) {
          setChildDetail(data);
          setTeacherDetail(data.teachers);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <LoadingOverlay
        active={Loading}
        spinner={<Loader />}
        className="loading-screen"
      >
        <div className="home__pagemian padding--all">
          <div className="container-fluid">
            <div className="Side--bar-left">
              <SideBar />
            </div>
            <div className="Page--info-right">
              <div className="pages--total-student">
                <Dashboard heading="Parents Dashboard" />
              </div>
              <div className="progress_report_main">
                <div className="row">
                  <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h2 className="div_upper_head">Progress Report</h2>
                    <div className="Progress-inner-box ">
                      <div className="progress-select-sub">
                        <h2>Select Subject</h2>
                        <div className="input_chat all_chapter_select">
                          <Form.Select
                            value={categoryId}
                            onChange={(e) => {
                              setCategoryId(e.target.value);
                              setCategoryName(
                                e.target.options[e.target.selectedIndex].text
                              );
                            }}
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

                      {/* <h2 className="div_upper_head">Teacher Info</h2> */}
                      <div className="progress_report_student">
                        <div className="top-dashboard-boxpro">
                          <div className="teacher_pro_details">
                            <div className="chat-pro-inner">
                              <div className="pro-img-chat">
                                <img src={childDetail.image} alt="" />
                              </div>
                              <div className="pro-img-contert">
                                <p>{childDetail.user_name}</p>
                                <p>{childDetail.class} standard</p>
                              </div>
                            </div>
                          </div>
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
                                {childDetail.mobile_number}
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
                                {childDetail.email}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="progress_student_inner progress_modal_main ">
                      <div className="chat-pro-inner">
                        <div className="pro-img-chat">
                          <img src={teacherDetail.image} alt="" />
                        </div>
                        <div className="pro-img-contert">
                          <p>{teacherDetail.user_name}</p>
                          <p>{teacherDetail.email}</p>
                          <p>{teacherDetail.mobile_number}</p>
                        </div>
                      </div>
                      {categoryName !== "" && (
                        <div className="final_report_content">
                          <h2>{categoryName}</h2>
                          <div className="progress_bar">
                            <ProgressBar
                              now={subjectPercent}
                              label={`${subjectPercent}%`}
                            />
                          </div>

                          {childDetail.remark !== "" && (
                            <>
                              <p>Remark</p>
                              <span>{childDetail.remark}</span>
                            </>
                          )}
                          {childDetail.date !== "" && (
                            <p className="text_small">
                              Apply Date : {childDetail.date}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LoadingOverlay>
    </>
  );
};

export default ProgressReport;
