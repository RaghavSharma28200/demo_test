import React from "react";
import { images } from "../../actions/customFn";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const StudentDashboard = () => {
  const navigate = useNavigate();
  const profileData = useSelector((state) => state.profileData);
  return (
    <div className="top-dashboard-box">
      <button onClick={() => navigate(-1)}>
        {" "}
        <svg
          class="backward_arrow_img"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="11.38"
          viewBox="0 0 14 11.38"
        >
          <path
            id="__TEMP__SVG__"
            d="M2.388,6.512,7.066,2.419a.744.744,0,0,1,1.147-.06v2.76h.2a7.349,7.349,0,0,1,7.7,7.411c0,1.488-.682.946-.967.427A7.557,7.557,0,0,0,8.38,8.834H8.213v2.7a.828.828,0,0,1-1.147.06L2.387,7.822A.927.927,0,0,1,2.388,6.512Z"
            transform="translate(-2.116 -2.116)"
            fill="#fff"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
      <NavLink to={"/my-profile"}>
        <div className="chat-pro-inner">
          <div className="pro-img-chat">
            <img src={profileData.image} alt="" />
          </div>
          <div className="pro-img-contert">
            <p>{profileData.username}</p>
            <p>{profileData.email}</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default StudentDashboard;
