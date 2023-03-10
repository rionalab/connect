import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import style from "./style.module.scss";

function BirthdayModal(props) {
  const { visible, toggleModal } = props;

  return (
    <div className="">
      <Dialog
        visible={visible}
        style={{ width: "400px" }}
        modal={false}
        draggable={false}
        resizable={false}
        onHide={toggleModal}
        className={style.dialog + " birthdayDialog"}
      >
        <div className={style.content}>
          <img
            className={style.banner}
            src="/birthday-banner.png"
            alt="Birthday Banner"
          />
          <img className={style.profile} src="/e.png" alt="Profile Pic" />
          <div className={style.text}>
            <h4>Happy Birthday!</h4>
            <h3>Rini Suherman</h3>
            <p>
              "Another adventure filled year awaits you. Welcome it by
              celebrating your birthday with pomp and splendor. Wishing you a
              very happy and fun-filled birthday!"
            </p>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default BirthdayModal;
