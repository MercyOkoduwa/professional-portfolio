import { Box, Container, CssBaseline } from "@mui/material";
import { CContainer } from "../../components/ui/CContainer";
import "./about.css";
import { AboutBanner } from "./components/AboutBanner";
import { AboutDetails } from "./components/AboutDetails";
import { Thought } from "./components/Thought";
import { Experience } from "./components/Experience";

export const About = () => {
  return (
    <>
      <CssBaseline />
      <div className="about">
        <div className="about-banner">
          {/* <CContainer>
            <AboutBanner />
          </CContainer> */}
        </div>
      </div>

      {/* <div className="about-details">
        <CContainer>
          <AboutDetails />
        </CContainer>
      </div> */}

      {/* <div className="thought">
        <CContainer>
          <Thought />
          <Experience />
        </CContainer>
      </div> */}
      {/* <div className="thought">
        <CContainer>
          <Experience />
        </CContainer>
      </div> */}
    </>
  );
};
