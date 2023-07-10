import React, { createContext, useContext, useState } from "react";
import { images } from "../actions/customFn";
import {
  AllCourse,
  Category,
  CopyRight,
  CourseInfo,
  SideBar,
  VideoBanner,
} from "../components";
import LoadingOverlay from "react-loading-overlay";
import Loader from "../components/Loader";
import { AppContext } from "../App";

const Home = () => {
  const [Loading , setLoading] = useState(true)

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
              <CourseInfo />
              <VideoBanner />
              <Category setLoading={setLoading} />
              <div className="AllCourse--bg-one">
                <AllCourse heading="Our Course" />
              </div>
              <div className="AllCourse--bg-two">
                <AllCourse heading="Trending Course" />
              </div>
            </div>
          </div>
        </div>
        <CopyRight />
      </LoadingOverlay>
    </>
  );
};

export default Home;
