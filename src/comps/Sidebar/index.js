import Birthday from "comps/Birthday";
import Links from "comps/Links";
import React from "react";
import { useNavigate } from "react-router";
import style from "./style.module.scss";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className={style.sidebar}>
      <Birthday />
      <Links />

      <br />
      <div className={style.referral}>
        <h3>Referral</h3>
        <p>Do you have any Referral ?</p>

        <button
          className={style.btn}
          // href="/referralform"
          onClick={() => navigate("/referralform")}
          // href="https://bni.crmnextlab.com/bnirestapi/home/referral"
        >
          <img src="/images/voucher.png" alt="voucher" />
          <span>Click Here</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
