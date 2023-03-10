import Birthday from "comps/Birthday";
import Links from "comps/Links";
import React from "react";
import style from "./style.module.scss";

function Sidebar() {
  return (
    <div>
      <Birthday />
      <Links />
    </div>
  );
}

export default Sidebar;
