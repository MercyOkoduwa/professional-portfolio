import { Grid } from "@mui/material";
import "./component.css";
import "./../../../pages/responsive.css"

import badge from "./../../../assets/MED.png";
import mercy from "./../../../assets/abt.jpg";

import mercyImage from "./../../../assets/mercyokoduwa.png";

export const AboutMe = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <div className="left myleft">
        <img className="myself" src={mercy} alt="" />
        </div>
      </Grid>
      <Grid  item xs={12} md={6}>
        <div className="right">
          <div className="textContent">
            <h4 className="about_me">ABOUT ME</h4>
            <h3 className="about_me_l">A Little Bio About Me</h3>
            <div className="exp-year">
              <Grid container spacing={1}>
                <Grid item  xs={1}>
                  <img className="exp-5i" src={badge} alt="" />
                </Grid>
                <Grid item  xs={11}>
                  <p className="ex-5 x-l" sx={{ display: { xs: 'none', md: 'block' } }}>
                    5+ Years Experience in this game, Delivery Industry{" "}
                    <br></br>
                    Standard Products.
                  </p>
                  <p className="ex-5 x-s">
                    5+ Years Experience in this game, Delivery Industry{" "}
                    Standard Products.
                  </p>
                </Grid>
              </Grid>
            </div>
          </div>
          <p className="prof_sum">
            Dedicated and results-driven QA Software Engineer with over 5 years
            of experience in ensuring the quality and reliability of software
            solutions within the financial industry. Proven expertise in
            designing and implementing comprehensive test strategies, conducting
            thorough test cycles, and collaborating with cross-functional teams
            to deliver high-quality software products. Adept at identifying and
            resolving complex issues, optimizing processes, and maintaining a
            keen focus on delivering exceptional user experiences.
          </p>
          <a href="https://drive.google.com/file/d/1hKCtAU9lxKlOQRxNNpcPNFzmprRfd41R/view" target="_blank" rel="noopener noreferrer">
          <button className="downloadResume" type="button">VIEW RESUME</button>
          </a>
          
        </div>
      </Grid>
    </Grid>
  );
};
