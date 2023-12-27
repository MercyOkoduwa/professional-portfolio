import { Grid } from "@mui/material";
import { ReactComponent as IntroText } from "./../../../assets/productanimateui.svg";
import arrowback from "./../../../assets/arrowbackui.svg";
import productImage from "./../../../assets/productui.gif";
import EastIcon from "@mui/icons-material/East";
import sylvaMan from "./../../../assets/sylvanusprofile.png";
import aboutMan from "./../../../assets/aboutsylva.png";
import whiteArrow from "./../../../assets/whitearrow.png"

import "./component.css";
import { ScrollDown } from "../../../components/ui/ScrollDown";

export const AboutBanner = () => {
  return (
    <Grid container spacing={0}>
      <Grid className="leftcontain" item xs={6}>
        <img className="aboutMan" src={aboutMan} alt="" />
        <p className="productDesigner"><span><EastIcon /></span>Product Designer</p>
      </Grid>
      <Grid item xs={6}>
        <div className="about-right">
            <img className="profileImage" src={sylvaMan} alt="" />
            <span className="aboutscrollingdown">
              <ScrollDown arrow={whiteArrow}/>
            </span>
        </div>
      </Grid>
    </Grid>
  );
};
