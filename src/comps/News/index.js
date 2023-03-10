import React, { useState } from "react";
import data from "data/news.json";
import Market from "comps/Market";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./style.module.scss";

const cities = [
  { name: "Telekomunikasi", code: "NY" },
  { name: "Bisnis", code: "RM" },
];

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

function News() {
  const [btn, setBtn] = useState("industry");

  const handleClick = (idx) => {
    setBtn(idx);
  };

  return (
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
              <img src={row.image} />
              {/* <div className={style.label}>{row.title}</div> */}
            </div>
          );
        })}
      </Slider>
      <a href="#" className={style.more}>
        Show more from {btn}
      </a>

      <Market />
    </div>
  );
}

export default News;
