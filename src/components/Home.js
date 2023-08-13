import React from "react";
import Sidebar from "./Sidebar";
import "./home.css";
import Mainbody from "./Mainbody";

export default function Home() {
  return (
    <div className="home-cotainer">
      <Sidebar />
      <Mainbody />
    </div>
  );
}
