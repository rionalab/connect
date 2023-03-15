import React, { useState } from "react";
import style from "./style.module.scss";
import BirthdayModal from "comps/modals/BIrthdayModal";
import { Dialog } from "primereact/dialog";

function Birthday() {
  const [showModal, setShowModal] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [profile, setProfile] = useState({
    img: "profile1",
    name: "Anggun Nadia Siger",
  });

  const toggleModal = (props) => {
    setShowModal(!showModal);
    setProfile(props);
  };

  return (
    <>
      <BirthdayModal
        img={profile.img}
        name={profile.name}
        visible={showModal}
        toggleModal={setShowModal}
      />

      <Dialog
        visible={showNotif}
        style={{ width: "300px" }}
        className={style.dialog + " cleanDialog"}
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
          <div
            className={style.person}
            onClick={() =>
              toggleModal({
                img: "profile1",
                name: "Anggun Nadia Siger",
              })
            }
          >
            <img src="/images/profile1.jpg" alt="person" />
          </div>
          <div
            className={style.person}
            onClick={() =>
              toggleModal({
                img: "profile2",
                name: "Helmy Fandianto",
              })
            }
          >
            <img src="/images/profile2.jpg" alt="person" />
          </div>
          <div
            className={style.person}
            onClick={() =>
              toggleModal({
                img: "profile3",
                name: "Yuli Irma Meliza",
              })
            }
          >
            <img src="/images/profile3.jpg" alt="person" />
          </div>
          <div
            className={style.person}
            onClick={() =>
              toggleModal({
                img: "profile4",
                name: "Muchamad Alvin Maulana",
              })
            }
          >
            <img src="/images/profile4.jpg" alt="person" />
          </div>
          <div
            className={style.person}
            onClick={() =>
              toggleModal({
                img: "profile5",
                name: "Verra Verbiyana",
              })
            }
          >
            <img src="/images/profile5.jpg" alt="person" />
          </div>
        </div>

        <p className={style.morebday}>
          <span onClick={() => setShowNotif(true)}>Check</span> who else have
          birthday this <br />
          month and wish a wonderful happy birthday
        </p>
      </div>
    </>
  );
}

export default Birthday;
