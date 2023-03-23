import React, { useState, useRef, useEffect } from "react";
import data from "data/news.json";
import Market from "comps/Market";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./style.module.scss";
import { Dialog } from "primereact/dialog";
import { TieredMenu } from "primereact/tieredmenu";
import { pdfUrl } from "config";
import { categoryNews } from "utils";
import axios from "axios";

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: true,
  dots: true,
  autoplay: true,
};

const defaultData = [
  {
    image: "images/blank.jpg",
    title: "Loading...",
    url: "/",
  },
];

function News() {
  const [btn, setBtn] = useState("industry");
  const [showNotif, setShowNotif] = useState(false);
  const menu = useRef(null);
  const [categorySelected, setCategorySelected] = useState({
    label: "Industri Telekomunikasi",
  });
  const [dataNews, setDataNews] = useState(defaultData);

  const getNews = async (q) => {
    axios
      .get("api/getNews", {
        params: {
          query: q,
        },
      })
      .then((response) => {
        setDataNews(response.data.data.item.slice(0, 5));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = (idx) => {
    setBtn(idx);
  };

  useEffect(() => {
    getNews(categorySelected.label);
  }, [categorySelected]);

  // useEffect(() => {
  //   getNews(categorySelected.label);
  // }, []);

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
              BNI Knowledge
            </button>
          </div>

          {btn === "industry" && (
            <div className={style.selectcontainer}>
              <TieredMenu
                model={categoryNews({ setCategorySelected })}
                popup
                ref={menu}
                breakpoint="767px"
              />
              <div onMouseOver={(e) => menu.current.toggle(e)}>
                {categorySelected.label}
                <i className="pi pi-angle-down" />
              </div>
            </div>
          )}
        </div>

        {btn === "industry" ? (
          <Slider {...settings}>
            {dataNews.map((row, i) => {
              return (
                <div className={style.sliderItem} key={i}>
                  <a href={row.link} key={i} target="_blank" rel="noreferrer">
                    <img src={row.image ?? "images/news-1.jpg"} alt="img" />
                    {row.title !== "" && (
                      <div className={style.label}>
                        {row.title}
                        {row.pubDate ? <> ({row.pubDate})</> : <></>}
                      </div>
                    )}
                  </a>
                </div>
              );
            })}
          </Slider>
        ) : (
          <Slider {...settings}>
            {data.data.BNI.map((row, i) => {
              return (
                <div className={style.sliderItem} key={i}>
                  <a
                    href={pdfUrl + row.url}
                    key={i}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={decodeURI(row.image)} alt="img" />
                    {row.title !== "" && (
                      <div className={style.label}>{row.title}</div>
                    )}
                  </a>
                </div>
              );
            })}
          </Slider>
        )}

        <div className={style.showdiv}>
          <a href="#" onClick={() => setShowNotif(true)} className={style.more}>
            Show more from {btn}
          </a>
        </div>

        <Market />
      </div>
    </>
  );
}

export default News;
