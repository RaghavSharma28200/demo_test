import React, { useEffect, useState } from "react";
import { images } from "../../actions/customFn";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/fontawesome-free-solid";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "../../axios";
import { NavLink } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProgressDashboard = ({ setLoading }) => {
  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: [40, 10],
        backgroundColor: [" rgba(143, 120, 251, 1)", "rgba(9, 9, 33, 1)"],
        // borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const child_info = [
    {
      image: images["us-1.png"],
      name: "Garrett M. Brownlee",
      mail: "first standard",
    },
    {
      image: images["us-1.png"],
      name: "Garrett M. Brownlee",
      mail: "first standard",
    },
    {
      image: images["us-1.png"],
      name: "Garrett M. Brownlee",
      mail: "first standard",
    },
    {
      image: images["us-1.png"],
      name: "Garrett M. Brownlee",
      mail: "first standard",
    },
    {
      image: images["us-1.png"],
      name: "Garrett M. Brownlee",
      mail: "first standard",
    },
    {
      image: images["us-1.png"],
      name: "Garrett M. Brownlee",
      mail: "first standard",
    },
    {
      image: images["us-1.png"],
      name: "Garrett M. Brownlee",
      mail: "first standard",
    },
  ];

  const [studentList, setStudentList] = useState([]);
  const [teacherInfo, setTeacherInfo] = useState([]);

  useEffect(() => {
    const url = "/parent_dashboard";
    const data = {
      user_id: localStorage.getItem("futr_user_id"),
      password: localStorage.getItem("futr_password"),
      role: localStorage.getItem("futr_role"),
    };
    axios
      .post(url, data)
      .then((res) => {
        const { data, status } = res.data;

        if (status) {
          setStudentList(data.students);
          setTeacherInfo(data.teachers);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="Progress-Dashboard-main">
      <div className="">
        <div className=" progress_one_div  mb-3">
          <h2 className="div_upper_head">Child Info</h2>
          <div className="Progress-inner-box prog-box-one">
            {studentList.map(function (value, index) {
              return (
                <div className="top-dashboard-boxpro row" key={index}>
                  <div className="teacher_pro_details col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 ">
                    <div className="chat-pro-inner">
                      <div className="pro-img-chat">
                        <img src={value.image} alt="" />
                      </div>
                      <div className="pro-img-contert">
                        <p>{value.user_name}</p>
                        <p>{value.class} standard</p>
                      </div>
                    </div>
                  </div>
                  <div className="row progress_chaptr_detail  col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="col-4">
                      <p>Total Chapter</p>
                      <h2>{value.total_chapter}</h2>
                    </div>
                    <div className="col-4">
                      <p>Complete</p>
                      <h2>{value.complete_chapter}</h2>
                    </div>
                    <div className="col-4">
                      <p>Remaining</p>
                      <h2>{value.remainig_chapter}</h2>
                    </div>
                  </div>
                  <div className="progress-view-btn col-xl-2 col-lg-12 col-md-12 col-sm-12 col-12">
                    <NavLink
                      to={`/progress-report/${value.student_id}`}
                      className="btn_details_table progress-view"
                    >
                      View Report
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 progress_two_div   mb-3">
          <h2 className="div_upper_head">Progress Report</h2>
          <div className="Progress-inner-box ">
            <div className="progress-select-sub">
              <h2>Select Subject</h2>
              <div className="input_chat all_chapter_select">
                <Form.Select aria-label="Default select example">
                  <option>Maths</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
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
                    <p>70%</p>
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
                  />
                    <label htmlFor="Teacher">Remaining</label>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 progress_three_div   mb-3">
          <h2 className="div_upper_head">Teacher Info</h2>
          <div className="Progress-inner-box teacher_info ">
            <div className="top-dashboard-boxpro">
              <div className="teacher_pro_details">
                <div className="chat-pro-inner">
                  <div className="pro-img-chat">
                    <img src={images["us-1.png"]} alt="" />
                  </div>
                  <div className="pro-img-contert">
                    <p>Marion B. Walker</p>
                    <p>first standard teacher</p>
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
                          <rect width="24" height="24" stroke="none" />
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
                    999 888 7777
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
                          <rect width="24" height="24" stroke="none" />
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
                    marionb.walker@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProgressDashboard;
