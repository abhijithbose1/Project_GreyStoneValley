import React, { useEffect, useRef } from "react";
import { Navbar } from "../Navbar/Navbar";
import "./Container.scss";


export const TitleContainer = () => {
    const targetRef= useRef(null);

    useEffect(() => {
        setTimeout(()=>{
            targetRef.current.style.display="none";
         },4000)
    }, [])
    

  return (
    <div ref={targetRef} className="title-container"><h1>Grey Stone Valley</h1></div>
  )
}


export const MainContainer = ({ children }) => {
    return <div className="main-container">
                <Navbar />
                {children}
            </div>
};
