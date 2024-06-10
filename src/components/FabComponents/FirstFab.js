import React from "react";
import fabControl from "../../assets/fabControl.png";
import fabFeedback from "../../assets/fabFeedback.png";
import fabReport from "../../assets/fabReport.png";
import fabSuggestion from "../../assets/fabSuggestion.png";

import fabClose from "../../assets/fabClose.png";

const FirstFab = ({toogle,setToogle,toogle2,setToogle2,handleNavItem}) => {
  return (
    <div>
      <div className="absolute bottom-[1.85em] right-[22px]">
        <div className={`p-2 m-2 items-center gap-2 justify-end`}>
          <div className="flex justify-end">
            <p
              className={`text-black bg-white p-2 px-4 m-2 w-fit h-fit text-center text-lg font-semibold rounded-lg cursor-pointer
                
              ${toogle2?"hidden":"visible"}`}

              onClick={()=>{setToogle(false);setToogle2(true);handleNavItem("report")}}
            >
              Report an issue
            </p>

            <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center cursor-pointer my-2" onClick={()=>{setToogle(false);setToogle2(true);handleNavItem("report")}}>
              <img src={fabReport} alt="Report an issue" />
            </div>
          </div>
          <div
            className=" flex 
                  justify-end"
          >
            <p
              className={`text-black bg-white p-2 px-4 m-2 w-fit h-fit text-center text-lg font-semibold rounded-lg cursor-pointer ${toogle2?"hidden":"visible"}`}
              onClick={()=>{setToogle(false);setToogle2(true);handleNavItem("feedback")}}
            >
              Share Feedback
            </p>

            <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center cursor-pointer my-2" onClick={()=>{setToogle(false);setToogle2(true);handleNavItem("feedback")}}>
              <img src={fabFeedback} alt="Report an issue" />
            </div>
          </div>
          <div className="flex justify-end">
            <p
              className={`text-black bg-white p-2 px-4 m-2 w-fit h-fit text-center text-lg font-semibold rounded-lg cursor-pointer ${toogle2?"hidden":"visible"}`}
              onClick={()=>{setToogle(false);setToogle2(true);handleNavItem("suggestion")}}
            >
              Give Suggestion
            </p>

            <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center cursor-pointer my-2" onClick={()=>{setToogle(false);setToogle2(true);handleNavItem("suggestion")}}>
              <img src={fabSuggestion} alt="Report an issue" />
            </div>
          </div>
          <div className=" flex justify-end">
            <p
              className={`text-black bg-white p-2 px-4 m-2 w-fit h-fit text-center text-lg font-semibold rounded-lg cursor-pointer ${toogle2?"hidden":"visible"}`}
              onClick={()=>{setToogle(false);setToogle2(true);handleNavItem("contact")}}
            >
              Contact Us
            </p>

            <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center cursor-pointer my-2" onClick={()=>{setToogle(false);setToogle2(true);handleNavItem("contact")}}>
              <img src={fabControl} alt="Report an issue" />
            </div>
          </div>

          <div className=" flex justify-end">
            <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center cursor-pointer my-2 " onClick={()=>{setToogle(true)}}>
              <img src={fabClose} alt="Report an issue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstFab;
