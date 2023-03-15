import React, { useState } from "react";
import data from "data/news.json";
import Market from "comps/Market";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./style.module.scss";
import Footer from "comps/Footer";
import { Dialog } from "primereact/dialog";

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
};

function News() {
  const [btn, setBtn] = useState("industry");
  const [showNotif, setShowNotif] = useState(false);
  const type = [{ value: "Telekomunikasi" }, { value: "Bisnis" }];
  const [selectedType, setSelectedType] = useState(type[0].value);
  // const [data, setData] = useState(dataNews.data.industry);

  const handleClick = (idx) => {
    setBtn(idx);
  };

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <>
      <Dialog
        visible={showNotif}
        style={{ width: "300px" }}
        className={style.dialog + " cleanDialog"}
        onHide={() => setShowNotif(false)}
      >
        <div>
          <img
            className={style.banner}
            src="/images/coming-soon.png"
            alt="Coming Soon"
          />
          <div className={style.text}>
            <h4>We will notify you once this feature is ready!</h4>
          </div>
        </div>
      </Dialog>

      <div className={style.container}>
        <div className={style.filter}>
          <div>
            <div className={style.btns}>
              <button
                onClick={() => handleClick("industry")}
                className={`${style.btn} ${
                  btn === "industry" && style.btnActive
                }`}
              >
                Industry News
              </button>
              <button
                onClick={() => handleClick("BNI")}
                className={`${style.btn} ${btn === "BNI" && style.btnActive}`}
              >
                BNI News
              </button>
            </div>
          </div>
          <div className={style.selectcontainer}>
            {btn === "industry" && (
              <select
                value={selectedType}
                className={style.select}
                onChange={handleChange}
              >
                {type.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.value}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>

        <Slider {...settings}>
          {data.data[`${btn}`].map((row, i) => {
            return (
              <div className={style.sliderItem} key={i}>
                <a
                  href="https://bit.ly/BNI-SR018"
                  key={i}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={row.image} alt="img" />
                  {row.title !== "" && (
                    <div className={style.label}>{row.title}</div>
                  )}
                </a>
              </div>
            );
          })}
        </Slider>

        <a onClick={() => setShowNotif(true)} className={style.more}>
          Show more from {btn}
        </a>

        <Market />

        {/* <Footer /> */}
      </div>
    </>
  );
}

export default News;
