import Header from "comps/Header";
import Ticker from "comps/Ticker";
import React from "react";
import BirthdayModal from "comps/modals/BIrthdayModal";
import style from "./style.module.scss";

function Homepage() {
  return (
    <div className={`pageContainer ${style.a}`}>
      <Header />
      <Ticker />
      <BirthdayModal />
    </div>
  );
}

export default Homepage;
