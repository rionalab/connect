import React, { useState } from "react";
import style from "./style.module.scss";
import { Dialog } from "primereact/dialog";

function Links() {
  const [visible, setVisible] = useState(false);

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

      <div className={style.links}>
        <div className={style.linksInner}>
          <a className={style.link} href="https://bniorangemagazine.com/">
            <img src="/k.png" alt="k" />
            <span>Orange Magazine</span>
          </a>
          <a className={style.link} onClick={() => setVisible(true)} href="#">
            <img src="/l.png" alt="l" />
            <span>Booklet PPA</span>
          </a>
          <a className={style.link} href="https://www.bni.co.id/id-id/">
            <img src="/m.png" amlt="m" />
            <span>bni.co.id</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Links;
