import React, { useState, useEffect } from "react";
import style from "./style.module.scss";
import { Dialog } from "primereact/dialog";
import Marquee from "react-fast-marquee";
import { flag } from "config";

function Ticker(props) {
  const { data, getKurs } = props;
  const [visible, setVisible] = useState(false);

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
        {/* <p className="m-0"> */}
        <table cellSpacing={0} className={style.tbl}>
          <thead>
            <tr>
              <th align="left">Mata Uang</th>
              <th align="right">Beli</th>
              <th align="right">Jual</th>
            </tr>
          </thead>
          <tbody>
            {data?.currency?.map((tr, i) => {
              if (tr.code2 === "IDR" && flag.includes(tr.code)) {
                return (
                  <tr key={i}>
                    <td>
                      <p>
                        <img alt={tr.code} src={`/images/${tr.code}.jpg`} />
                        {tr.code}
                      </p>
                    </td>
                    <td align="right">
                      {Math.round(Number(tr.buyRate * 100) / 100).toFixed(2)}
                    </td>
                    <td align="right">
                      {Math.round(Number(tr.sellRate * 100) / 100).toFixed(2)}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>
                *Pemberitahuan Terakhir: {data?.currencyVersion}
              </td>
            </tr>
          </tfoot>
        </table>
        {/* </p> */}
      </Dialog>

      <div className={style.tickerContainer}>
        <div>
          <h3 title="Last update at 22/03/2023" className={style.title}>
            Kurs TT Counter [
            {data?.currencyVersion.split(" ")[0].split("-")[1] +
              "/" +
              data?.currencyVersion.split(" ")[0].split("-")[2] +
              " " +
              data?.currencyVersion.split(" ")[1].split(":")[0] +
              ":" +
              data?.currencyVersion.split(" ")[1].split(":")[1] +
              " " +
              data?.currencyVersion.split(" ")[2]}
            ]
          </h3>
        </div>

        {true && (
          <div className={style.marquee}>
            <Marquee speed={50} gradient={false} pauseOnHover={true}>
              <div className={style.tickerItems}>
                {data?.currency?.map((row, i) => {
                  if (row.code2 === "IDR" && flag.includes(row.code)) {
                    return (
                      <div className={style.tickerItem} key={i}>
                        <div>
                          {/* <div className={style.flag}> */}
                          <div>{row.code}</div>
                          <div>
                            <img
                              src={`/images/${row.code}.jpg`}
                              alt={row.code}
                            />
                          </div>
                          {/* </div> */}
                          <div>
                            <span className={style.sell}>
                              <span>Sell</span>
                              <br />
                              {Math.round(
                                Number(row.sellRate * 100) / 100
                              ).toFixed(2)}
                            </span>
                          </div>
                          <div>
                            <span className={style.buy}>
                              <span>Buy</span>
                              <br />
                              {Math.round(
                                Number(row.buyRate * 100) / 100
                              ).toFixed(2)}
                              {/* {row.buyRate.split(",")[0]} */}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </Marquee>
          </div>
        )}

        <div className={style.button}>
          <button className={style.refresh} onClick={getKurs}>
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
