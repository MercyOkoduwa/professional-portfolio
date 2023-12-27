import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { useRef, createContext } from "react";
import "./layout.css"
import up from "./../../assets/up-arrow3.png";


export const LayoutContext = createContext({})

export const Layout = () => {
  const expRef = useRef(null);
  const skillRef = useRef(null);
  const aboutRef = useRef(null);
  const eduRef = useRef(null);
  const layoutRef = useRef(null);
  // const skillRef = useRef(null)

  const handleScroll =()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }


  return (
    <div className="container">
      <div className="tpc"></div>
      <div className="tpd">
        <div ref={layoutRef} className="wrapper">
          <LayoutContext.Provider value={{ expRef ,skillRef,aboutRef,eduRef,layoutRef}}>
            <Header />
            <Outlet />
            <Footer />
            {/* <button className="scrollToTop" onClick={()=>handleScroll()}>scroll to top</button> */}
            <img  className="scrollToTop" onClick={()=>handleScroll()} src={up} alt="" />
          </LayoutContext.Provider>
        </div>
      </div>
    </div>
  );
};
