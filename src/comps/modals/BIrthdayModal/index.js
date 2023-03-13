import React from "react";
import { Dialog } from "primereact/dialog";
import style from "./style.module.scss";

const text = [
  "Wishing you the happiest and brigthest day ever!",
  "Wishing you a fantastic birthday!",
  "Wish you all the best!",
  "Enjoy your special day!",
  "Happy, healthy, wonderful birthday to you!",
  "I hope this is your best year ever!",
  "Warm wishes!",
  "Best wishes on your birthday!",
  "Wish you good health & happiness!",
  "The day is yours!",
];

function BirthdayModal(props) {
  const { visible, toggleModal, img, name } = props;
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
          <h3>{name}</h3>
          <p>{text[Math.floor(Math.random() * text.length)]}</p>
        </div>
      </div>
    </Dialog>
  );
}

export default BirthdayModal;
