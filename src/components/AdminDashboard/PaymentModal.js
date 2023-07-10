import { faXing } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Modal } from "react-bootstrap";

const PaymentModal = ({ isOpen, closeModal, paymentDetails }) => {
  return (
    <Modal show={isOpen} onHide={closeModal} className="payment_modal">
      <Modal.Body>
        <div>
          <div className="payement_modal_heading">
            <h2>Payment Details</h2>
            <button className="payment_closebtn" onClick={closeModal}>
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
            <div className="payment_modal_hr"></div>
          </div>
          <div className="payment_modal_list">
            <ul className="admin_profile_container">
              <li>
                <button className="payment_check_iconbtn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.5"
                    height="19.5"
                    viewBox="0 0 19.5 19.5"
                  >
                    <g
                      id="Group_2790"
                      data-name="Group 2790"
                      transform="translate(-164.25 -309.25)"
                    >
                      <circle
                        id="Ellipse_146"
                        data-name="Ellipse 146"
                        cx="9"
                        cy="9"
                        r="9"
                        transform="translate(165 310)"
                        fill="none"
                        stroke="#8f78fb"
                        stroke-width="1.5"
                      />
                      <path
                        id="fi-rr-check"
                        d="M10.058,4.266,3.84,10.331a.458.458,0,0,1-.638,0L.8,7.983a.458.458,0,0,0-.638,0h0a.431.431,0,0,0,0,.622l2.405,2.346a1.378,1.378,0,0,0,1.912,0L10.7,4.887a.431.431,0,0,0,0-.621h0a.458.458,0,0,0-.638,0Z"
                        transform="translate(168.572 311.263)"
                        fill="#8f78fb"
                        stroke="#8f78fb"
                        stroke-width="1"
                      />
                    </g>
                  </svg>
                </button>
                <span>Lorem Ipsum is simply dummy text of the printing</span>
              </li>
              <li>
                <button className="payment_check_iconbtn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.5"
                    height="19.5"
                    viewBox="0 0 19.5 19.5"
                  >
                    <g
                      id="Group_2790"
                      data-name="Group 2790"
                      transform="translate(-164.25 -309.25)"
                    >
                      <circle
                        id="Ellipse_146"
                        data-name="Ellipse 146"
                        cx="9"
                        cy="9"
                        r="9"
                        transform="translate(165 310)"
                        fill="none"
                        stroke="#8f78fb"
                        stroke-width="1.5"
                      />
                      <path
                        id="fi-rr-check"
                        d="M10.058,4.266,3.84,10.331a.458.458,0,0,1-.638,0L.8,7.983a.458.458,0,0,0-.638,0h0a.431.431,0,0,0,0,.622l2.405,2.346a1.378,1.378,0,0,0,1.912,0L10.7,4.887a.431.431,0,0,0,0-.621h0a.458.458,0,0,0-.638,0Z"
                        transform="translate(168.572 311.263)"
                        fill="#8f78fb"
                        stroke="#8f78fb"
                        stroke-width="1"
                      />
                    </g>
                  </svg>
                </button>
                <span>Lorem Ipsum is simply dummy text</span>
              </li>
              <li>
                <button className="payment_check_iconbtn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.5"
                    height="19.5"
                    viewBox="0 0 19.5 19.5"
                  >
                    <g
                      id="Group_2790"
                      data-name="Group 2790"
                      transform="translate(-164.25 -309.25)"
                    >
                      <circle
                        id="Ellipse_146"
                        data-name="Ellipse 146"
                        cx="9"
                        cy="9"
                        r="9"
                        transform="translate(165 310)"
                        fill="none"
                        stroke="#8f78fb"
                        stroke-width="1.5"
                      />
                      <path
                        id="fi-rr-check"
                        d="M10.058,4.266,3.84,10.331a.458.458,0,0,1-.638,0L.8,7.983a.458.458,0,0,0-.638,0h0a.431.431,0,0,0,0,.622l2.405,2.346a1.378,1.378,0,0,0,1.912,0L10.7,4.887a.431.431,0,0,0,0-.621h0a.458.458,0,0,0-.638,0Z"
                        transform="translate(168.572 311.263)"
                        fill="#8f78fb"
                        stroke="#8f78fb"
                        stroke-width="1"
                      />
                    </g>
                  </svg>
                </button>
                <span>Lorem Ipsum is simply dummy text of the printing</span>
              </li>
              <li>
                <button className="payment_check_iconbtn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.5"
                    height="19.5"
                    viewBox="0 0 19.5 19.5"
                  >
                    <g
                      id="Group_2790"
                      data-name="Group 2790"
                      transform="translate(-164.25 -309.25)"
                    >
                      <circle
                        id="Ellipse_146"
                        data-name="Ellipse 146"
                        cx="9"
                        cy="9"
                        r="9"
                        transform="translate(165 310)"
                        fill="none"
                        stroke="#8f78fb"
                        stroke-width="1.5"
                      />
                      <path
                        id="fi-rr-check"
                        d="M10.058,4.266,3.84,10.331a.458.458,0,0,1-.638,0L.8,7.983a.458.458,0,0,0-.638,0h0a.431.431,0,0,0,0,.622l2.405,2.346a1.378,1.378,0,0,0,1.912,0L10.7,4.887a.431.431,0,0,0,0-.621h0a.458.458,0,0,0-.638,0Z"
                        transform="translate(168.572 311.263)"
                        fill="#8f78fb"
                        stroke="#8f78fb"
                        stroke-width="1"
                      />
                    </g>
                  </svg>
                </button>
                <span>Lorem Ipsum is simply dummy text</span>
              </li>
              <li>
                <button className="payment_check_iconbtn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.5"
                    height="19.5"
                    viewBox="0 0 19.5 19.5"
                  >
                    <g
                      id="Group_2790"
                      data-name="Group 2790"
                      transform="translate(-164.25 -309.25)"
                    >
                      <circle
                        id="Ellipse_146"
                        data-name="Ellipse 146"
                        cx="9"
                        cy="9"
                        r="9"
                        transform="translate(165 310)"
                        fill="none"
                        stroke="#8f78fb"
                        stroke-width="1.5"
                      />
                      <path
                        id="fi-rr-check"
                        d="M10.058,4.266,3.84,10.331a.458.458,0,0,1-.638,0L.8,7.983a.458.458,0,0,0-.638,0h0a.431.431,0,0,0,0,.622l2.405,2.346a1.378,1.378,0,0,0,1.912,0L10.7,4.887a.431.431,0,0,0,0-.621h0a.458.458,0,0,0-.638,0Z"
                        transform="translate(168.572 311.263)"
                        fill="#8f78fb"
                        stroke="#8f78fb"
                        stroke-width="1"
                      />
                    </g>
                  </svg>
                </button>
                <span>Lorem Ipsum is simply dummy text of the printing</span>
              </li>
              <li>
                <button className="payment_check_iconbtn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.5"
                    height="19.5"
                    viewBox="0 0 19.5 19.5"
                  >
                    <g
                      id="Group_2790"
                      data-name="Group 2790"
                      transform="translate(-164.25 -309.25)"
                    >
                      <circle
                        id="Ellipse_146"
                        data-name="Ellipse 146"
                        cx="9"
                        cy="9"
                        r="9"
                        transform="translate(165 310)"
                        fill="none"
                        stroke="#8f78fb"
                        stroke-width="1.5"
                      />
                      <path
                        id="fi-rr-check"
                        d="M10.058,4.266,3.84,10.331a.458.458,0,0,1-.638,0L.8,7.983a.458.458,0,0,0-.638,0h0a.431.431,0,0,0,0,.622l2.405,2.346a1.378,1.378,0,0,0,1.912,0L10.7,4.887a.431.431,0,0,0,0-.621h0a.458.458,0,0,0-.638,0Z"
                        transform="translate(168.572 311.263)"
                        fill="#8f78fb"
                        stroke="#8f78fb"
                        stroke-width="1"
                      />
                    </g>
                  </svg>
                </button>
                <span>Lorem Ipsum is simply dummy text</span>
              </li>
            </ul>
          </div>
          <div className="school_profile_hr"></div>
          <div className="payment_detail_desc row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <h2 className="payment-detail_heading">Name</h2>
              <h3>{paymentDetails.username}</h3>
              <p>{paymentDetails.email}</p>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
              <h2 className="payment-detail_heading">Payment Method</h2>
              <p>{paymentDetails.payment_method}</p>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
              <h2 className="payment-detail_heading">Plan Type</h2>
              <p>{paymentDetails.plan_title}</p>
              <p>{paymentDetails.plan_type}</p>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
              <h2 className="payment-detail_heading">Pay Date</h2>
              <p>{paymentDetails.pay_date}</p>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
              <h2 className="payment-detail_heading">Exp Date</h2>
              <p>{paymentDetails.exp_date}</p>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-4 col-5 payment_history_price">
              <h2 className="payment-detail_heading">Amount</h2>
              <p>
                <span>$</span>{paymentDetails.amount}
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PaymentModal;
