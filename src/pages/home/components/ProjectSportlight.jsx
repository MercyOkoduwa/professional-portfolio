import { Grid } from "@mui/material";
import {ReactComponent as SportLight} from "./../../../assets/sportlight.svg";

import "./component.css"

export const ProjectSportlight = ()=>{
    return (
        <Grid container spacing={0}>
           <Grid item xs={12}>
             <div><SportLight/></div>
             <div><h2 className="pslight">Project Sportlight</h2></div>
            </Grid>
        </Grid>
    );
}