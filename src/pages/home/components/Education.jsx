import { Grid } from "@mui/material";
import "./component.css";

import badge from "./../../../assets/MED.png";
import america from "./../../../assets/america.jpeg";
import uniben from "./../../../assets/uniben.jpeg";


export const Education = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="exp">
            <div className="exp-heading">
              <h3 className="exp_h1">Education</h3>
              {/* <p>My Professional Certificate</p> */}
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
    
        alignItems="center"
        justifyContent="center"
      >
        <Grid item md={6} class="cert-card">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={8} md={4}  >
              <img className="aws" src={america} alt="" />
            </Grid>
            <Grid item xs={12} sm={8} md={8}  >
              <h3>American InterContinental University</h3>
              <p className="cert_iss">Masters of Science, Information Technology</p>
              <p className="cert_date">Dec 2021</p>
             <p className="grade_me"><span>Grade: Distinction</span></p>
             
              <a href="https://drive.google.com/file/d/1po-nwO8jdr69VWZAw12sk99OoYIdKa3a/view" target="_blank" rel="noopener noreferrer">
              <button className="downloadResume cert_view" type="button">
                View Certificate
              </button>
              </a>
             
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={6} class="cert-card cert_ibm">
          <Grid container spacing={1}>
            <Grid item md={4} xs={12}>
              <img className="aws" src={uniben} alt="" />
            </Grid>
            <Grid item md={8} xs={12}>
              <h3>University of Benin</h3>
              <p className="cert_iss ">B.ENG, Electrical and Electronics Engineering</p>
              <p className="cert_date">Nov 2017</p>
              <p className="grade_me grade_me2 "><span>Grade: First Class Honours</span></p>


              <a href="https://drive.google.com/file/d/1CDIm3Yg8eKV57ROk_aDZ4s2TajHwFqpJ/view" target="_blank" rel="noopener noreferrer">
              <button className="downloadResume cert_view" type="button">
                View Certificate
              </button>
              </a>
             
            </Grid>
          </Grid>
        </Grid>  
      </Grid>
    </>
  );
};
