import React from "react";
import style from "./style.module.scss";

function Header() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date().toLocaleDateString("en-US", options);

  return (
    <div className={style.header}>
      <div className={style.content}>
        <div className={style.left}>
          <div className={style.lefttext}>
            <h4>
              Welcome, <b>BNI Hi-Movers!</b>
            </h4>
          </div>
        </div>

        <div className={style.center}>
          <img src="/images/logo.png" alt="Logo Bank BNI" />
        </div>

        <div className={style.right}>
          <a href="https://rmtoolsdev.bni.co.id/app/login/login">
            <i className="pi pi-sign-in"></i>Login
          </a>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
