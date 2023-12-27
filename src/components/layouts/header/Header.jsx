import React, { useContext } from "react";
import { ReactComponent as Logo } from "./../../../assets/sylvalogoui.svg";
import "./header.css";
import { NavLink, useOutletContext } from "react-router-dom";
import { LayoutContext } from "../Layout";
import mercylogo from "./../../../assets/mercyicon.svg";

export const Header = () => {
  const { expRef, skillRef, aboutRef, eduRef, layoutRef } =
    useContext(LayoutContext);
  let isOpen = false;

  const handleToggle = () => {
    console.log(layoutRef.current);
    const wrapper = layoutRef.current;
    // wrapper.className = "menu-open"
    // wrapper.classList.add("menu-open")
    if (isOpen) {
      wrapper.classList.remove("menu-open");
      isOpen = false;
    } else {
      wrapper.classList.add("menu-open");
      isOpen = true;
    }
  };
  return (
    <header>
      <nav id="navigation">
        <div class="nav__column">
          <NavLink className="myLogoLink" to="/">
            <a href="" class="logo">
              {/* <img src="https://natedentondesign.com/_nuxt/img/e45c6bc.svg" /> */}
              <img className="mercyicon" src={mercylogo} />
            </a>
          </NavLink>
        </div>

        <div class="nav__column">
          <button class="toggle-menu" onClick={() => handleToggle()}>
            {/* Menu */}
            <span class="hamburger-holder">
              <span class="hamburger"></span>
            </span>
          </button>

          <div class="menu-container">
            <ul class="list-menu">
              <li class="menu-item">
                <a>
                  {/* About Me<span class="green">.</span> */}
                  <NavLink
                    className="nav-item"
                    onClick={() => {
                      handleToggle();
                      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    About Me
                    {/* <span class="green">.</span> */}
                  </NavLink>
                </a>
              </li>
              <li class="menu-item">
                <a>
                  {/* Skills<span class="green">.</span> */}
                  <NavLink
                    className="nav-item"
                    onClick={() => {
                      handleToggle();
                      skillRef.current?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Skills
                    {/* <span class="green">.</span> */}
                  </NavLink>
                </a>
              </li>
              <li class="menu-item">
                <a>
                  {/* Experience<span class="green">.</span> */}
                  <NavLink
                    className="nav-item"
                    onClick={() => {
                      handleToggle();
                      expRef.current?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Experience
                    {/* <span class="green">.</span> */}
                  </NavLink>
                </a>
              </li>
              <li class="menu-item">
                <a>
                  {/* Experience<span class="green">.</span> */}
                  <NavLink
                    className="nav-item"
                    onClick={() => {
                      handleToggle();
                      eduRef.current?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Education
                    {/* <span class="green">.</span> */}
                  </NavLink>
                </a>
              </li>
              <li class="menu-item">
                <a>
                  <NavLink
                    className="nav-item"
                    to="/blog"
                    style={({ isActive }) => ({
                      color: isActive ? "#45ad7e" : "#000",
                    })}
                    onClick={() => {
                      handleToggle();
                    }}
                  >
                    Blog
                    {/* <span class="green">.</span> */}
                  </NavLink>
                </a>
              </li>
              <li class="menu-item">
                {/* <a href="#">
                  Experience<span class="green">.</span>
                </a> */}
                <a
                  href="https://drive.google.com/u/2/uc?id=1hKCtAU9lxKlOQRxNNpcPNFzmprRfd41R&export=download"
                  target="_blank"
                  class="cv_download"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    // <header>
    //   <NavLink className="myLogoLink" to="/">
    //     {/* <Logo /> */}
    //     <p className="mylogo">QAmercy</p>
    //   </NavLink>

    //   <input type="checkbox" id="check" />
    //   <label for="check" class="icons">
    //     <i class="bx bx-menu" id="menu-icon"></i>
    //     <i class="bx bx-x" id="close-icon"></i>
    //   </label>

    //   <nav class="navbar">
    // <NavLink
    //   className="nav-item"
    //   onClick={()=>{aboutRef.current?.scrollIntoView({behavior:'smooth'})}}
    // >
    //   About Me
    // </NavLink>

    // <NavLink
    //   className="nav-item"
    //   onClick={()=>{skillRef.current?.scrollIntoView({behavior:'smooth'})}}
    // >
    //   Skills
    // </NavLink>

    // <NavLink
    //   className="nav-item"
    //   onClick={()=>{expRef.current?.scrollIntoView({behavior:'smooth'})}}
    // >
    //   Experience
    // </NavLink>

    //     <NavLink
    //       className="nav-item"
    //       onClick={()=>{eduRef.current?.scrollIntoView({behavior:'smooth'})}}
    //     >
    //       Education
    //     </NavLink>
    //     <NavLink
    //       className="nav-item"
    //       to="/blog"
    //       style={({ isActive }) => ({ color: isActive ? "#45ad7e" : "#000" })}
    //     >
    //       Blog
    //     </NavLink>
    //     <a href="https://drive.google.com/u/2/uc?id=1hKCtAU9lxKlOQRxNNpcPNFzmprRfd41R&export=download"
    //     target="_blank"
    //     class="nav-item download" style={{ "--i": 3 }}>
    //       Download CV
    //     </a>
    //   </nav>
    // </header>
  );
};
