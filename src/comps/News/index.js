import React, { useState } from "react";
import data from "data/news.json";
import Market from "comps/Market";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./style.module.scss";
import dataCategory from "data/category_news.json";
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
  const [category, setCategory] = useState(
    dataCategory.list_industry_news[0].category
  );
  const [dtSubcat, setDtSubcat] = useState(
    dataCategory.list_industry_news[0].sub
  );

  const handleClick = (idx) => {
    setBtn(idx);
  };

  const handleChange = (e) => {
    setCategory(e.target.value);

    const _filter = dataCategory.list_industry_news.filter(
      (v) => v.category === e.target.value
    );

    setDtSubcat(_filter[0].sub);
  };

  return (
    <>
      <Dialog
        dismissableMask={true}
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

          <div className={style.selectcontainer}>
            {btn === "industry" && (
              <>
                <select
                  value={category}
                  className={style.select}
                  onChange={handleChange}
                >
                  {dataCategory.list_industry_news.map((t, id) => (
                    <option key={id} value={t.category}>
                      {t.category}
                    </option>
                  ))}
                </select>

                <select
                  // value={selectedType}
                  className={style.select}
                  // onChange={handleChange}
                >
                  {dtSubcat.map((t, id) => (
                    <option key={id} value={t.title}>
                      {t.title}
                    </option>
                  ))}
                </select>
              </>
            )}
          </div>
        </div>

        <Slider {...settings}>
          {data.data[`${btn}`].map((row, i) => {
            return (
              <div className={style.sliderItem} key={i}>
                <a href={row.url} key={i} target="_blank" rel="noreferrer">
                  <img src={row.image} alt="img" />
                  {row.title !== "" && (
                    <div className={style.label}>{row.title}</div>
                  )}
                </a>
              </div>
            );
          })}
        </Slider>

        <div className={style.showdiv}>
          <a onClick={() => setShowNotif(true)} className={style.more}>
            Show more from {btn}
          </a>
        </div>

        <Market />

        {/* <Footer /> */}
      </div>
    </>
  );
}

export default News;
