import React, { useEffect } from "react";
import AdminSidenav from "../components/AdminDashboard/AdminSidenav";
import AdminProfile from "../components/AdminDashboard/AdminProfile";
import { useLocation, useNavigate } from "react-router-dom";
import Schoolprofile from "../components/AdminDashboard/Schoolprofile";
import PaymentHistory from "../components/AdminDashboard/PaymentHistory";
import AddNewStudent from "../components/AdminDashboard/AddNewStudent";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetProfileData } from "../actions/profileAction";
import { useState } from "react";

const AdminDashboard = () => {
  const { pathname } = useLocation();
  const profileData = useSelector((state) => state.profileData);
  const isLoggedIn = useSelector((state) => state.login);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("futr_role") === "School" &&
      Object.keys(profileData).length > 0 &&
      !profileData.is_plan
    ) {
      // console.log(profileData, "after");
      navigate("/subscription");
    }
  }, [profileData]);

  return (
    <div className="admin_dashboard_container">
      <div className="row">
        <div className="col-xl-2 col-lg-3 col-md-12 col-sm-12 col-12">
          <AdminSidenav />
        </div>
        <div className="col-xl-10 col-lg-9 col-md-12 col-sm-12 col-12">
          {pathname === "/dashboard"  && <AdminProfile />}
          {pathname === "/my-profile" && <Schoolprofile />}
          {pathname === "/change-admin-password" && <Schoolprofile />}
          {pathname === "/payment-history" && <PaymentHistory />}
          {pathname === "/add-student" && <AddNewStudent />}{" "}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
