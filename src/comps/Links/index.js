import React, { useState } from "react";
import style from "./style.module.scss";
import dataLink from "data/links.json";
import { Dialog } from "primereact/dialog";

function Links() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const initialText = "Helpdesk";
  const [text, setText] = useState(initialText);

  return (
    <>
      <Dialog
        dismissableMask={true}
        visible={visible}
        className={style.dialog + " cleanDialog"}
        onHide={() => setVisible(false)}
      >
        <div className={style.containermenu}>
          <p>Info Produk Perusahaan Anak</p>
          <div className={style.content}>
            {dataLink.data.bookletPPA.map((menu, i) => (
              <a href={menu.url} target={`_blank`} key={i}>
                <img src={menu.image} alt={menu.title} />
                <span>{menu.title}</span>
              </a>
            ))}
          </div>
        </div>
      </Dialog>

      <Dialog
        dismissableMask={true}
        visible={visible2}
        className={style.dialog + " cleanDialog"}
        onHide={() => setVisible2(false)}
      >
        <div className={style.containermenu}>
          <p>Info Produk BNI</p>
          <div className={style.content}>
            {dataLink.data.orangeMagazine.map((menu, i) => (
              <a href={menu.url} target={`_blank`} key={i}>
                <img src={menu.image} alt={menu.title} />
                <span>{menu.title}</span>
              </a>
            ))}
          </div>
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

          <button className={style.link} onClick={() => setVisible2(true)}>
            <img src="images/newspaper.png" alt="k" />
            <span>Info Produk BNI</span>
          </button>

          <button className={style.link} onClick={() => setVisible(true)}>
            <img src="images/catalog.png" alt="l" />
            <span>Produk Perusahaan Anak</span>
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
