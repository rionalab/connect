import React, { useState } from "react";
import style from "./style.module.scss";
import { Dialog } from "primereact/dialog";

function Links() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const initialText = "Helpdesk";
  const [text, setText] = useState(initialText);

  const orangeMenu = [
    { title: "Simpanan", url: "https://bniorangemagazine.com/simpanan" },
    { title: "E-Banking", url: "https://bniorangemagazine.com/e-banking" },
    { title: "Pinjaman", url: "https://bniorangemagazine.com/pinjaman" },
    {
      title: "Kartu Kredit",
      url: "https://bniorangemagazine.com/kartu-kredit",
    },
    { title: "Investasi", url: "https://bniorangemagazine.com/investasi" },
    { title: "Asuransi", url: "https://bniorangemagazine.com/asuransi" },
    {
      title: "Produk & Jasa Internasional",
      url: "https://bniorangemagazine.com/produk-jasa-inter",
    },
    { title: "BNI Xpora", url: "https://xpora.bni.co.id" },
    {
      title: "Solusi Wholesale",
      url: "https://bniorangemagazine.com/solusiwholesale",
    },
    { title: "Promo BNI", url: "https://bniexperience.bni.co.id/" },
  ];

  return (
    <>
      <Dialog
        header=" Booklet PPA "
        visible={visible}
        style={{ width: "50vw", height: "100vh" }}
        onHide={() => setVisible(false)}
      >
        <object
          data="http://online.fliphtml5.com/onbhz/njpu/"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>
            Booklet PPA
            <a href="http://online.fliphtml5.com/onbhz/njpu/">to the PDF!</a>
          </p>
        </object>
      </Dialog>

      <Dialog
        header="Menu"
        visible={visible2}
        style={{ width: "30vw", minWidth: "450px" }} // height: "100vh"
        className={style.dialog + " orangeDialog"}
        onHide={() => setVisible2(false)}
      >
        <div className={style.content}>
          {orangeMenu.map((menu, i) => (
            // className={style.menu}
            <a href={menu.url} target={`_blank`} key={i}>
              {menu.title}
            </a>
          ))}
        </div>
      </Dialog>

      <div className={style.links}>
        <div className={style.linksInner}>
          <a
            target={`_blank`}
            className={style.link}
            href="https://www.bni.co.id/id-id/"
          >
            <img src="images/bni-46.png" alt="Logo BNI 46" />
            <span>bni.co.id</span>
          </a>
          {/* <a
            target={`_blank`}
            className={style.link}
            href="https://bniorangemagazine.com/"
          >
            <img src="images/newspaper.png" alt="k" />
            <span>Orange Magazine</span>
          </a> */}

          <button className={style.link} onClick={() => setVisible2(true)}>
            <img src="images/newspaper.png" alt="k" />
            <span>Orange Magazine</span>
          </button>

          <button className={style.link} onClick={() => setVisible(true)}>
            <img src="images/catalog.png" alt="l" />
            <span>Booklet PPA</span>
          </button>

          <a
            className={style.link}
            href="/"
            onMouseOver={() => setText("WhatsApp: 081345713300")}
            onMouseLeave={() => setText(initialText)}
          >
            <img src="images/bni-connect.png" alt="Logo BNI Connect" />
            <span>{text}</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Links;
