import React from "react";
import NewsTicker from "react-advanced-news-ticker";
import style from "./style.module.scss";
import dataKurs from "data/kurs.json";

function Ticker() {
  const { data } = dataKurs;

  return (
    <NewsTicker
      rowHeight={48}
      maxRows={1}
      speed={400}
      duration={4000}
      autoStart={true}
      pauseOnHover={true}
      id="myId"
      className={style.ticker}
    >
      {data.map((row, i) => {
        return (
          <div key={i} className={style.tickerItems}>
            {row.counter.map((row2, i) => {
              return (
                <div className={style.tickerItem} key={row2.name}>
                  <div>
                    <div>{row2.name}</div>
                    <div>
                      <img src={`/${row2.name}.jpg`} alt={row2.name} />
                    </div>
                    <div>
                      <span>
                        Sell <br />
                        {row2.jual.split(",")[0]}
                      </span>
                    </div>
                    <div>
                      <span>
                        Buy
                        <br />
                        {row2.beli.split(",")[0]}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </NewsTicker>
  );
}

export default Ticker;
