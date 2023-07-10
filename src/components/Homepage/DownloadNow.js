import React from "react";
import { images } from "../../actions/customFn";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const DownloadNow = () => {
  const homeData = useSelector((state) => state.homeData);

  console.log(homeData);

  return (
    <div className="download_mow_container">
      <div className="container ">
        <div className="download_now_div">
          <div className="row">
            <div className=" col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 download-now-content">
              {Object.keys(homeData).length > 0 && (
                <>
                  {/* <h1>Download our app right now!</h1> */}
                  <h1>{homeData.our_app_heading}</h1>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: homeData.our_app_description,
                    }}
                  ></p>

                  <div className="downloadnow_btn_wrapper">
                    <NavLink
                      className="download_now_btn"
                      to={homeData.google_play_link}
                      style={{
                        backgroundImage: `url(${images["android-download.png"]})`,
                      }}
                    ></NavLink>
                    <NavLink
                      className="download_now_btn"
                      to={homeData.app_store_link}
                      style={{
                        backgroundImage: `url(${images["apple-download.png"]})`,
                      }}
                    ></NavLink>
                  </div>
                </>
              )}
            </div>

            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="download_now_right">
                {Object.keys(homeData).length > 0 && (
                  <img alt="" src={homeData.our_app_image} />
                )}
                {/* <img alt="" src={images["download-now-img.png"]} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadNow;
