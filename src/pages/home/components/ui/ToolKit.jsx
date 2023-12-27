import "./../component.css"
export const ToolKit =({kitName,imgSize})=>{
    return (
      <img className={`toolkit ${imgSize}`} src={kitName} alt="" />
    )
}