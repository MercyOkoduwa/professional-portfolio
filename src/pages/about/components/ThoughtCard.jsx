import { Grid } from "@mui/material";


export const ThoughtCard = ({thought}) => {
  return (
    <Grid item xs={12} md={6}>
      <img src={thought.logo} alt="" srcset="" />
      <h2 className="headD">{thought.title}</h2>
      <p>{thought.emp}</p>
      <p className="">
        {thought.body}
      </p>
    </Grid>
  );
};
