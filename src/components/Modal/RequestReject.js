import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "../../axios";
import { notifyDanger, notifySuccess } from "../../actions/customFn";
const RequestReject = (props) => {
  const { updateStudentRequest, rejectModalData , ModalClose, setIsUpdate} = props;
  const [inptext, setInpText] = useState("");

  const handleClick = () => {
    const url = "/student_request_update";
    const data = { ...updateStudentRequest };
    if (inptext !== "") {
      data.remark = inptext;
    }
    

    axios
      .post(url, data)
      .then((res) => {
        const { status, message } = res.data;
        if (status) {
          notifySuccess(message);
          setInpText("")
          ModalClose()
          setIsUpdate(p=>!p)
        } else {
          notifyDanger(message);
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <div>
      <Modal
        className="progress_modal_main"
        show={props.ModalOpen}
        onHide={props.ModalClose}
      >
        <div className="modal_pro_header">
          <h2>{rejectModalData.title}</h2>
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
          <div className="prgress_remark_box">
            <p className="text_small">{rejectModalData.subheading}</p>
            <textarea
              value={inptext}
              onChange={(e) => setInpText(e.target.value)}
              id="w3review"
              name="w3review"
              rows="4"
              cols="50"
              placeholder="Enter text"
            />
            <div className="send_btn_pro">
              <button className="pro_send_btn" onClick={() => handleClick()}>
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

export default RequestReject;
