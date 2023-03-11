import Birthday from "comps/Birthday";
import Links from "comps/Links";
import React from "react";
import style from "./style.module.scss";

function Sidebar() {
  return (
    <div className={style.sidebar}>
      <Birthday />
      <Links />
      <br />
      <p className={style.ref}>Do you have any Referral ?</p>
      <button
        className={style.btn}
        href="https://bni.crmnextlab.com/bnirestapi/home/referral"
      >
        <img src="voucher.png" alt="voucher" />
        Click Here
      </button>
    </div>
  );
}

export default Sidebar;
