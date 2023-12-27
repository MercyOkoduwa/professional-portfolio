

import "./ui.css"
export const ScrollDown =({arrow})=>{
    return (
      <a className="home-scroll-button" >
        <span className="home-scroll-button__inner">
         <img src={arrow} alt="arrowdown" />
          {/* <span className="home-scroll-button__text">
            Scroll down
          </span> */}
        </span>
      </a>
    )
}