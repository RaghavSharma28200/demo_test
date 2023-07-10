import React, { useContext, useEffect, useState } from "react";
import { images } from "../../actions/customFn";
import { NavLink } from "react-router-dom";

import axios from "../../axios";
import { AppContext } from "../../App";

const DashboardList = (props) => {
  const [teacherDashBoardList, setTeacherDashBoardList] = useState([]);
  const { setLoading } = useContext(AppContext);

  useEffect(() => {
    setLoading(true);
    const url = "/teacher_dashboard";
    const data = {
      user_id: localStorage.getItem("futr_user_id"),
      password: localStorage.getItem("futr_password"),
      role: localStorage.getItem("futr_role"),
    };

    axios
      .post(url, data)
      .then((res) => {
        const { status, total_student, total_chapters, total_request } =
          res.data;
        if (status) {
          setTeacherDashBoardList([
            total_student,
            total_chapters,
            total_request,
          ]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.resposne);
        setLoading(false);
      });
  }, []);
  return (
    <div className="dashbord-list-main">
      <div className="row">
        {teacherDashBoardList.length > 0 &&
          props.data.map(function (value, index) {
            return (
              <div
                className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"
                key={index}
              >
                <NavLink to={value.path}>
                  <div className="list_dash_box">
                    <div
                      className="dash_bg_main"
                      // style={{ backgroundImage: `url(${["dash_1.png"]})` }}
                      style={{ backgroundImage: `url(${value.image})` }}
                    >
                      <div className="list_count_no">
                        <h4>{value.title}</h4>
                        <p>{teacherDashBoardList[index]}</p>
                      </div>
                      <div className="list_pro_icon">
                        <img src={value.user} alt="" />
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DashboardList;
