import React, { useEffect, useState } from "react";
import {
  AllCourse,
  CopyRight,
  Description,
  SideBar,
  VideoChapter,
} from "../components";
import ImagesList from "../components/ChapterDescription/ImagesList";
import { useParams } from "react-router-dom";
import axios from "../axios";
import { notifyDanger } from "../actions/customFn";
import LoadingOverlay from "react-loading-overlay";
import Loader from "../components/Loader";
const ChapterDescription = () => {
  const { id } = useParams();

  const [chapterDeatils, setChapterDetai] = useState({});
  const [chapterListArr, setChapterListArr] = useState([]);
  const [isChange, setIsChange] = useState(false);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const url = "/chapter_list";
    const data = {
      slug: id,
      user_id: localStorage.getItem("futr_user_id"),
      password: localStorage.getItem("futr_password"),
      role: localStorage.getItem("futr_role"),
    };
    axios
      .post(url, data)
      .then((res) => {
        const { chapter_detail, message, status, chapter_list } = res.data;
        if (status) {
          setChapterDetai(chapter_detail);
          setChapterListArr(chapter_list);
          setTimeout(() => {
            setLoading(false);
          }, 500);
        } else {
          notifyDanger(message);
          setTimeout(() => {
            setLoading(false);
          }, 500);
        }
      })
      .catch((err) => {
        console.log(err.response);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  }, [isChange, id]);
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
              <VideoChapter
                chapterDeatils={chapterDeatils}
                chapterListArr={chapterListArr}
                setIsChange={setIsChange}
              />
              <Description chapterDeatils={chapterDeatils} />
              <ImagesList />
              <div className="AllCourse--bg-one">
                <AllCourse heading="Our Course" />
              </div>
              <div className="AllCourse--bg-two">
                <AllCourse heading="Tranding Course" />
              </div>
            </div>
          </div>
        </div>
        <CopyRight />
      </LoadingOverlay>
    </>
  );
};

export default ChapterDescription;
