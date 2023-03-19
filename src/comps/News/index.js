import React, { useState, useRef } from "react";
import data from "data/news.json";
import Market from "comps/Market";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./style.module.scss";
import dataCategory from "data/category_news.json";
import { Dialog } from "primereact/dialog";
import { TieredMenu } from "primereact/tieredmenu";

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
  const menu = useRef(null);

  const categoryType = [
    {
      label: "Pertanian, Kehutanan & Perikanan",
      items: [
        {
          label: "Industri Pertanian & Perkebunan",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Pertanian & Perkebunan" });
          },
        },
        {
          label: "Industri Kehutanan",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Kehutanan" });
          },
        },
        {
          label: "Industri Tembakau",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Tembakau" });
          },
        },
        {
          label: "Industri Perikanan",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Perikanan" });
          },
        },
        {
          label: "Industri Karet",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Karet" });
          },
        },
      ],
    },
    {
      label: "Industri Pengolahan",
      items: [
        {
          label: "Industri Logam",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Logam" });
          },
        },
        {
          label: "Industri Kimia",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Kimia" });
          },
        },
        {
          label: "Industri Makanan & Minuman",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Makanan & Minuman" });
          },
        },
        {
          label: "Industri Mekanik & Elektrik",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Mekanik & Elektrik" });
          },
        },
        {
          label: "Industri Kayu & Kertas",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Kayu & Kertas" });
          },
        },
        {
          label: "Industri Kemasan",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Kemasan" });
          },
        },
        {
          label: "Industri Plastik",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Plastik" });
          },
        },
        {
          label: "Industri Tekstil",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Tekstil" });
          },
        },
        {
          label: "Industri Percetakan",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Percetakan" });
          },
        },
        {
          label: "Industri Pupuk",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Pupuk" });
          },
        },
        {
          label: "Industri Penerbangan",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Penerbangan" });
          },
        },
      ],
    },
    {
      label: "Jasa",
      items: [
        {
          label: "Industri Jasa Profesional & Keuangan",
          url: "",
          command: () => {
            setCategorySelected({
              label: "Industri Jasa Profesional & Keuangan",
            });
          },
        },
        {
          label: "Industri Jasa Kesehatan",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Jasa Kesehatan" });
          },
        },
        {
          label: "Industri Pelayanan Publik",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Pelayanan Publik" });
          },
        },
        {
          label: "Industri Ekspedisi",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Ekspedisi" });
          },
        },
        {
          label: "Industri Logistik",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Logistik" });
          },
        },
        {
          label: "Jasa Angkutan Darat",
          url: "",
          command: () => {
            setCategorySelected({ label: "Jasa Angkutan Darat" });
          },
        },
        {
          label: "Jasa Angkutan Laut",
          url: "",
          command: () => {
            setCategorySelected({ label: "Jasa Angkutan Laut" });
          },
        },
        {
          label: "Pendidikan",
          url: "",
          command: () => {
            setCategorySelected({ label: "Pendidikan" });
          },
        },
        {
          label: "Industri Pariwisata",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Pariwisata" });
          },
        },
        {
          label: "Industri Konstruksi",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Konstruksi" });
          },
        },
        {
          label: "Industri Telekomunikasi",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Telekomunikasi" });
          },
        },
        {
          label: "Industri Penyiaran",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Penyiaran" });
          },
        },
      ],
    },
    {
      label: "Listrik & Energi",
      items: [
        {
          label: "Industri Kelistrikan",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Kelistrikan" });
          },
        },
        {
          label: "Industri Energi",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Energi" });
          },
        },
      ],
    },
    {
      label: "Migas & Pertambangan",
      items: [
        {
          label: "Industri Migas",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Migas" });
          },
        },
        {
          label: "Industri Pertambangan",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Pertambangan" });
          },
        },
      ],
    },
    {
      label: "Ekonomi, Perdagangan & Properti",
      items: [
        {
          label: "Ekonomi Nasional",
          url: "",
          command: () => {
            setCategorySelected({ label: "Ekonomi Nasional" });
          },
        },
        {
          label: "Industri Perdagangan Retail",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Perdagangan Retail" });
          },
        },
        {
          label: "Industri Perdagangan Grosir",
          url: "",
          command: () => {
            setCategorySelected({ label: "Industri Perdagangan Grosir" });
          },
        },
        {
          label: "Real Estate",
          url: "",
          command: () => {
            setCategorySelected({ label: "Real Estate" });
          },
        },
      ],
    },
  ];

  const [categorySelected, setCategorySelected] = useState({
    label: "Industri Pertanian & Perkebunan",
  });

  const handleClick = (idx) => {
    setBtn(idx);
  };

  const handleChange = (e) => {};

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
                model={categoryType}
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
