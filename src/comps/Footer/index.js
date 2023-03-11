import React, { useState } from "react";
import style from "./style.module.scss";

function Footer() {
  return (
    <p className={style.copyr}>
      &copy; Hak Cipta 2023 PT Bank Negara Indonesia (Persero), Tbk.
    </p>
  );
}

export default Footer;
