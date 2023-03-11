import React from "react";
import style from "./style.module.scss";

function Market() {
  return (
    <>
      <br />
      <br />

      <h3>Market Update</h3>
      <div className={style.market}>
        <div className={style.item}>
          <img src={"/images/h.png"} alt="h" />
          <label>
            Morning Market
            <span>01 Jan 2023</span>
          </label>
        </div>
        <div className={style.item}>
          <img src={"/images/i.png"} alt="i" />
          <label>
            Fixed Income Weekly
            <span>30 Jan 2023</span>
          </label>
        </div>
        <div className={style.item}>
          <img src={"/images/j.png"} />
          <label>
            Market Wrap <span>20-30 Jan 2023</span>
          </label>
        </div>
      </div>

      <a className={style.more} href="/" alt="asd">
        Show more
      </a>
    </>
  );
}

export default Market;
