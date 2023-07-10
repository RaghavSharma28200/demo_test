import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import vid from "../../assets/video/mixkit-young-teacher-teaching-complicated-equations-4623-medium.mp4";
import vidbg from "../../assets/images/videobg.png";
import { images, notifyDanger, notifySuccess } from "../../actions/customFn";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncPostWishList } from "../../actions/wishListAction";

import axios from "../../axios";
import { useNavigate } from "react-router-dom";
const VideoChapter = ({ chapterDeatils, chapterListArr, setIsChange }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const [chapterVid, setChapterVid] = useState({});

  const profileData = useSelector((state) => state.profileData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  useEffect(() => {
    if (chapterDeatils) {
      setChapterVid(chapterDeatils);
      console.log(chapterDeatils);
    }
  }, [chapterDeatils]);

  const handleWishlistClick = (id) => {
    if (
      localStorage.getItem("futr_password") &&
      localStorage.getItem("futr_user_id")
    ) {
      const data = {
        user_id: localStorage.getItem("futr_user_id"),
        password: localStorage.getItem("futr_password"),
        role: localStorage.getItem("futr_role"),
        user_type: profileData.user_type,
        chapter_id: id,
      };
      dispatch(asyncPostWishList(data, setIsChange));
    } else {
      notifyDanger("Please Login First");
    }
  };

  const handleCompleChapter = (id) => {
    const url = "/complete_chapter";
    const data = {
      chapter_id: id,
      user_id: localStorage.getItem("futr_user_id"),
      password: localStorage.getItem("futr_password"),
      role: localStorage.getItem("futr_role"),
    };
    axios
      .post(url, data)
      .then((res) => {
        const { message, status } = res.data;
        console.log(res.data);
        if (status) {
          notifySuccess(message);
          setIsChange((p) => !p);
        } else {
          notifyDanger(message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePageChange = (slug) => {
    navigate(`/chapter-description/${slug}`, { replace: true });
  };

  const video_list = [
    {
      image: images["slider-2.png"],
      title: "Lorem Ipsum is simply dummy text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },

    {
      image: images["slider-2.png"],
      title: "Lorem Ipsum is simply dummy text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      image: images["slider-2.png"],
      title: "Lorem Ipsum is simply dummy text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      image: images["slider-2.png"],
      title: "Lorem Ipsum is simply dummy text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      image: images["slider-2.png"],
      title: "Lorem Ipsum is simply dummy text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      image: images["slider-2.png"],
      title: "Lorem Ipsum is simply dummy text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      image: images["slider-2.png"],
      title: "Lorem Ipsum is simply dummy text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      image: images["slider-2.png"],
      title: "Lorem Ipsum is simply dummy text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      image: images["slider-2.png"],
      title: "Lorem Ipsum is simply dummy text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      image: images["slider-2.png"],
      title: "Lorem Ipsum is simply dummy text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      image: images["slider-2.png"],
      title: "Lorem Ipsum is simply dummy text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      image: images["slider-2.png"],
      title: "Lorem Ipsum is simply dummy text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      image: images["slider-2.png"],
      title: "Lorem Ipsum is simply dummy text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      image: images["slider-2.png"],
      title: "Lorem Ipsum is simply dummy text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      image: images["slider-2.png"],
      title: "Lorem Ipsum is simply dummy text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      image: images["slider-2.png"],
      title: "Lorem Ipsum is simply dummy text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ];
  return (
    <div className="video_chapter_main">
      {Object.keys(chapterVid).length > 0 && (
        <div className="row">
          <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 ">
            <div className="vide0--player">
              <ReactPlayer
                url={chapterVid.video}
                className="react-player"
                playing={true}
                controls={true}
                loop={true}
                width="100%"
                height="500px"
                muted={true}
                playIcon={
                  <button>
                    {" "}
                    <img src={images["Blog_bg_main.png"]} alt="" />
                  </button>
                }
                light={chapterVid.image}
                playsinline={true}
                onReady={onLoadedData}
              />
            </div>
            <div className="video_info_chapter">
              <div className="info--top-chapter">
                <div className="course_btn">
                  <div className="course_btn_one">
                    <button>{chapterVid.category}</button>
                  </div>
                  {/* <div className="course_btn_two">
                  <button>English</button>
                </div> */}
                </div>
                <div className="Complete--Chapter">
                  {chapterVid.is_complete_mark ? (
                    <div className="btn_addded_tolist ">Completed</div>
                  ) : (
                    <button
                      className={"Complete--Chapter-btn"}
                      onClick={() => handleCompleChapter(chapterVid.id)}
                    >
                      {" "}
                      Complete Chapter{" "}
                    </button>
                  )}
                </div>
              </div>
              <div className="course_content">
                <div className="course_content_left">
                  <div className="course_sub_info">
                    <h2>{chapterVid.title}</h2>
                    <p>{chapterVid.short_description}</p>
                  </div>
                </div>
                <div className="course_content_right">
                  <div className="video-user-info">
                    <img src={images["profile_ion.png"]} alt="" />
                    <span>Scott A. Foster</span>
                  </div>
                  <div className="video-addToFeb">
                    <button
                      className={
                        chapterVid.is_wishlist
                          ? "btn-add-to-fab btn_addded_tolist"
                          : "btn-add-to-fab "
                      }
                      onClick={() => handleWishlistClick(chapterVid.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          id="Group_2688"
                          data-name="Group 2688"
                          transform="translate(-52 -280)"
                        >
                          <g
                            id="Rectangle_520"
                            data-name="Rectangle 520"
                            transform="translate(52 280)"
                            fill="none"
                            stroke="#707070"
                            stroke-width="1"
                            opacity="0"
                          >
                            <rect width="24" height="24" stroke="none" />
                            <rect
                              x="0.5"
                              y="0.5"
                              width="23"
                              height="23"
                              fill="none"
                            />
                          </g>
                          <path
                            id="fi-rr-heart"
                            d="M14.577,1.917A5.331,5.331,0,0,0,10,4.666,5.331,5.331,0,0,0,5.414,1.917,5.664,5.664,0,0,0,0,7.79c0,3.788,3.987,7.924,7.33,10.729a4.143,4.143,0,0,0,5.331,0c3.344-2.8,7.33-6.941,7.33-10.729a5.664,5.664,0,0,0-5.414-5.873ZM11.59,17.244a2.476,2.476,0,0,1-3.19,0C4.12,13.653,1.665,10.208,1.665,7.79A4,4,0,0,1,5.414,3.583,4,4,0,0,1,9.162,7.79a.833.833,0,0,0,1.666,0,4,4,0,0,1,3.748-4.207A4,4,0,0,1,18.325,7.79c0,2.418-2.455,5.863-6.735,9.451Z"
                            transform="translate(54.005 281.297)"
                          />
                        </g>
                      </svg>
                      {chapterVid.is_wishlist ? "" : "Add To Favorites"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-btm_main"></div>
          </div>

          <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 ">
            <div className="video_chapter_list">
              <h2>Chapter List</h2>
              <div className="video_list_div">
                {chapterListArr.map(function (value, index) {
                  return (
                    <div
                      className="video-list-info"
                      onClick={() => handlePageChange(value.slug)}
                    >
                      <div className="video-cha-thm">
                        <img src={value.image} alt="" />
                      </div>
                      <div className="video-cha-detilas">
                        <h4>{value.title}</h4>
                        <p>{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="border-btm_main"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoChapter;
