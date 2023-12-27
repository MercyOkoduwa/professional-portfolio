import { CssBaseline } from "@mui/material"
import { Banner } from "./components/Banner"
import { CContainer } from "../../components/ui/CContainer"
import "./home.css"
import { ProjectSportlight } from "./components/ProjectSportlight"
import { Skills } from "./components/Skills"
import { AboutMe } from "./components/AboutMe"
import { Experience } from "./components/Experience"
import { Certification } from "./components/Certification"
import { useContext } from "react"
import { LayoutContext } from "../../components/layouts/Layout"
import { Education } from "./components/Education"

export const Home = ()=>{

  const {expRef,skillRef,aboutRef,eduRef} = useContext(LayoutContext);

  return (
    <>
     <CssBaseline />
     <div  className="home">
        <div className="banner" style={{backgroundColor:"rgb(255, 248, 239,0.31)"}}>
         <CContainer>
            <Banner/>
          </CContainer>
        </div>

        <div ref={aboutRef} className="aboutme">
         <CContainer>
            <AboutMe/>
          </CContainer>
        </div>

        <div ref={skillRef} className="skillsme">
         <CContainer>
            <Skills/>
          </CContainer>
        </div>

        <div className="certificationme">
         <CContainer>
            <Certification/>
          </CContainer>
        </div>

        <div ref={expRef}  className="experienceme">
         <CContainer>
            <Experience/>
          </CContainer>
        </div>

        <div ref={eduRef} className="educationme">
         <CContainer>
            <Education/>
          </CContainer>
        </div>

        {/* <div className="project-sportlight">
         <CContainer>
            <ProjectSportlight/>
          </CContainer>
        </div> */}

        {/* <div className="skills" >
         <CContainer>
            <Skills/>
          </CContainer>
        </div> */}

    

     </div>
    
    </>
  )
}