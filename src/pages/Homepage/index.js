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

  const urlKurs = "http://192.168.143.61:57004/CoreService";

  const getKurs = async () => {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", urlKurs, true);

    // build SOAP request
    var sr =
      '<soapenv:Envelope xmlns:q0="http://service.bni.co.id/core" xmlns:bo="http://service.bni.co.id/core/bo" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">' +
      "<soapenv:Body>" +
      "<q0:transaction>" +
      "<request>" +
      "<systemId>XRATE</systemId>" +
      '<content xsi:type="bo:ExchangeRateByTypeReq">' +
      "<rateType>02</rateType>" +
      "</content>" +
      "</request>" +
      "</q0:transaction>" +
      "</soapenv:Body>" +
      "</soapenv:Envelope>";

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
          alert(xmlhttp.responseText);
        }
      }
    };
    // Send the POST request
    xmlhttp.setRequestHeader("Content-Type", "text/xml");
    xmlhttp.send(sr);
  };

  const getFeed = async () => {
    await fetch(url)
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
    getFeed();
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
