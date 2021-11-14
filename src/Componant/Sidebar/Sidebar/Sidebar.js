import React from "react";
import { Link } from "react-router-dom";

import { BrowserRouter as Router } from "react-router-dom";



import "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import SidebarCard from "../SidebarCard/SidebarCard";

//import "./Sidebar.css";

const Sidebar = (props) => {
  const openSlideMenu = () => {
    document.getElementById("side-menu").style.width = "250px";
  };
  const closeSlideMenu = () => {
    document.getElementById("side-menu").style.width = "0";
  };

  return (
    <>
      <svg
        onClick={openSlideMenu}
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="align-justify"
        class="svg-inline--fa fa-align-justify svg-line"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M416 416H31.1C14.33 416 0 430.3 0 448S14.33 480 31.1 480h384C433.7 480 448 465.7 448 448S433.7 416 416 416zM416 288H31.1C14.33 288 0 302.3 0 320S14.33 352 31.1 352h384C433.7 352 448 337.7 448 320S433.7 288 416 288zM416 160H31.1C14.33 160 0 174.3 0 192S14.33 224 31.1 224h384C433.7 224 448 209.7 448 192S433.7 160 416 160zM416 32H31.1C14.33 32 0 46.33 0 64S14.33 96 31.1 96h384C433.7 96 448 81.67 448 64S433.7 32 416 32z"
        ></path>
      </svg>

      <div id="side-menu" className="side-nav">
        <a href="#" className="btn-close" onClick={closeSlideMenu}></a>
        {/* {link} */}

        <Router>
          <a href="#">Uses</a>
          <a href="#">Orders</a>
          <a href="#">Products</a>
          <Link to={"/tablecate"}>Category</Link>
        </Router>
      </div>
    </>
  );
};

export default Sidebar;
