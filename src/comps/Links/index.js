import React from "react";
import style from "./style.module.scss";

function Links() {
  return (
    <div className={style.links}>
      <h3>Links</h3>
      <a className={style.link} href="#">
        Orange Magazine
      </a>
      <a className={style.link} href="#">
        Booklet PPA
      </a>
      <a className={style.link} href="#">
        BNI.CO.ID
      </a>
    </div>
  );
}

export default Links;
