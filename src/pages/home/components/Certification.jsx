import { Grid } from "@mui/material";
import "./component.css";

import badge from "./../../../assets/MED.png";
import aws from "./../../../assets/amazon.jpeg";
import ibm from "./../../../assets/ibmcert.png";
import safee from "./../../../assets/safee.jpeg";
import sigma from "./../../../assets/sigmma.jpeg";
import axe from "./../../../assets/axelos.jpeg";
import cert from "./../../../assets/certificate.png";

export const Certification = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="exp">
            <div className="exp-heading">
              <h3 className="exp_h1">Certifications</h3>
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
            <Grid item md={4} xs={12}>
              <img className="aws" src={aws} alt="" />
            </Grid>
            <Grid item md={8} xs={12}>
              <h3>AWS Certified Cloud Practitioner</h3>
              <p className="cert_iss">Amazon Web Services (AWS)</p>
              <p className="cert_date">Issued Dec 2021</p>
              <a href="https://drive.google.com/file/d/1ZjExBvp5nlI_BDtjgSFP02uEozQUPC-Z/view" target="_blank" rel="noopener noreferrer">
              <button className="downloadResume cert_view" type="button">
                View Certificate
                {/* <img src={cert} alt="" /> */}
              </button>
              </a>
             
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={6} class="cert-card cert-card_ibm">
          <Grid container spacing={1}>
            <Grid item md={4} xs={12}>
              <img className="ibm" src={ibm} alt="" />
            </Grid>
            <Grid item md={8} xs={12}>
              <h3>Enterprise Design Thinking <br /> Practitioner</h3>
              <p className="cert_iss">IBM</p>
              <p className="cert_date ibm_date">Issued Jan 2022</p>
              <a href="https://www.credly.com/badges/bf7b4aaa-8e82-45ef-ab9d-62bb69c94a9c?source=linked_in_profile" target="_blank" rel="noopener noreferrer">
              <button className="downloadResume cert_view cert_view_ibm" type="button">
                View Certificate
              </button>
              </a>
            </Grid>
          </Grid>
        </Grid>

        {/* <Grid item md={6} class="cert-card cert_ibm">
          <Grid container spacing={1}>
            <Grid item md={4} xs={12}>
              <img className="ibm" src={ibm} alt="" />
            </Grid>
            <Grid item md={8} xs={12}>
              <h3>Enterprise Design Thinking Practitioner</h3>
              <p className="cert_iss ">IBM</p>
              <p className="cert_date ibm_date">Issued Jan 2022</p>
              <a href="https://www.credly.com/badges/bf7b4aaa-8e82-45ef-ab9d-62bb69c94a9c?source=linked_in_profile" target="_blank" rel="noopener noreferrer">
              <button className="downloadResume cert_view" type="button">
                View Certificate
              </button>
              </a>
             
            </Grid>
          </Grid>
        </Grid> */}

        <Grid item md={6} class="cert-card">
          <Grid container spacing={1}>
            <Grid item md={4} xs={12}>
              <img className="aws" src={safee} alt="" />
            </Grid>
            <Grid item md={8} xs={12}>
              <h3>Certified SAFe® 5 Practitioner</h3>
              <p className="cert_iss">Scaled Agile, Inc.</p>
              <p className="cert_date">Issued Jun 2022</p>
              <a href="https://drive.google.com/file/d/179h9aHt5ZrWLhKzsSY4U8LD8uAEW8WEO/view" target="_blank" rel="noopener noreferrer">
              <button className="downloadResume cert_view" type="button">
                View Certificate
              </button>
              </a>
              
            </Grid>
          </Grid>
        </Grid>

       

        <Grid item md={6} class="cert-card">
          <Grid container spacing={1}>
            <Grid item md={4} xs={12}>
              <img className="sigma" src={sigma} alt="" />
            </Grid>
            <Grid item md={8} xs={12}>
              <h3>Lean Six Sigma Yellow Belt</h3>
              <p className="cert_iss">GoLeanSixSigma.com</p>
              <p className="cert_date">Issued Sep 2018</p>
              <a href="https://drive.google.com/file/d/1VrpZrhzj9s9Epvt9ZX52cgHtEuMe8gWM/view" target="_blank" rel="noopener noreferrer">
              <button className="downloadResume cert_view" type="button">
                View Certificate
              </button>
              </a>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={6} class="cert-card">
          <Grid container spacing={1}>
            <Grid item md={4} xs={12}>
              <img className="axe" src={axe} alt="" />
            </Grid>
            <Grid item md={8} xs={12}>
              <h3>ITIL® v4 Foundation Certificate <br/>in IT Service Management</h3>
              <p className="cert_iss">AXELOS Global Best Practice</p>
              <p className="cert_date">Issued Dec 2021</p>
              <button className="downloadResume cert_view" type="button">
                View Certificate
              </button>
            </Grid>
          </Grid>
        </Grid>


      </Grid>
    </>
  );
};
