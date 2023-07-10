import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import Table from "react-bootstrap/Table";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import axios from "../../axios";
import RecordNotFound from "../RecordNotFound";
import ReactPaginate from "react-paginate";
import MiddleLoader from "../MiddleLoader";

const DashboardStudentTable = ({ setLoading }) => {
  const tabel_data = [
    {
      sno: "01",
      name: "Garrett M. Brownlee",
      PendingChapter: "02",
    },
    {
      sno: "02",
      name: "Garrett M. Brownlee",
      PendingChapter: "02",
    },
    {
      sno: "03",
      name: "Garrett M. Brownlee",
      PendingChapter: "02",
    },
    {
      sno: "04",
      name: "Garrett M. Brownlee",
      PendingChapter: "02",
    },
    {
      sno: "05",
      name: "Garrett M. Brownlee",
      PendingChapter: "02",
    },
    {
      sno: "06",
      name: "Garrett M. Brownlee",
      PendingChapter: "02",
    },
    {
      sno: "07",
      name: "Garrett M. Brownlee",
      PendingChapter: "02",
    },
    {
      sno: "08",
      name: "Garrett M. Brownlee",
      PendingChapter: "02",
    },
    {
      sno: "09",
      name: "Garrett M. Brownlee",
      PendingChapter: "02",
    },
    {
      sno: "10",
      name: "Garrett M. Brownlee",
      PendingChapter: "02",
    },
  ];

  const [totalStudentData, setTotalStudentData] = useState([]);

  const [searchInp, setSearchInp] = useState("");

  const [totalPage, setTotalPage] = useState(1);

  const [isDataLoad, setDataLoad] = useState(false);

  const [offSet, setOffset] = useState(0);

  const getStudentRequest = () => {
    setDataLoad(true);
    const url = "/student_request";
    const data = {
      user_id: localStorage.getItem("futr_user_id"),
      password: localStorage.getItem("futr_password"),
      role: localStorage.getItem("futr_role"),
      offset: offSet,
    };

    if (searchInp !== "") {
      data.search = searchInp;
    }
    axios
      .post(url, data)
      .then((res) => {
        const { data, status, page_count } = res.data;
        if (status) {
          setTotalStudentData(data);
          setTotalPage(page_count);
        } else {
          setTotalStudentData([]);
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
    getStudentRequest();
  }, [offSet]);

  const onSearchStudent = (e) => {
    e.preventDefault();
    getStudentRequest();
  };

  const handlePageChange = (e) => {
    setOffset(e.selected);
  };

  return (
    <div className="dashboard_table_main">
      <div className="dashboard_table_top">
        <h2>Student List</h2>
        <div className="input_chat wishlist_input">
          <form onSubmit={onSearchStudent}>
            <input
              type="text"
              placeholder="Search"
              value={searchInp}
              onChange={(e) => setSearchInp(e.target.value)}
            />
            <button className="btn_search">
              {" "}
              <FontAwesomeIcon
                icon={faSearch}
                className="wishlistsearch_icon"
              />
            </button>
          </form>
        </div>
      </div>
      <div className="table_list_inner table-responsive">
        <Table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Student Name</th>
              <th>Pending Chapter</th>
              <th>Details</th>
            </tr>
          </thead>
          {isDataLoad ? (
            <MiddleLoader />
          ) : (
            <tbody className="tbody">
              {totalStudentData.length > 0 ? (
                totalStudentData.map(function (value, index) {
                  return (
                    <>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{value.name}</td>

                        <td>{value.pending_chapter}</td>
                        <td>
                          <NavLink
                            to={`/student-request-check/${value.student_id}`}
                            className="btn_details_table"
                          >
                            Check Request
                          </NavLink>
                        </td>
                      </tr>
                    </>
                  );
                })
              ) : (
                <RecordNotFound Height={"60vh"} />
              )}
            </tbody>
          )}
        </Table>
      </div>
      {!isDataLoad && totalPage > 1 && (
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
    </div>
  );
};

export default DashboardStudentTable;
