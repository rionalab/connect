import { pdfUrl } from "config";
import React, { useState } from "react";
import style from "./style.module.scss";

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
      <br />
      <br />

      <h3>Market Update</h3>
      <div className={style.market}>
        <a
          href={`${pdfUrl}/Morning View 20230314.pdf`}
          target="_blank"
          className={style.item}
        >
          <img src={"/images/stock.png"} alt="h" />
          <label>
            <span>Morning Market</span>
          </label>
        </a>
        <a
          href={`${pdfUrl}/Fixed Income weekly Update 13 Maret 2023.pdf`}
          target="_blank"
          className={style.item}
        >
          <img src={"/images/market-research.png"} alt="i" />
          <label>
            <span>Fixed Income Weekly</span>
          </label>
        </a>
        <a
          href={`${pdfUrl}/Market Wrap (06 - 10 Maret 2023).pdf`}
          target="_blank"
          className={style.item}
        >
          <img alt="a" src={"/images/market-trends.png"} />
          <label>
            <span>Market Wrap</span>
          </label>
        </a>
        <a
          href={`${pdfUrl}/Market Outlook 2023 (February).pdf`}
          target="_blank"
          className={style.item}
        >
          <img src={"/images/analytics.png"} alt="i" />
          <label>
            <span>Monthly Update</span>
          </label>
        </a>
      </div>
    </>
  );
}

export default Market;
