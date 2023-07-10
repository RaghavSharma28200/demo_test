import React from "react";
import { images } from "../../actions/customFn";
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/fontawesome-free-solid";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const FAQ_ARR = [
  {
    question: "How long this site live?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Can I Download recorded classes from site?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Can I login anywhere from any source?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Can I Download recorded classes from site?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Can I login anywhere from any source?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const Faq = () => {
  const homeData = useSelector((state) => state.homeData);

  const [faqArr, setFaqArr] = useState([]);

  useEffect(() => {
    if (Object.keys(homeData).length > 0) {
      setFaqArr(homeData.faq);
    }
  }, [homeData]);

  return (
    <div className="faq_container" id="faq">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 home_order">
            <div className="faq_left">
              {Object.keys(homeData).length > 0 && (
                <img alt="" src={homeData.faq_image} />
              )}
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="faq_left">
              {Object.keys(homeData).length > 0 && (
                <h1>{homeData.faq_heading}</h1>
              )}
              {faqArr.length > 0 &&
                faqArr.map(function (value, index) {
                  return (
                    <Accordion defaultActiveKey="0" key={index}>
                      <Accordion.Item eventKey={index}>
                        <Accordion.Header>
                          {value.faq_title}
                          <span className="icon_open icon_faq">
                            {" "}
                            <FontAwesomeIcon icon={faPlus} />{" "}
                          </span>
                          <span className="icon_close icon_faq">
                            {" "}
                            <FontAwesomeIcon icon={faMinus} />{" "}
                          </span>
                        </Accordion.Header>

                        <Accordion.Body>
                          <div className="acc_inner_body">
                            <div className="acc_main_content">
                              <p>{value.faq_description}</p>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
