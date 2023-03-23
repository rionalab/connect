import Header from "comps/Header";
import Ticker from "comps/Ticker";
import BodyTop from "comps/BodyTop";
import React from "react";
import style from "./style.module.scss";
import Footer from "comps/Footer";
import { parseString, processors, Builder } from "xml2js";
import axios from "axios";

function Homepage() {
  const [dataKurs, setDataKurs] = React.useState(null);
  const url =
    "https://news.google.com/rss/search?q=Industri+Mekanik+Elektrik&hl=id&gl=ID&ceid=ID:id";

  const urlKurs = "http://192.168.143.61:57004/CoreService";

  const getKurs = async () => {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", urlKurs, true);

    // build SOAP request
    var sr = `<soapenv:Envelope xmlns:q0="http://service.bni.co.id/core" xmlns:bo="http://service.bni.co.id/core/bo" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soapenv:Body>
       <q0:transaction>
          <request>
             <systemId>XRATE</systemId>
             <content xsi:type="bo:ExchangeRateByTypeReq">
                <rateType>02</rateType>
             </content>
          </request>
       </q0:transaction>
    </soapenv:Body>
 </soapenv:Envelope>`;

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
    await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "text/xml" },
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

  const getKurs2 = async () => {
    await fetch("kurs.xml")
      .then((res) => res.text())
      .then((data) =>
        parseString(
          data,
          { explicitArray: false, tagNameProcessors: [processors.stripPrefix] },
          (err, res) => {
            if (err) {
              console.error(err);
              return;
            }

            var soapBody =
              res.Envelope.Body.transactionResponse.response.content;

            if (soapBody.$) {
              delete soapBody.$;
            }

            setDataKurs(soapBody);
          }
        )
      )
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    // getFeed();
    // getKurs();
    getKurs2();
  }, []);

  return (
    <div className={`pageContainer ${style.a}`}>
      <Header />
      <Ticker data={dataKurs} getKurs={getKurs2} />
      <BodyTop />
      <Footer />
    </div>
  );
}

export default Homepage;
