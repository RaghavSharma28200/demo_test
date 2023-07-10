import React from "react";
import Header from "../components/Homepage/Header";
import MiddleSection from "../components/Homepage/MiddleSection";
import AboutUs from "../components/Homepage/AboutUs";
import HowItWorks from "../components/Homepage/HowItWorks";
import LearnMore from "../components/Homepage/LearnMore";
import ProgressReport from "../components/Homepage/ProgressReport";
import DownloadNow from "../components/Homepage/DownloadNow";
import Testimonial from "../components/Homepage/Testimonial";
import Faq from "../components/Homepage/Faq";
import Footer from "../components/Homepage/Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import LoadingOverlay from "react-loading-overlay";
import { useState } from "react";
import Loader from "../components/Loader";

const Homepage = () => {
  const [Loading, setLoading] = useState(true);
  const homeData = useSelector((state) => state.homeData);

  useEffect(() => {
    if (Object.keys(homeData).length > 0) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [homeData]);

  return (
    <div className="home_page_div">
      <LoadingOverlay
        active={Loading}
        spinner={<Loader />}
        className="loading-screen"
      >
        <Header />
        <MiddleSection />
        {/* <AboutUs /> */}
        <HowItWorks />
        <LearnMore />
        <ProgressReport />
        <DownloadNow />
        {/* <Testimonial /> */}
        {/* <Faq /> */}
        <Footer />
      </LoadingOverlay>
    </div>
  );
};

export default Homepage;
