import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ProgressBar from "react-bootstrap/ProgressBar";
import axios from "../../axios";
import { notifyDanger, notifySuccess } from "../../actions/customFn";

const SendProgressReport = (props) => {
  const now = 70;
  const { categoryData, studentId, ModalClose } = props;
  const [categeryId, setCategoryId] = useState("");
  const [remarktext, setRemarkText] = useState("");

  const [subjectPercent, setSubjectPercent] = useState("");

  const errors = {};

  const [formerr, setFormErr] = useState({});

  const validation = () => {
    if (remarktext.length === 0) {
      errors.remark_err = "Please Provide Remark";
    }
    setFormErr(errors);
  };

  useEffect(() => {
    if (categeryId !== "") {
      const url = "/get_subject_percent";
      const data = {
        user_id: localStorage.getItem("futr_user_id"),
        password: localStorage.getItem("futr_password"),
        role: localStorage.getItem("futr_role"),
        student_id: studentId,
        category_id: categeryId,
      };

      axios
        .post(url, data)
        .then((res) => {
          const { status, report } = res.data;
          if (status) {
            setSubjectPercent(report);
          } else {
            setSubjectPercent(0);
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, [categeryId]);

  const handleRemarkSend = () => {
    validation();

    if (Object.keys(errors).length === 0) {
      const url = "/send_progress_report";
      const data = {
        user_id: localStorage.getItem("futr_user_id"),
        password: localStorage.getItem("futr_password"),
        role: localStorage.getItem("futr_role"),
        student_id: studentId,
        category_id: categeryId,
        remark: remarktext,
      };

      axios
        .post(url, data)
        .then((res) => {
          const { message, status } = res.data;
          if (status) {
            notifySuccess(message);
            ModalClose();
            setRemarkText("")
          } else {
            notifyDanger(message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <Modal
        className="progress_modal_main"
        show={props.ModalOpen}
        onHide={props.ModalClose}
      >
        <div className="modal_pro_header">
          <h2>Progress Report</h2>
          <button className="moadl_closebtn" onClick={props.ModalClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                id="fi-rr-cross-small"
                d="M21.335,6.079h0a1.271,1.271,0,0,0-1.8,0l-5.83,5.83-5.83-5.83a1.271,1.271,0,0,0-1.8,0h0a1.271,1.271,0,0,0,0,1.8l5.83,5.83-5.83,5.83a1.271,1.271,0,0,0,0,1.8h0a1.271,1.271,0,0,0,1.8,0l5.83-5.83,5.83,5.83a1.271,1.271,0,0,0,1.8,0h0a1.271,1.271,0,0,0,0-1.8l-5.83-5.83,5.83-5.83A1.271,1.271,0,0,0,21.335,6.079Z"
                transform="translate(-5.707 -5.707)"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
        <div className="modal_pro_mid">
          <p className="text_small">Select Subject</p>
          <div className="input_chat all_chapter_select">
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setCategoryId(e.target.value)}
            >
              <option value="" selected disabled hidden>
                select an option
              </option>

              {categoryData.length > 0 &&
                categoryData.map((value, i) => {
                  return (
                    <option key={i} value={value.id}>
                      {value.title}{" "}
                    </option>
                  );
                })}
            </Form.Select>
          </div>

          <div className="progress_bar">
            <ProgressBar now={subjectPercent} label={`${subjectPercent}%`} />
          </div>

          <div className="prgress_remark_box">
            <p className="text_small">Remark</p>
            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              cols="50"
              placeholder="Enter text"
              value={remarktext}
              onChange={(e) => setRemarkText(e.target.value)}
              className={formerr.remark_err ? "form_invalid_br" : ""}
            />
            {formerr.remark_err && (
              <div className="signup_form_error">{formerr.remark_err}</div>
            )}
            <div className="send_btn_pro">
              <button className="pro_send_btn" onClick={handleRemarkSend}>
                {" "}
                Send{" "}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SendProgressReport;
