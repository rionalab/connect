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
        <h3>Referral</h3>
        {/* <h5>Share & Connect your reference to BNI.</h5> */}
        <p>Do you have any Referral ?</p>
        {/* <br /> */}

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
