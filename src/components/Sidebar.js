import React from "react";
import "./sidebar.css";
import { AiOutlinePlus } from "react-icons/ai";
import { CiLocationArrow1 } from "react-icons/ci";
import { LuSunrise, LuSunset } from "react-icons/lu";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FiSun } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="icons">
        <div className="plus">
          <AiOutlinePlus />
        </div>
        <div className="dots">
          <div className="dots1"></div>
          <div className="dots2"></div>
          <div className="dots3"></div>
        </div>
        <div className="tempunit">
          <div>&deg;C</div>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <div>&deg;F</div>
        </div>
      </div>
      <div className="secondheader">
        <div className="citydata">
          <div className="city">
            <CiLocationArrow1 className="location" />
            <p> New York, USA</p>
          </div>
          <div
            className="date"
            style={{ color: "rgb(215, 214, 214)", fontSize: "14px" }}
          >
            Today 28 Sept
          </div>
        </div>

        <div className="time">
          <div className="one">
            <LuSunrise style={{ marginTop: "2px" }} />
            <div>07:19</div>
          </div>
          <div className="second">
            <LuSunset style={{ marginTop: "2px" }} />
            <div>19:32</div>
          </div>
        </div>
      </div>
      <div className="temparature">
        <div className="fst">
          <MdKeyboardArrowLeft
            style={{ fontSize: "35px", color: "rgb(215, 214, 214)" }}
          />
          <div className="degree">27&deg;</div>
          <MdKeyboardArrowRight
            style={{ fontSize: "35px", color: "rgb(215, 214, 214)" }}
          />
        </div>
        <div className="second1">
          <FiSun style={{ margin: "5px 10px 0px -30px" }} />
          Sunny
        </div>
      </div>
    </div>
  );
}
