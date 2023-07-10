import React from "react";
import { SideBar } from "../components";
import { images } from "../actions/customFn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPaperPlane } from "@fortawesome/fontawesome-free-solid";

const Chat = () => {
  return (
    <>
      <div className="chat_main All--chat padding--all">
        <div className="Side--bar-left">
          <SideBar />
        </div>
        <div className="Page--info-right">
          <div className="page-chat-heigh">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="chat_pro_boxbg">
                  <div className="chat-profie-box">
                    <div className="chat-pro-inner">
                      <div className="pro-img-chat">
                        <img src={images["us-1.png"]} alt="" />
                      </div>
                      <div className="pro-img-contert">
                        <p>Garrett M. Brownlee</p>
                        <p>garrettm.brownlee@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="chat-listing">
                    <h2>Chat With Teacher</h2>
                    <div className="input_chat">
                      <FontAwesomeIcon icon={faSearch} />{" "}
                      <input type="text" placeholder="Search" />
                    </div>

                    <div className="chat-user-on-list">
                      <div className="on-user-main">
                        <div className="user-on-pro">
                          <img src={images["us-3.png"]} alt="" />
                        </div>
                        <div className="user-on-info">
                          <div className="pro-img-contert">
                            <p>Marion B. Walker</p>
                            <p>Lorem Ipsum is simply dummy text...</p>
                          </div>
                        </div>
                        <div className="time-on">
                          <span>2 : 50 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                <div className="chat-info-box">
                  <div className="user-info-box">
                    <img src={images["us-3.png"]} alt="" />
                    <p>Marion B. Walker</p>
                  </div>

                  <div className="chat-main-box">
                    <div className="chat-mess-box">
                      <img src={images["us-3.png"]} alt="" />
                      <p>Hello Garrett</p>
                      <span>2 : 50 PM</span>
                    </div>

                    <div className="chat-mess-box">
                      <img src={images["us-1.png"]} alt="" />
                      <p>Hello Mam</p>
                      <span>2 : 50 PM</span>
                    </div>

                    <div className="chat-mess-box">
                      <img src={images["us-3.png"]} alt="" />
                      <p>
                        Lorem Ipsum Is Simply Dummy Text Of The Printing And
                        Typesetting Industry. Lorem Ipsum Is Simply Dummy Text
                        Of The Printing And Typesetting Industry. Lorem Ipsum Is
                        Simply Dummy Text Of The Printing And Typesetting
                        Industry.
                      </p>
                      <span>2 : 50 PM</span>
                    </div>

                    <div className="chat-mess-box">
                      <img src={images["us-1.png"]} alt="" />
                      <p>
                        Lorem Ipsum Is Simply Dummy Text Of The Printing And
                        Typesetting Industry. Lorem Ipsum Is Simply Dummy Text
                        Of The Printing And Typesetting Industry.
                      </p>
                      <span>2 : 50 PM</span>
                    </div>

                    <div className="chat-mess-box">
                      <img src={images["us-3.png"]} alt="" />
                      <p>
                        Lorem Ipsum Is Simply Dummy Text Of The Printing And
                        Typesetting Industry. Lorem Ipsum Is Simply Dummy Text
                        Of The Printing And Typesetting Industry. Lorem Ipsum Is
                        Simply Dummy Text Of The Printing And Typesetting
                        Industry.
                      </p>
                      <span>2 : 50 PM</span>
                    </div>

                    <div className="chat-mess-box">
                      <img src={images["us-1.png"]} alt="" />
                      <p>
                        Lorem Ipsum Is Simply Dummy Text Of The Printing And
                        Typesetting Industry. Lorem Ipsum Is Simply Dummy Text
                        Of The Printing And Typesetting Industry.
                      </p>
                      <span>2 : 50 PM</span>
                    </div>
                  </div>
                  <div className="chat-box-snd-btn">
                    <textarea type="text" placeholder="Type a message" />
                    <button>
                      {" "}
                      <FontAwesomeIcon icon={faPaperPlane} />{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
