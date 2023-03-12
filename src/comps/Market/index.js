import React, { useState } from "react";
import style from "./style.module.scss";
import { Dialog } from "primereact/dialog";
import dataMarket from "data/market.json";

function Market() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ row: [], title: "" });

  const setModal = (props) => {
    const { row, title } = props;
    setData({ title: title, row: row });
    setVisible(true);
    console.log(row);
  };

  const onButtonDownload = (url) => {
    fetch(url).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = url;
        alink.click();
      });
    });
  };

  return (
    <>
      <Dialog
        header={data.title}
        visible={visible}
        style={{ width: "544px" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">
          <table cellSpacing={0} className={style.tbl}>
            <thead>
              <tr>
                <th align="left">No</th>
                <th align="right">File Name</th>
                <th align="right">Date</th>
                <th align="right">Download</th>
              </tr>
            </thead>
            <tbody>
              {data.row.map((tr, id) => (
                <tr key={id}>
                  <td>{tr.no}</td>
                  <td align="right">
                    <a>
                      <i className="pi pi-external-link" />
                      {tr.file_name}
                    </a>
                  </td>
                  <td align="right">{tr.date}</td>
                  <td align="right">
                    <button onClick={() => onButtonDownload(tr.url)}>
                      <i className="pi pi-download" /> Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </p>
      </Dialog>

      <br />
      <br />
      {/* <br /> */}

      <h3>Market Update</h3>
      <div className={style.market}>
        <div className={style.item}>
          <img src={"/images/stock.png"} alt="h" />
          <div>
            <label>
              <span>11 Jun 2023</span>
              Morning Market
            </label>
            <button
              onClick={() =>
                setModal({
                  row: dataMarket.data[0].morning_market,
                  title: "Morning Market Info",
                })
              }
            >
              Show more
            </button>
          </div>
        </div>
        <div className={style.item}>
          <img src={"/images/stock-market.png"} alt="i" />
          <div>
            <label>
              <span>05 Mar 2023</span>
              Fixed Income Weekly
            </label>
            <button
              onClick={() =>
                setModal({
                  row: dataMarket.data[1].fixed_income,
                  title: "Fixed Income Weekly",
                })
              }
            >
              Show more
            </button>
          </div>
        </div>
        <div className={style.item}>
          <img alt="a" src={"/images/market-trends.png"} />
          <div>
            <label>
              <span>20-30 Jan 2023</span>
              Market Wrap
            </label>
            <button
              onClick={() =>
                setModal({
                  row: dataMarket.data[2].market_wrap,
                  title: "Market Wrap Info",
                })
              }
            >
              Show more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Market;
