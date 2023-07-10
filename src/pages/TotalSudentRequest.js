import React from "react";
import { Dashboard, DashboardList, SideBar } from "../components";
import { list_dash } from "../actions/customFn";
import DashboardStudentTable from "../components/TotalStudent/DashboardStudentTable";
import { useState } from "react";
import LoadingOverlay from "react-loading-overlay";
import Loader from "../components/Loader";

const TotalSudentRequest = () => {
  const [Loading, setLoading] = useState(true);

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
                <Dashboard heading="Teacher Dashboard" />
                <DashboardList data={list_dash} />
                <DashboardStudentTable setLoading={setLoading} />
              </div>
            </div>
          </div>
        </div>
      </LoadingOverlay>
    </>
  );
};

export default TotalSudentRequest;
