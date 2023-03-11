import React, { useState, useEffect } from "react";
import NewsTicker from "react-advanced-news-ticker";
import style from "./style.module.scss";
import dataKurs from "data/kurs.json";
import { Dialog } from "primereact/dialog";

function Ticker() {
  const { data } = dataKurs;
  const [visible, setVisible] = useState(false);
  const [row, setRow] = useState([]);

  useEffect(() => {
    setRow(dataKurs.data.map((row) => row.counter.map((row2) => row2)));
  }, []);

  return (
    <>
      <Dialog
        header="Kurs"
        visible={visible}
        style={{ width: "544px" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">
          <table cellSpacing={0} className={style.tbl}>
            <thead>
              <tr>
                <th align="left">Mata Uang</th>
                <th align="right">Beli</th>
                <th align="right">Jual</th>
              </tr>
            </thead>
            <tbody>
              {row.map((tr) =>
                tr.map((tr2) => (
                  <tr key={tr2.name}>
                    <td>
                      <p>
                        <img alt={tr2.name} src={`/${tr2.name}.jpg`} />
                        {tr2.name}
                      </p>
                    </td>
                    <td align="right">{tr2.beli}</td>
                    <td align="right">{tr2.jual}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </p>
      </Dialog>
      <div className={style.tickerContainer}>
        <button onClick={() => setVisible(true)} className={style.more}>
          More <i className="pi pi-angle-right"></i>
        </button>

        <h3 className={style.title}>KURS</h3>

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
