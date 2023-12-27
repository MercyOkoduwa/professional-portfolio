import { Grid } from "@mui/material";

import "./component.css";
import { SkillPill } from "../../home/components/ui/SkillPill";
import { ExperiencePill } from "../../home/components/ui/ExperiencePill";
import { ToolKit } from "../../home/components/ui/ToolKit";
import figma from "./../../../assets/figmaskill.png";
import photoshop from "./../../../assets/photoshopskill.png";
import framer from "./../../../assets/framerskill.png";
import mirro from "./../../../assets/mirroskill.png";
import canva from "./../../../assets/canvaskill.png";
import sketch from "./../../../assets/sketchskill.png";

const toolkit = [
    figma,photoshop,framer,canva,mirro,sketch
 ]

const skills = [
  "Product Design",
  "User Research",
  "User Testing",
  "User Experience Design",
  "Wireframing",
  "Story Boarding",
  "Hand Sketching",
  "Prototyping",
  "Team Player",
  "Leadership",
  "Communication",
  "Presentation",
  "Site Mapping",
  "Creativity",
  "Design System",
  "Interactive Design",
  "Animation Design",
];

const experience = [
  {
    company: "Union Systems Limited",
    role: "Product Designer",
    period: "September 2021 - Present",
    type: "",
  },
  {
    company: "Octoneu Nigeria",
    role: "UI/UX Designer",
    period: " November 2022 - Present",
    type: "(Contract)",
  },
  {
    company: "Amcreative Marketing Agency",
    role: "Graphic Designer",
    period: "November 2019 - October 2021",
    type: "",
  },
];

export const Experience = () => {
  return (
    <Grid container spacing={0} paddingBottom={7} paddingTop={0}>
      <Grid item xs={12} md={6}>
        <h2 className="headD">Recent Experience</h2>
        {experience.map((exp) => {
          return <ExperiencePill experience={exp} key={exp.company} />;
        })}
         <h2 className="headD">Education</h2>
         <p className="periodd">Project Management - Federal University of Technology, Owerri</p>
      </Grid>
      <Grid item xs={12} md={6}>
        <h2 className="headD">Skills</h2>
        <div className="skillpill-list aboutskill">
          {skills.map((skill) => {
            return <SkillPill skillName={skill} key={skill} />;
          })}
        </div>
        <h2 className="headD">Tool Kits</h2>
           <div className="toolkit-list">
                {toolkit.map((kit)=>{
                    return <ToolKit imgSize="small" kitName={kit} key={kit}/>
                })}
            </div>
      </Grid>
    </Grid>
  );
};
