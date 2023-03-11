import React from "react";
import { Dialog } from "primereact/dialog";
import style from "./style.module.scss";

function BirthdayModal(props) {
  const { visible, toggleModal, img } = props;
  return (
    <Dialog
      visible={visible}
      style={{ width: "490px" }}
      className={style.dialog + " birthdayDialog"}
      onHide={() => toggleModal(false)}
    >
      <div className={style.content}>
        <img
          className={style.banner}
          src="/images/birthday-banner.png"
          alt="Birthday Banner"
        />
        <img
          className={style.profile}
          src={"/images/" + img + ".jpg"}
          alt="Profile Pic"
        />
        <div className={style.text}>
          <h4>Happy Birthday!</h4>
          <h3>Rini Suherman</h3>
          <p>
            "Another adventure filled year awaits you. Welcome it by celebrating
            your birthday with pomp and splendor. Wishing you a very happy and
            fun-filled birthday!"
          </p>
        </div>
      </div>
    </Dialog>
  );
}

export default BirthdayModal;
