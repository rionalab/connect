import React, { useState } from "react";
import style from "./style.module.scss";
import BirthdayModal from "comps/modals/BIrthdayModal";
import { Dialog } from "primereact/dialog";

function Birthday() {
  const [showModal, setShowModal] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [img, setImg] = useState("profile1");

  const toggleModal = (img) => {
    setShowModal(!showModal);
    setImg(img);
  };

  return (
    <>
      <BirthdayModal img={img} visible={showModal} toggleModal={setShowModal} />

      <Dialog
        visible={showNotif}
        style={{ width: "300px" }}
        className={style.dialog + " birthdayDialog"}
        onHide={() => setShowNotif(false)}
      >
        <div>
          <img
            className={style.banner}
            src="/images/coming-soon.png"
            alt="Coming Soon"
          />
          <div className={style.text}>
            <h4>We will notify you once this feature is ready!</h4>
          </div>
        </div>
      </Dialog>

      <div className={style.bday}>
        <h3>Birthday</h3>
        <div className={style.people}>
          <div className={style.person} onClick={() => toggleModal("profile1")}>
            <img src="/images/profile1.jpg" alt="person" />
          </div>
          <div className={style.person} onClick={() => toggleModal("profile2")}>
            <img src="/images/profile2.jpg" alt="person" />
          </div>
          <div className={style.person} onClick={() => toggleModal("profile3")}>
            <img src="/images/profile3.jpg" alt="person" />
          </div>
          <div className={style.person} onClick={() => toggleModal("profile4")}>
            <img src="/images/profile4.jpg" alt="person" />
          </div>
          <div className={style.person} onClick={() => toggleModal("profile5")}>
            <img src="/images/profile5.jpg" alt="person" />
          </div>
        </div>

        <a className={style.morebday}>
          <b onClick={() => setShowNotif(true)}>Check</b> who else have birthday
          this <br />
          month and wish a wonderful happy birthday
        </a>
      </div>
    </>
  );
}

export default Birthday;
