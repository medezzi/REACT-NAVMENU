import React from "react";
const BtnDropdown = props => {
  return (
    <div class="dropdown">
      <button class="dropbtn">{props.fisrtItem}</button>
      <div class="dropdown-content">
        <a href={props.Link1}>{props.content1}</a>
        <a href={props.Link2}>{props.content2}</a>
        <a href={props.Link3}>{props.content3}</a>
      </div>
    </div>
  );
};
export default BtnDropdown;
