import React from "react";
import { Modal } from "react-bootstrap";
const ViewRemark = (props) => {
  const { remarkText } = props;
  return (
    <div>
      <Modal
        className="progress_modal_main remark_modal"
        show={props.ModalOpen}
        onHide={props.ModalClose}
      >
        <button className="close_modal" onClick={props.ModalClose}>
          <svg
            viewport="0 0 12 12"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1"
              y1="11"
              x2="11"
              y2="1"
              stroke="#fff"
              stroke-width="2"
            ></line>
            <line
              x1="1"
              y1="1"
              x2="11"
              y2="11"
              stroke="#fff"
              stroke-width="2"
            ></line>
          </svg>
        </button>
        <div className="modal_pro_header">
          <h2>{remarkText.remarkStatus}</h2>
        </div>
        <div className="modal_pro_mid">
          <div className="prgress_remark_box">
            <p>{remarkText.remark}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ViewRemark;
