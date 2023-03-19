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
        dismissableMask={true}
        header="Kurs TT Counter"
        visible={visible}
        // style={{ width: "55vw" }}
        className={style.modal}
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
            <tfoot>
              <tr>
                <td colSpan={3}>
                  *Pemberitahuan Terakhir: 22-03-2023 14:20 WIB (GMT+07:00)
                </td>
              </tr>
            </tfoot>
          </table>
        </p>
      </Dialog>

      <div className={style.tickerContainer}>
        <div>
          <h3 title="Last update at 22/03/2023" className={style.title}>
            Kurs TT Counter [22/03 14:20 WIB]
          </h3>
        </div>

        {true && (
          <div className={style.marquee}>
            <Marquee speed={50} gradient={false} pauseOnHover={true}>
              {data.map((row, i) => {
                return (
                  <div key={i} className={style.tickerItems}>
                    {row.counter.map((row2, i) => {
                      return (
                        <div className={style.tickerItem} key={row2.name}>
                          <div>
                            <div className={style.flag}>
                              <div>{row2.name}</div>
                              <div>
                                <img
                                  src={`/images/${row2.name}.jpg`}
                                  alt={row2.name}
                                />
                              </div>
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

        <div className={style.button}>
          <button className={style.refresh}>
            <i className="pi pi-refresh"></i>
          </button>

          <button onClick={() => setVisible(true)} className={style.more}>
            More <i className="pi pi-angle-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Ticker;
