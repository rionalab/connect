import React, { useState } from "react";
import NewsTicker from "react-advanced-news-ticker";
import style from "./style.module.scss";
import dataKurs from "data/kurs.json";
import { Dialog } from "primereact/dialog";

function Ticker() {
  const { data } = dataKurs;
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Dialog
        header="Header"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Dialog>
      <div className={style.tickerContainer}>
        <button onClick={() => setVisible(true)} className={style.more}>
          More <i className="pi pi-angle-right"></i>
        </button>

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
      </div>
    </>
  );
}

export default Ticker;
