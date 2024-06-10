import React from "react";
import fabControl from "../../assets/fabControl.png";
import fabFeedback from "../../assets/fabFeedback.png";
import fabReport from "../../assets/fabReport.png";
import fabSuggestion from "../../assets/fabSuggestion.png";
import fabClose from '../../assets/fabClose.png'

const SecFab = ({toogle2,setToogle2,toogle,setToogle,handleNavItem}) => {
  return (
    <div className="absolute bottom-[3em] right-[32px] cursor-pointer">
      <div className="flex">
        <div className="mt-2 ml-1 w-[50px] h-[50px]"
        onClick={()=>handleNavItem("contact")}
        >
          <img
            src={fabControl}
          />
        </div>
        <div className="mt-2 ml-1 w-[50px] h-[50px]"
        onClick={()=>handleNavItem("feedback")}
        >
          <img
            src={fabFeedback}
          />
        </div>
        <div className="mt-2 ml-1 w-[50px] h-[50px]"
        onClick={()=>handleNavItem("report")}
        >
          <img src={fabReport} />
        </div>
        <div className="mt-2 ml-1 w-[50px] h-[50px]"
        onClick={()=>handleNavItem("suggestion")}
        >
          <img
            src={fabSuggestion}
          />
        </div>

        <div className="mt-2 ml-1 w-[50px] h-[50px]"
        onClick={()=>{setToogle2(!toogle2);setToogle(true);handleNavItem("")}}
        >
          <img
            src={fabClose}
          />
        </div>
      </div>
    </div>
  );
};

export default SecFab;
