import React, { useEffect, useState } from "react";
import { CopyRight, SideBar, ViewRemark } from "../components";
import { images } from "../actions/customFn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import Form from "react-bootstrap/Form";
import axios from "../axios";
import { PropagateLoader } from "react-spinners";
import LoadingOverlay from "react-loading-overlay";
import Loader from "../components/Loader";
import RecordNotFound from "../components/RecordNotFound";

const History = () => {
  const wishlist_data = [
    {
      image: images["slider-3.png"],
      title: "Lorem Ipsum is simply dummy text",
      content:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: images["slider-3.png"],
      title: "Lorem Ipsum is simply dummy text",
      content:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: images["slider-3.png"],
      title: "Lorem Ipsum is simply dummy text",
      content:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: images["slider-3.png"],
      title: "Lorem Ipsum is simply dummy text",
      content:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: images["slider-3.png"],
      title: "Lorem Ipsum is simply dummy text",
      content:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: images["slider-3.png"],
      title: "Lorem Ipsum is simply dummy text",
      content:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: images["slider-3.png"],
      title: "Lorem Ipsum is simply dummy text",
      content:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: images["slider-3.png"],
      title: "Lorem Ipsum is simply dummy text",
      content:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const [historyData, setHistoryData] = useState({});
  const [RemarkModal, SetRemarkModal] = useState(false);
  const height = "90vh"
  const [remarkText, setRemarkText] = useState({
    remark: "",
    remarkStatus: "",
  });
  const [Loading, setLoading] = useState(true);
  const showRemark = () => {
    SetRemarkModal(true);
  };
  const clsoeRemark = () => {
    SetRemarkModal(false);
  };

  useEffect(() => {
    const url = "/student_history";
    const data = {
      user_id: localStorage.getItem("futr_user_id"),
      password: localStorage.getItem("futr_password"),
      role:localStorage.getItem("futr_role")
    };

    axios
      .post(url, data)
      .then((res) => {
        const { status, data } = res.data;
        if (status) {
          setHistoryData(data);
        }
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((err) => {
        console.log(err.response);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  }, []);

  return (
    <>
      <LoadingOverlay
        active={Loading}
        className="loading-screen"
        spinner={<Loader />}
      >
        <div className="home__pagemian padding--all">
          <div className="container-fluid">
            <div className="Side--bar-left">
              <SideBar />
            </div>
            <div className="Page--info-right">
              {Object.keys(historyData).length > 0 ? (
                <div className="row">
                  <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="wishlist--add-main history--main-page">
                      <div className="wishlist_top_header">
                        <h2 className="all-home-heading">History</h2>
                        <div className="input_chat all_chapter_select">
                          <Form.Select aria-label="Default select example">
                            <option>Filter by list</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="all--wishlist-data">
                        {historyData.chapters.map(function (value, index) {
                          return (
                            <div className="wishlist_inner_list" key={index}>
                              <div className="wishlist_image_pro">
                                <img src={value.image} alt="" />
                                <div className="course_content">
                                  <div className="course_content_left">
                                    <div className="course_btn">
                                      <div className="course_btn_one">
                                        <button>{value.category_name}</button>
                                      </div>
                                      {/* <div className="course_btn_two">
                                    <button>English</button>
                                  </div> */}
                                    </div>
                                    <div className="course_sub_info">
                                      <h2>{value.title}</h2>
                                      <p>{value.short_description}</p>
                                      <p>Apply Date : {value.Apply_date}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="btn_remove">
                                {/* Pending Approve Reject */}
                                <span
                                  className={
                                    value.status === "Pending"
                                      ? "btn_pending"
                                      : value.status === "Approve"
                                      ? "btn_approve"
                                      : value.status === "Reject"
                                      ? "btn_reject"
                                      : ""
                                  }
                                >
                                  {value.status}
                                </span>
                                {value.remark && value.remark !== "" && (
                                  <button
                                    className="btn_remove_inner"
                                    onClick={() => {
                                      showRemark();
                                      setRemarkText({
                                        remark: value.remark,
                                        remarkStatus: value.status,
                                      });
                                    }}
                                  >
                                    View Remark
                                  </button>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="page-history-inner">
                      <h2>Chapter Status</h2>
                      <div className="history_list_content">
                        <div className="list_number">
                          <p>{historyData.total_chapters}</p>
                          <span>Total Video Watching</span>
                        </div>
                        <div className="list_btn">
                          <button>
                            {" "}
                            <img src={images["play_btn_1.png"]} alt="" />
                          </button>
                        </div>
                      </div>
                      <div className="history_list_content">
                        <div className="list_number">
                          <p>{historyData.pending_chapters}</p>
                          <span>Approve Pending</span>
                        </div>
                        <div className="list_btn">
                          <button>
                            {" "}
                            <img src={images["play_btn_2.png"]} alt="" />
                          </button>
                        </div>
                      </div>
                      <div className="history_list_content">
                        <div className="list_number">
                          <p>{historyData.approve_chapters}</p>
                          <span>Teacher Approve</span>
                        </div>
                        <div className="list_btn">
                          <button>
                            {" "}
                            <img src={images["play_btn_3.png"]} alt="" />
                          </button>
                        </div>
                      </div>
                      <div className="history_list_content">
                        <div className="list_number">
                          <p>{historyData.reject_chapters}</p>
                          <span>Reject</span>
                        </div>
                        <div className="list_btn">
                          <button>
                            {" "}
                            <img src={images["play_btn_4.png"]} alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : <RecordNotFound Height={"90vh"}/>}
            </div>
          </div>
        </div>


        <ViewRemark
          ModalOpen={RemarkModal}
          ModalClose={clsoeRemark}
          remarkText={remarkText}
        />
        <CopyRight />
      </LoadingOverlay>
    </>
  );
};

export default History;
