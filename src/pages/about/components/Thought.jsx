import { Grid } from "@mui/material";

import "./component.css";
import { ThoughtCard } from "./ThoughtCard";

import testing from "./../../../assets/testing.png";
import design from "./../../../assets/design.png";
import research from "./../../../assets/userResearch.png";
import emp from "./../../../assets/exphasize.png";

export const Thought = () => {
  const thoughts = [
    {
      logo: research,
      title: "User Research",
      body: "From carrying out targeted surveys, User interviews and competitive analysis, a persona is created aimed at understanding user needs early enough. This helps me as a designer to always keep the users at the centre of my design process.",
      emp: "Data is everything.",
    },
    {
      logo: emp,
      title: "Empathising",
      body: "Feeling the pain of a user helps in drafting out solutions that would resolve the pain points and still remain relevant to product users. From using that pressing iron that's too heavy for people, to using that platform a user uses on daily basis. All aimed at immersing myself in the user's day-to-day activities to better 'feel' the pain.",
      emp: "If only I could walk a day in your shoes",
    },
    {
      logo: design,
      title: "Design",
      body: "Putting back on the designer's hat, but this time filled with user centered data and a desire to solve the identified problem, i use Miro for brainstorming and mapping out user journey guided by the How Might We (HMW) principle. Pen and Paper for sketching possible solutions, and Figma for fleshing out Mid and High Fidelity mockups and interactive prototypes. I arrive at a solution which not only solves the user needs but also achieves set business goals.",
      emp: "",
    },
    {
      logo: testing,
      title: "User Testing",
      body: "A handful of potential users are given a rapid prototype of the solution to test freely governed by Heuristics. Paying attention to their actions and non verbal cues, feedbacks are gathered and acted upon when needed. A popular quote pivotal to my user testing sessions - 'If i have to explain my design solution to a user, i need to go back to the drawing board'",
      emp: "",
    }
  ];

  return (
    <>
      <Grid container spacing={0} paddingBottom={5} paddingTop={7}>
        <Grid item xs={11} paddingBottom={3}>
          <h2 className="headD">Thought Process</h2>
          <p className="aboutD-p1">
            I carefully craft my designs based on the core UX skills i have
            acquired over-time. Alongside finding the balance between continuous
            learning and improvement.
          </p>
        </Grid>
      </Grid>

      <Grid container spacing={5} paddingBottom={7} paddingTop={2}>

          {thoughts.map((thought) => {
            return <ThoughtCard thought={thought} key={thought.title} />;
          })}
    
      </Grid>
    </>
  );
};
