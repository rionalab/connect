import Header from "comps/Header";
import Ticker from "comps/Ticker";
import BodyTop from "comps/BodyTop";
import React from "react";
import style from "./style.module.scss";
import XMLParser from "react-xml-parser";
import Footer from "comps/Footer";

function Homepage() {
  const getFeed = async () => {
    fetch("/search.xml")
      .then((res) => res.text())
      .then((data) => {
        var xml = new XMLParser().parseFromString(data);
        console.log(xml);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className={`pageContainer ${style.a}`}>
      <Header />
      <Ticker />
      <BodyTop />
      <Footer />
    </div>
  );
}

export default Homepage;
