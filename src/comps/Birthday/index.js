import React, { useState } from "react";
import style from "./style.module.scss";
import BirthdayModal from "comps/modals/BIrthdayModal";

function Birthday() {
  const [showModal, setShowModal] = useState(false);
  const [img, setImg] = useState("e");

  const toggleModal = (img) => {
    setShowModal(!showModal);
    setImg(img);
  };

  return (
    <>
      <BirthdayModal img={img} visible={showModal} toggleModal={setShowModal} />

      <div className={style.bday}>
        <h3>Birthday</h3>
        <div className={style.people}>
          <div className={style.person} onClick={() => toggleModal("e")}>
            <img src="/images/e.png" alt="person" />
          </div>
          <div className={style.person} onClick={() => toggleModal("f")}>
            <img src="/images/f.png" alt="person" />
          </div>
          <div className={style.person} onClick={() => toggleModal("g")}>
            <img src="/images/g.png" alt="person" />
          </div>
        </div>
      </div>
      <a className={style.morebday} href="/">
        <b>Check</b> who else have birthday this <br />
        month and wish a wonderful happy birthday
      </a>
    </>
  );
}

export default Birthday;
