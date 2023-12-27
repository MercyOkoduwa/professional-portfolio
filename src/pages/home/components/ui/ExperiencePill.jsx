import "./../component.css"
export const ExperiencePill =({experience})=>{
    return (
      <div>
        <p className="company">{experience.company}</p>
        <p className="typeR">{experience?.type}</p>
        <p className="periodd">
          {experience.role} <span className="ppr">.</span> {experience.period}
        </p>
      </div>
    )
}