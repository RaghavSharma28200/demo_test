import React from "react";
import { images } from "../../actions/customFn";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Dashboard = (props) => {
  const profileData = useSelector((state) => state.profileData);
  return (
    <div className="top-dashboard-box">
      <h2>{props.heading}</h2>
      <div className="teacher_pro_details">
        <div className="chat-pro-inner">
          <div className="pro-img-chat">
            <img src={profileData.image} alt="" />
          </div>
          <NavLink to={"/my-profile"}>
            <div className="pro-img-contert">
              <p>{profileData.username}</p>
              <p>{profileData.email}</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
