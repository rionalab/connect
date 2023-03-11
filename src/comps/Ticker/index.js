import React, { useState, useEffect } from "react";
import style from "./style.module.scss";
import dataKurs from "data/kurs.json";
import { Dialog } from "primereact/dialog";
import Marquee from "react-fast-marquee";

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
        header="Kurs TT Counter"
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
                        <img alt={tr2.name} src={`/images/${tr2.name}.jpg`} />
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

        <h3 title="Last update at 22/03/2023" className={style.title}>
          Kurs TT Counter [22/03]
        </h3>

        {true && (
          <div className={style.marquee}>
            <Marquee speed={120} gradient={false} pauseOnHover={true}>
              {data.map((row, i) => {
                return (
                  <div key={i} className={style.tickerItems}>
                    {row.counter.map((row2, i) => {
                      return (
                        <div className={style.tickerItem} key={row2.name}>
                          <div>
                            <div>{row2.name}</div>
                            <div>
                              <img
                                src={`/images/${row2.name}.jpg`}
                                alt={row2.name}
                              />
                            </div>
                            <div>
                              <span className={style.sell}>
                                <span>Sell</span>
                                <br />
                                {row2.jual.split(",")[0]}
                              </span>
                            </div>
                            <div>
                              <span className={style.buy}>
                                <span>Buy</span>
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
            </Marquee>
          </div>
        )}
      </div>
    </>
  );
}

export default Ticker;
