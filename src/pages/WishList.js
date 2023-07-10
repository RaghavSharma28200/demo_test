import React, { useEffect, useState } from "react";
import { CopyRight, SideBar } from "../components";
import { images, notifyDanger } from "../actions/customFn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";

import axios from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { asyncPostWishList } from "../actions/wishListAction";
import LoadingOverlay from "react-loading-overlay";
import Loader from "../components/Loader";
import RecordNotFound from "../components/RecordNotFound";
import ReactPaginate from "react-paginate";
import MiddleLoader from "../components/MiddleLoader";

const WishList = () => {
  const [wishListData, setWishListData] = useState([]);
  const profileData = useSelector((state) => state.profileData);
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const [searchInp, setSearchInp] = useState("");
  const [Loading, setLoading] = useState(true);
  const [totalPage, setTotalPage] = useState(1);

  const [offSet, setOffset] = useState(0);
  const [isDataLoad, setDataLoad] = useState(false);
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

  const getWishList = () => {
    setDataLoad(true);
    const url = "/get_wishlist";
    const data = {
      user_id: localStorage.getItem("futr_user_id"),
      password: localStorage.getItem("futr_password"),
      role: localStorage.getItem("futr_role"),
      offset: offSet,
    };

    if (searchInp !== "") {
      data.search = searchInp;
    }
    console.log(data);

    axios
      .post(url, data)
      .then((res) => {
        const { data, message, status, page_count } = res.data;
        if (status) {
          setWishListData(data);
          setTotalPage(page_count);
        } else {
          setTotalPage(0);
          setWishListData([]);
        }
        setTimeout(() => {
          setDataLoad(false);
        }, 500);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((err) => {
        console.log(err.response);
        setTimeout(() => {
          setLoading(false);
        }, 500);
        setTimeout(() => {
          setDataLoad(false);
        }, 500);
      });
  };

  useEffect(() => {
    getWishList();
  }, [isUpdate, offSet]);

  const handleRemoveFromWishList = (id) => {
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
      dispatch(asyncPostWishList(data, setIsUpdate));
    } else {
      notifyDanger("Please Login First");
    }
  };

  const onSearchInput = (e) => {
    e.preventDefault();
    if (searchInp !== "") {
      getWishList(searchInp);
    }
  };

  const handlePageChange = (e) => {
    setOffset(e.selected);
  };

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
              <div className="wishlist--add-main wishlist-all-new">
                <div className="wishlist_top_header">
                  <h2 className="all-home-heading">Favorites Chapters</h2>
                  <form onSubmit={onSearchInput}>
                    <div className="input_chat wishlist_input">
                      {/* <FontAwesomeIcon icon={faSearch} />{" "} */}
                      <input
                        type="text"
                        placeholder="Search"
                        value={searchInp}
                        onChange={(e) => setSearchInp(e.target.value)}
                      />
                      <button className="btn_search">
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="wishlistsearch_icon"
                        />{" "}
                      </button>
                    </div>
                  </form>
                </div>
                {isDataLoad ? (
                  <div className="fav_middle_loader">
                    <MiddleLoader />
                  </div>
                ) : (
                  <>
                    <div className="all--wishlist-data">
                      {wishListData.length > 0 ? (
                        wishListData.map(function (value, index) {
                          return (
                            <div className="wishlist_inner_list" key={index}>
                              <div className="wishlist_image_pro">
                                <img src={value.thumbnail_image} alt="" />
                                <div className="course_content">
                                  <div className="course_content_left">
                                    <div className="course_btn">
                                      <div className="course_btn_one">
                                        <button>{value.category}</button>
                                      </div>
                                      {/* <div className="course_btn_two">
                                <button>English</button>
                              </div> */}
                                    </div>
                                    <div className="course_sub_info">
                                      <h2>{value.title}</h2>
                                      <p>{value.short_description}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="btn_remove">
                                <button
                                  className="btn_remove_inner"
                                  onClick={() =>
                                    handleRemoveFromWishList(value.id)
                                  }
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <RecordNotFound Height={"80vh"} />
                      )}
                    </div>
                    {totalPage > 1 && (
                      <div className="pagination_all_main">
                        <ReactPaginate
                          pageCount={totalPage}
                          pageRange={2}
                          marginPagesDisplayed={2}
                          forcePage={offSet}
                          onPageChange={handlePageChange}
                          containerClassName={"pagination"}
                          previousLinkClassName={"page-item"}
                          breakClassName={"page-item"}
                          nextLinkClassName={"page-item"}
                          pageClassName={"page-item"}
                          disabledClassNae={"disabled"}
                          activeClassName={"active"}
                          nextLabel={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="7.172"
                              height="14"
                              viewBox="0 0 7.172 14"
                            >
                              <path
                                id="fi-rr-angle-small-down"
                                d="M13.707,6.879a1,1,0,0,1-1.414,0L7.707,2.293a1.021,1.021,0,0,0-1.414,0L1.707,6.879A1,1,0,1,1,.293,5.465L4.878.879a3,3,0,0,1,4.243,0l4.586,4.586a1,1,0,0,1,0,1.414Z"
                                transform="translate(7.172) rotate(90)"
                                fill="#fff"
                              />
                            </svg>
                          }
                          previousLabel={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="7.172"
                              height="14"
                              viewBox="0 0 7.172 14"
                            >
                              <path
                                id="fi-rr-angle-small-down"
                                d="M18.707,8.207a1,1,0,0,0-1.414,0l-4.586,4.586a1.021,1.021,0,0,1-1.414,0L6.707,8.207A1,1,0,1,0,5.293,9.621l4.585,4.586a3,3,0,0,0,4.243,0l4.586-4.586a1,1,0,0,0,0-1.414Z"
                                transform="translate(15.086 -5) rotate(90)"
                                fill="#fff"
                              />
                            </svg>
                          }
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <CopyRight />
      </LoadingOverlay>
    </>
  );
};

export default WishList;
