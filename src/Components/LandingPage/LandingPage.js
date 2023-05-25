import React from "react";
import landingImage from "./DSC_1981.jpg"

export default function LandingPage(){
    return(
         <div className="page">LandingPage
        <img src={landingImage} alt="Landing" />
        <div className="page" id="about">About
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Welcome, I'm Dayana.
            <br className="hidden lg:inline-block" />Software Engineer
          </h1>
         
          <div className="flex justify-center">
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}