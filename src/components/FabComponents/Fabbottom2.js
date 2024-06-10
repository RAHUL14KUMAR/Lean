import React,{useState,useEffect} from 'react'
import leanFab from "../../assets/leanFab.png";
import FirstFab from './FirstFab';
import SecFab from './SecFab';

import Suggestion from "../FabSuggestion/Suggestion";
import Feedback from "../FabFeedback/Feedback";
import Report from "../FabReport/Report";
import Contact from "../FabContact/contact";

import { useStateValue } from '../../stateProvider';
import Notification from '../Notofication/Notification';
const Fabbottom2 = () => {
    const [{message},dispatch]=useStateValue();

    const [toogle,setToogle]=useState(true);
    const [toogle2,setToogle2]=useState(false);

    const [renderComponent, setRenderComponent] = useState("");

    const handleNavItem = (component) => {
        setRenderComponent(component);
    };

    const setComponent = () => {
        switch (renderComponent) {
          case "suggestion":
            return <Suggestion setToogle={setToogle} handleNavItem={handleNavItem} />;
          case "feedback":
            return <Feedback setToogle={setToogle} handleNavItem={handleNavItem} />;
          case "contact":
            return <Contact setToogle={setToogle} handleNavItem={handleNavItem} />;
          case "report":
            return <Report setToogle={setToogle} handleNavItem={handleNavItem} />;
        }
    };
    const [a,setA]=useState("")

    useEffect(()=>{
      setTimeout(()=>{
        setA(message);
        dispatch({
          type:"SET_MESSAGE",
          message:""
        })
      },5000)
    },[message])
  return (
    <div>
      <div>
        <div>
            {
                toogle?
                <div className='w-[50px] h-[50px] absolute bottom-[3em] right-[32px] cursor-pointer' onClick={()=>setToogle(!toogle)}>
                    <img src={leanFab} />
                </div>
                :
                <div>

                    {!toogle2&&<FirstFab toogle={toogle} setToogle={setToogle} toogle2={toogle2} setToogle2={setToogle2} handleNavItem={handleNavItem}/>}

                    {toogle2&&<SecFab toogle2={toogle2} setToogle2={setToogle2} toogle={toogle} setToogle={setToogle} handleNavItem={handleNavItem} />}
                </div>  
            }
        </div>
      </div>
      <div className="mt-2 w-full ml-1 p-2">{setComponent()}</div>
      {a!==""&& <Notification message={a}/>}
    </div>
  )
}

export default Fabbottom2
