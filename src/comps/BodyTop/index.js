import React from "react";
import style from "./style.module.scss";
import News from "comps/News";
import Sidebar from "comps/Sidebar";

function BodyTop() {
  return (
    <div className={style.bodytop}>
      <News />
      <Sidebar />
    </div>
  );
}

export default BodyTop;
