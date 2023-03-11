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
      <div className={style.referral}>
        <h3>Refer and earn</h3>
        <h5>Share your referral code and earn your rewards!</h5>
        <p>Do you have any Referral ?</p>
        <a
          className={style.btn}
          href="https://bni.crmnextlab.com/bnirestapi/home/referral"
        >
          <img src="/images/voucher.png" alt="voucher" />
          Click Here
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
