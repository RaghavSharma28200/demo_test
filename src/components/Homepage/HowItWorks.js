import React from "react";
import { images } from "../../actions/customFn";
import { useSelector } from "react-redux";
import { useState } from "react";

const HowItWorks = () => {
  const homeData = useSelector((state) => state.homeData);

  const Card_Item = [
    {
      icon: images["computer-icon.png"],
      title: homeData.how_it_works_heading_1,
      description: homeData.work_description_1,
    },
    {
      icon: images["calender-icon.png"],
      title: homeData.how_it_works_heading_2,
      description: homeData.work_description_2,
    },
    {
      icon: images["certificate-icon.png"],
      title: homeData.how_it_works_heading_3,
      description: homeData.work_description_3,
    },
  ];

  return (
    <div className="home_howitworks_container">
      <div className="container">
        <div className="howitworks_content">
          <h1>How it Works</h1>

          <div
            className="howitworks_bg"
            style={{ backgroundImage: `url(${images["how-it-working.png"]})` }}
          ></div>

          <div className="howitworks_card_container row">
            {Card_Item.map((data, i) => {
              return (
                <div
                  key={i}
                  className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12"
                >
                  <div className="howiteorks_item">
                    <div className="howitworks_card_icon">
                      <button className="howitworks_card_btn">
                        <img alt="" src={data.icon} />
                      </button>
                    </div>
                    <div className="howitworks_content admin_profile_container">
                      <h2>{data.title}</h2>
                      <p
                      // className="howitworks_desc "
                        dangerouslySetInnerHTML={{ __html: data.description }}
                      ></p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
