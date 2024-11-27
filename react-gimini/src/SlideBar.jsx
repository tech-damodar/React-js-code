import React from "react";
import { useState } from "react";
import "./slideBar.css";
import { assets } from "./assets/assets";
const SlideBar = () => {
  const [show_menu, setshow_menu] = useState(false);
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <img src={assets.menu_icon} alt="" className="menu" onClick={()=>{setshow_menu(!show_menu)}} />
          <div className="new_chat">
            <img src={assets.plus_icon} alt="" />
            {show_menu?<p>New Chat</p>:null}
          </div>
          {
            show_menu?<div className="recent">
            <h2 className="recent-title">Recent</h2>
            <div className="recent-entry">
              <div className="history">
                <img src={assets.message_icon} alt="" />
                <p>what is html..</p>
              </div>
            </div>
          </div> : null
          }
        </div>
        <div className="bottom">
        <div className="recent-entry">
                <img src={assets.question_icon} alt="" />
                {show_menu?<p>Help</p>:null}
            </div>
            <div className="recent-entry">
                <img src={assets.history_icon} alt="" />
                {show_menu?<p>Activity</p>:null}
            </div>
            <div className="recent-entry">
                <img src={assets.setting_icon} alt="" />
                {show_menu?<p>Setting</p>:null}
            </div>
        </div>
      </div>
    </>
  );
};

export default SlideBar;
