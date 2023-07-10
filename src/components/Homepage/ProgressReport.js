import React from "react";
import { images } from "../../actions/customFn";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProgressReport = () => {
  const homeData = useSelector((state) => state.homeData);
  const navigate = useNavigate()

  return (
    <div className="progress-report-container">
      <div className="container">
        <div className="row progress_report_div">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="progress-left">
              {Object.keys(homeData).length > 0 && (
                <>
                  <h1>{homeData.progress_report_heading}</h1>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: homeData.progress_report_description,
                    }}
                  ></p>
                </>
              )}

              <div className="progress_report_btn  ">
                <button className="get_start_btn"  onClick={()=>navigate("/login")}>Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="progress-right">
              {Object.keys(homeData).length > 0 && (
                <img alt="" src={homeData.parents_image} />
              )}
              {/* <img alt="" src={images["progress-report-img.png"]} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressReport;
