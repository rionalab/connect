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
          <img src={"/images/stock.png"} alt="h" />
          <div>
            <label>
              <span>11 Jun 2023</span>
              Morning Market
            </label>
            <button>Show more</button>
          </div>
        </div>
        <div className={style.item}>
          <img src={"/images/stock-market.png"} alt="i" />
          <div>
            <label>
              <span>05 Mar 2023</span>
              Fixed Income Weekly
            </label>
            <button>Show more</button>
          </div>
        </div>
        <div className={style.item}>
          <img alt="a" src={"/images/market-trends.png"} />
          <div>
            <label>
              <span>20-30 Jan 2023</span>
              Market Wrap
            </label>
            <button>Show more</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Market;
