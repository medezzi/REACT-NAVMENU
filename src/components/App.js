import React from "react";
import BtnItem from "./BtnItem.js";
import BtnDropdown from "./BtnDropdown";
function App() {
  return (
    <lu className="NavBar">
      <BtnItem
        Link="https://reactjs.org/tutorial/tutorial.html"
        content="Home"
      />
      <BtnDropdown
        fisrtItem="Services"
        Link1="https://reactjs.org/tutorial/tutorial.html"
        content1="For Entrepreneurs"
        Link2="https://reactjs.org/tutorial/tutorial.html"
        content2="For Students"
        Link3="https://reactjs.org/tutorial/tutorial.html"
        content3="For Hobbyists"
      />
      <BtnItem
        Link="https://reactjs.org/tutorial/tutorial.html"
        content="Contact"
      />
    </lu>
  );
}
export default App;
