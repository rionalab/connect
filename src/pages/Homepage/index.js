import Header from "comps/Header";
import React from "react";
import style from "./style.module.scss";

function Homepage() {
  return (
    <div className={`pageContainer ${style.a}`}>
      <Header />
    </div>
  );
}

export default Homepage;
