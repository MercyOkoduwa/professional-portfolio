import "./ui.css";

export const CContainer = ({children})=>{
    return (
        <div className="appContain">
            <div className="appContainChild">
              {children}
            </div>
        </div>
    )
}