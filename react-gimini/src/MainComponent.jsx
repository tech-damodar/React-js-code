import React, { useContext, useEffect, useState } from "react";
import { assets } from "./assets/assets";
import "./MainComponent.css";
import MainContainer from "./MainContainer";


const MainComponent = () => {
//   const [searchData, setSearchData] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading,setLoading] = useState(true);
  const [clicked,setClicked] = useState(true)
//   const [showQues,setShowQues] = useState(searchData)
  
//   const {history,setHistory} = useContext(searchContext); 


  // function inputHandle(event) {
  //   setSearchData(event.target.value);
    
  // }



  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} className="icon" alt="User Icon" />
      </div>
      {/* Center of body where we display the output */}
     
        <MainContainer/> 
         
      {/* Bottom search box */}
      <div className="buttom">
        <div className="search-box">
          <input type="text"   placeholder="Enter a prompt here" />
          <div>
            <img src={assets.gallery_icon} alt="Gallery Icon" />
            <img src={assets.mic_icon} alt="Mic Icon" />
            <img src={assets.send_icon}  alt="Send Icon" />
          </div>
        </div>
        <p className="buttom-txt">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </p>
      </div>
    </div>
  );
};

export default MainComponent;
