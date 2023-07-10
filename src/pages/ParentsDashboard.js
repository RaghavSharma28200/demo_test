import React from "react";
import {
  Dashboard,
  DashboardList,
  ProgressDashboard,
  SideBar,
} from "../components";
import { images } from "../actions/customFn";
import { useState } from "react";
import LoadingOverlay from "react-loading-overlay";
import Loader from "../components/Loader";

const ParentsDashboard = () => {
  const list_dash = [
    {
      image: images["dash_1.png"],
      title: "Total Chapter",
      conut: "30",
      user: images["chapter.png"],
    },
    {
      image: images["dash_2.png"],
      title: "Complete Chapter",
      conut: "12",
      user: images["chapter.png"],
    },
    {
      image: images["dash_3.png"],
      title: "Remaining Chapter",
      conut: "18",
      user: images["chapter.png"],
    },
  ];

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
                <Dashboard heading="Parents Dashboard" />
                <ProgressDashboard setLoading={setLoading} />
              </div>
            </div>
          </div>
        </div>
      </LoadingOverlay>
    </>
  );
};

export default ParentsDashboard;
