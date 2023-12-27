import { Grid } from "@mui/material";
import { CContainer } from "../../ui/CContainer";
import EastIcon from "@mui/icons-material/East";
import tweet from "./../../../assets/twitter2.png";
import instagram from "./../../../assets/instagram.png";
import youtube from "./../../../assets/youtube.png";
import lindin from "./../../../assets/linkedin.png";
import github from "./../../../assets/github.png";



import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <CContainer>
        <div className="foot-wrap">
          <Grid container spacing={0} marginTop={8}></Grid>
          <Grid container spacing={0} marginTop={0}>
            <Grid item xs={12} md={12}>
              <p className="social_c">
                <span className="copyR">
                  <a href="https://x.com/mercy_okoduwa?t=rVN3ylG7zrnYUKM925rFcw&s=09" target="_blank" rel="noopener noreferrer">
                  <img className="social__me" src={tweet} />
                  </a>
                 
                </span>
                <span className="copyR">
                  <a
                    href="https://www.instagram.com/mercy.okoduwa_?igsh=aWIxY3lzaDR0OWNx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="social__me" src={instagram} />
                  </a>
                </span>
                <span className="copyR">
                  <a
                    href="https://youtube.com/playlist?list=PLbl8Xg8japqyvVgH6eH0qlhvCoQZ6Q3C9&si=WUGQUFNkQ6YNjMqu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="social__me" src={youtube} />
                  </a>
                </span>
                <span className="copyR">
                  <a href="https://www.linkedin.com/in/mercyokoduwa/" target="_blank" rel="noopener noreferrer">
                  <img className="social__me" src={lindin} />
                  </a>
                </span>
                <span className="copyR">
                  <a href="https://github.com/MercyOkoduwa" target="_blank" rel="noopener noreferrer">
                  <img className="social__me" src={github} />
                  </a>
                </span>
                {/* <span >F</span> */}
              </p>
            </Grid>
            <Grid item xs={12} md={6}>
              <span className="social linkedIIN">
                <a
                  href="https://www.linkedin.com/in/mercyokoduwa/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </span>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="rf">
                {/* <img className="logoF" src={footerLogo} alt="" srcset="" /> */}
                <p className="copyR">
                  © 2023 Mercy Okoduwa. All rights reserved
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </CContainer>
    </div>
  );
};
