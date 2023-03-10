import Birthday from "comps/Birthday";
import Links from "comps/Links";
import React from "react";
import style from "./style.module.scss";

function Sidebar() {
  return (
    <div>
      <Birthday />
      <Links />
      <br />
      <p className={style.ref}>Do you have any Refferal ?</p>
      <button className={style.btn}>Click Here</button>
    </div>
  );
}

export default Sidebar;
