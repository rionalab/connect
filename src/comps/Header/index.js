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
        <p>{date}</p>

        <img src="/logo.png" alt="Logo Bank BNI" />

        <a href="https://bni.crmnextlab.com/devnetapp/login/login">Login</a>
      </div>
    </div>
  );
}

export default Header;
