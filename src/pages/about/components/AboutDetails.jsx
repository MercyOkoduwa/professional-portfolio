import { Grid } from "@mui/material";

import "./component.css";

export const AboutDetails = () => {
  return (
    <Grid container spacing={0} paddingBottom={7} paddingTop={7}>
      <Grid item xs={11}>
        <h2 className="headD">Hi, Nice to meet you</h2>
       <p className="aboutD-p1">A startup savvy product designer balancing business goals, user needs with winning business results across web, iOS and Android platforms</p>
       <p className="aboutD-p2">My name is Sylvanus Odiakose. My friends call me Sylva</p>
       <p className="aboutD-p3">I’m a self taught product designer, passionate about solving complex problems using data driven processes that translate business objectives into solutions, keeping their user empathy at the Centre.</p>
       <p className="aboutD-p4">
           Currently translating business ideas into delightful solutions
            at <a href="https://unionsystems.com/" target="_blank"> Union Systems Limited.</a></p>
      </Grid>
    </Grid>
  );
};
