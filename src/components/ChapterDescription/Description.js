import React from "react";
import { images } from "../../actions/customFn";

const Description = ({chapterDeatils}) => {
  return (
    <div className="description--main">
      <div className="description-top-heading">
        <img src={images["description_icon.png"]} alt="" />
        <span>Description</span>
      </div>
      <div className="description--content-inner" dangerouslySetInnerHTML={{__html : chapterDeatils.description}}>
        {/* <h2>Chapter 1</h2>
        <p>Lorem Ipsum is simply dummy text of the printing</p>
        <div className="content_small_text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="description-content_list">
          <ul>
            <li>Lorem Ipsum is simply dummy text of the printing</li>
            <li>Lorem Ipsum is simply dummy text of the printing</li>
            <li>Lorem Ipsum is simply dummy text of the printing</li>
            <li>Lorem Ipsum is simply dummy text of the printing</li>
            <li>Lorem Ipsum is simply dummy text of the printing</li>
          </ul>
        </div> */}
      </div>
      <div className="border-btm_main"></div>
    </div>
  );
};

export default Description;
