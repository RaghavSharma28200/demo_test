import React from "react";
import {
  SideBar,
  StudentChapter,
  StudentDashboard,
  StudentsRequest,
} from "../components";
import { useState } from "react";
import LoadingOverlay from "react-loading-overlay";
import Loader from "../components/Loader";

const StudentRequest = () => {
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
                <StudentDashboard />
                <StudentsRequest setLoading = {setLoading} />
              </div>
            </div>
          </div>
        </div>
      </LoadingOverlay>
    </>
  );
};

export default StudentRequest;
