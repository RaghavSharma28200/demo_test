import React, { useEffect, useState } from "react";
import { images, notifyDanger } from "../../actions/customFn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { NavLink } from "react-router-dom";
import axios from "../../axios";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import RecordNotFound from "../RecordNotFound";
import LoadingOverlay from "react-loading-overlay";
import Loader from "../Loader";
import MiddleLoader from "../MiddleLoader";

const AdminProfile = () => {
  const [studentList, setStudentList] = useState([]);
  const [Loading, setLoading] = useState(true);

  const [isDataLoad, setDataLoad] = useState(false);

  const [searchInp, setSearchInp] = useState({
    studentsearch: "",
    sectionsearch: "",
    classsearch: "",
  });

  const [totalPage, setTotalPage] = useState(1);

  const profileData = useSelector((state) => state.profileData);

  const [offSet, setOffset] = useState(0);

  const [isClear, setIsClear] = useState(false);

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchInp({ ...searchInp, [name]: value });
  };

  const getStudentList = () => {
    setDataLoad(true);
    const url = "/school_student_list";
    const data = {
      user_id: localStorage.getItem("futr_user_id"),
      password: localStorage.getItem("futr_password"),
      role: localStorage.getItem("futr_role"),
      offset: offSet,
    };

    if (searchInp.studentsearch !== "") {
      data.student_name = searchInp.studentsearch;
    }
    if (searchInp.classsearch !== "") {
      data.class = searchInp.classsearch;
    }
    if (searchInp.sectionsearch !== "") {
      data.section = searchInp.sectionsearch;
    }

    axios
      .post(url, data)
      .then((res) => {
        const { data, status, message, page_count } = res.data;
        if (status) {
          setStudentList(data);
          setTotalPage(page_count);
        } else {
          setStudentList([]);
          setTotalPage(0);
        }
        setLoading(false);
        setTimeout(() => {
          setDataLoad(false);
        }, 500);
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false);
        setTimeout(() => {
          setDataLoad(false);
        }, 500);
      });
  };

  useEffect(() => {
    getStudentList();
  }, [offSet, isClear]);

  const onSearchInput = (e) => {
    e.preventDefault();
    getStudentList();
  };

  const handlePageChange = (e) => {
    setOffset(e.selected);
    // console.log(e)
    // console.log(e.selected , "sass");
  };
  // #848490;
  const handleClearFields = () => {
    setSearchInp({
      studentsearch: "",
      sectionsearch: "",
      classsearch: "",
    });
    setIsClear((p) => !p);
  };

  return (
    <>
      <LoadingOverlay
        active={Loading}
        spinner={<Loader />}
        className="loading-screen"
      >
        <div className="admin_profile_container">
          <div className="row">
            {/* col-12 col-xl-3 col-lg-4 col-md-6 col-sm-12  */}
            <div className=" col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="admin_dash_header">
                <p>School Profile</p>

                <img src={profileData.image} alt="" />
                <h2>{profileData.username}</h2>
                <p>{profileData.tag_line}</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="admin_dash_planexp">
                <img src={images["planexpbg.png"]} alt="" />
                <p>Plan Ending Date</p>
                <h2>{profileData.plan_end_date}</h2>
              </div>
            </div>
          </div>
          <div className="admin_dash_fields">
            <form onSubmit={onSearchInput}>
              <div className="row">
                <p className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  Filter Student List
                </p>

                <div className="admin_dash_input_all col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
                  <FontAwesomeIcon icon={faSearch} />{" "}
                  <input
                    placeholder="Search student name "
                    className="search_inp"
                    value={searchInp.studentsearch}
                    onChange={(e) => handleSearchChange(e)}
                    name="studentsearch"
                  />
                </div>

                <div className="admin_dash_input_all col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                  <input
                    placeholder="Search Class"
                    className="search_inp"
                    value={searchInp.classsearch}
                    onChange={(e) => handleSearchChange(e)}
                    name="classsearch"
                  />
                </div>
                <div className="admin_dash_input_all col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                  <input
                    placeholder="Search Section"
                    className="search_inp"
                    value={searchInp.sectionsearch}
                    onChange={(e) => handleSearchChange(e)}
                    name="sectionsearch"
                  />
                </div>
                <div className=" student_searchbtn col-xl-2 col-lg-12 col-md-12 col-sm-12 col-12">
                  <button type="submit">search</button>
                  <button
                    type="reset"
                    onClick={handleClearFields}
                    className="clear_btn"
                  >
                    clear
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="admin_dash_student_lst">
            <div className="stdnt_lst_heading">
              <h2>Student List</h2>
              <NavLink to={"/add-student"} className=" btn-add-new-std">
                Add New Student
              </NavLink>
            </div>

            {isDataLoad ? (
              <MiddleLoader />
            ) : (
              <>
                <div className="row ">
                  {studentList.length > 0 ? (
                    studentList.map((stds, i) => {
                      return (
                        <div
                          className="  col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12"
                          key={i}
                        >
                          <div className="admin_student_list">
                            <div className="row">
                              <div className="col-3">
                                <img alt="" src={stds.image} />
                              </div>
                              <div className="col-9">
                                <h5>{stds.username}</h5>
                                <p>Student Id: {stds.student_id}</p>
                                <div className="admin_stulist_btnwrapper">
                                  <button>Class: {stds.class}</button>
                                  <button>
                                    Class Section: {stds.class_section}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <RecordNotFound Height={"50vh"} />
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
      </LoadingOverlay>
    </>
  );
};

export default AdminProfile;
