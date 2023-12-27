import { Grid } from "@mui/material";
import "./component.css";
import { SkillPill } from "./ui/SkillPill";
import "./../../../pages/responsive.css"

export const Skills = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="exp">
            <div className="exp-heading">
              <h3 className="exp_h1">My Skills</h3>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item md={6} xs={12}>
          <div class="card">
            <h2>Automation and Manual Testing</h2>
            <div>
            <SkillPill skillName="Cypress" />
            {/* <SkillPill skillName="Selenium Webdriver" /> */}
            <SkillPill skillName="Vysor" />
            <SkillPill skillName="Playwright" />
            
            </div>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div class="card">
          <h2>API Testing and Automation</h2>
          <div>
            <SkillPill skillName="Postman/Newman" />
            <SkillPill skillName="Swagger" />
            <SkillPill skillName="Apache JMeter" />
            </div>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div class="card">
          <h2>Programming Languages</h2>
          <div>
            <SkillPill skillName="Java" />
            <SkillPill skillName="JavaScript" />
            <SkillPill skillName="Python" />
            <SkillPill skillName="C#" />
            <SkillPill skillName="SQL" />
            </div>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div class="card">
          <h2>Continuous Integration and deployment</h2>
          <div>
            <SkillPill skillName="Azure DevOps" />
            <SkillPill skillName="Jenkins" />
            <SkillPill skillName="Spinnaker" />
            <SkillPill skillName="AWS" />
            <SkillPill skillName="Docker & Kubernetes" />
            <SkillPill skillName="ArgoCD" />
            </div>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div class="card">
          <h2>Project Management and Test Management</h2>
          <div>
            <SkillPill skillName="Atlassian JIRA" />
            <SkillPill skillName="Azure Boards" />
            <SkillPill skillName="Trello" />
            </div>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div class="card">
          <h2>Database Administration</h2>
          <div>
            <SkillPill skillName="SQL Server" />
            <SkillPill skillName="Oracle" />
            <SkillPill skillName="DBeaver" />
            <SkillPill skillName="MongoDB" />
            <SkillPill skillName="MySQL DB" />
            </div>
          </div>
        </Grid>
        
      </Grid>
    </>
  );
};
