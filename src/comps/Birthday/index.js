import React from "react";
import style from "./style.module.scss";

function Birthday() {
  return (
    <>
      <div className={style.bday}>
        <img src={`/d.png`} className={style.bg} />
        <div className={style.people}>
          <div className={style.person}>
            <img src="/e.png" />
          </div>
          <div className={style.person}>
            <img src="/f.png" />
          </div>
          <div className={style.person}>
            <img src="/g.png" />
          </div>
        </div>
      </div>
      <a className={style.morebday} href="#">
        <b>Check</b> who else have birthday this <br />
        month and wish a wonderful happy birthday
      </a>
    </>
  );
}

export default Birthday;
