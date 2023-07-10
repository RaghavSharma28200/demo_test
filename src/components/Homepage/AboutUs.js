import React from "react";
import { images } from "../../actions/customFn";
import { useSelector } from "react-redux";

const AboutUs = () => {
  const homeData = useSelector((state) => state.homeData);

  return (
    <div className="home_aboutus_container" id="about_us">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 home_order">
            <div>
              <img alt="" src={images["aboutusimg.png"]} />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="about_us_right">
              {Object.keys(homeData).length > 0 && (
                <>
                  <h1>{homeData.about_heading}</h1>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: homeData.about_description,
                    }}
                  ></p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
