import Header from "comps/Header";
import Ticker from "comps/Ticker";
import BodyTop from "comps/BodyTop";
import React from "react";
import style from "./style.module.scss";
import Footer from "comps/Footer";
import { parseString } from "xml2js";

function Homepage() {
  const url =
    "https://news.google.com/rss/search?q=Industri+Mekanik+Elektrik&hl=id&gl=ID&ceid=ID:id";
  // "https://www.youtube.com/feeds/videos.xml?channel_id=UC4woSp8ITBoYDmjkukhEhxg";
  // "https://rss.app/feeds/Pmmii6cU23Ne6qa4.xml";
  const corsProxy = "https://cors.eu.org/";

  const urlKurs = "http://192.168.143.61:57004/CoreService";

  const getKurs = async () => {
    // await fetch(corsProxy + urlKurs)
    //   .then((res) => res.text())
    //   .then((data) =>
    //     parseString(data, (err, res) => {
    //       console.warn("err", err);
    //       console.info("res", res);
    //     })
    //   )
    //   .catch((err) => console.log(err));

    fetch(urlKurs, {
      method: "get",
      headers: { "application-type": "app-json" },
    })
      .then((res) => res.text())
      .then((data) =>
        parseString(data, (err, res) => {
          console.warn("err", err);
          console.info("res", res);
        })
      )
      .catch((err) => console.log(err));
  };

  const getFeed = async () => {
    await fetch(corsProxy + url)
      .then((res) => res.text())
      .then((data) =>
        parseString(data, (err, res) => {
          console.warn("err", err);
          console.info("res", res);
        })
      )
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    // getFeed();
    getKurs();
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
