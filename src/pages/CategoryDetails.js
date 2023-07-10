import React from "react";
import { AllCourse, CopyRight, SideBar } from "../components";
import CategoryList from "../components/Category/CategoryList";
import { useState } from "react";
import LoadingOverlay from "react-loading-overlay";
import Loader from "../components/Loader";

const CategoryDetails = () => {
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
              <div className="">
                <CategoryList heading="Our Course" setLoading={setLoading} />
              </div>
              {/* <div className="AllCourse--bg-two">
              <AllCourse heading="Tranding Course" />
            </div> */}
            </div>
          </div>
        </div>
      </LoadingOverlay>
    </>
  );
};

export default CategoryDetails;
