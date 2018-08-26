import React from "react";

const BtnItem = props => {
  return (
    <div>
      <a ClassName="dropbtn" href="{props.Link}">
        {props.content}{" "}
      </a>
    </div>
  );
};

export default BtnItem;
