import React from "react";
import "./topbar.scss";
import CodeIcon from "@mui/icons-material/Code";
import PersonIcon from "@mui/icons-material/Person";
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function Topbar() {
  return (
    <div className="top-bar" id="top-bar">
      <div className="header-section">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="topbar-left">
               
                <a className="topbar-contact" href="tel:+918838545538"><span><PhoneOutlinedIcon/></span>+91 8838545538</a>
                <a className="topbar-contact" href="mailto:rajkarthi040@gmail.com"><span><EmailOutlinedIcon/></span>rajkarthi040@gmail.com</a>
              </div>
              <div className="topbar-right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
