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

  const handleClick = (idx) => {
    setBtn(idx);
  };

  return (
    <>
      <Dialog
        visible={showNotif}
        style={{ width: "300px" }}
        className={style.dialog + " birthdayDialog"}
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
              <select className={style.select}>
                <option>Telekomunikasi</option>
                <option>Bisnis</option>
              </select>
            )}
          </div>
        </div>

        <Slider {...settings}>
          {data.data.map((row, i) => {
            return (
              <div key={i} className={style.sliderItem}>
                <img src={row.image} alt="img" />
                <div className={style.label}>{row.title}</div>
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
