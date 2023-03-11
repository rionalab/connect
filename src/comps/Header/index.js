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
          <img src="/images/logo.png" alt="Logo Bank BNI" />
          <div className={style.lefttext}>
            <h4>Welcome, RM Rangers!</h4>
            <p>Melayani Negeri, Kebanggaan Bangsa.</p>
          </div>
        </div>

        <div className={style.right}>
          <a href="https://bni.crmnextlab.com/devnetapp/login/login">Login</a>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
