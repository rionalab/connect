import FieldSelect from "comps/forms/FieldSelect";
import FieldText from "comps/forms/FieldText";
import React, { useEffect, useState } from "react";
import style from "./style.module.scss";

function Referral() {
  const [productCtg, setProductCtg] = useState(null);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    document.title = "BNI Connect | Referral Form";
  }, []);

  // console.log(productCtg);

  return (
    <div className={`${style.a}`}>
      <div className={style.header}>
        <div className={style.content}>
          <img src="/images/Bank BNI.png" />
          <span>Lead Referral Form</span>
        </div>
      </div>

      <div className={` ${style.container}`}>
        <h4>I. Data Nasabah (Debitur)</h4>
        <div className={style.dataNasabah}>
          <div className={style.grid2}>
            <div>
              <FieldText label="Nama Nasabah" isRequired />
              <FieldText label="Telephone No." isRequired />
            </div>
            <div>
              <FieldText label="Address" isRequired />
              <FieldText label="PIC Name" isRequired />
            </div>
          </div>
        </div>

        <h4>II. Permohonan Produk</h4>
        <div className={style.permohonanProduk}>
          <FieldSelect
            selectedVal={productCtg}
            setselectedVal={setProductCtg}
            label="Product Category"
            options={[
              { name: "Loan" },
              { name: "Saving" },
              { name: "Service" },
            ]}
            optionLabel="name"
          />
          <FieldSelect
            selectedVal={product}
            setselectedVal={setProduct}
            label="Product"
            options={[
              { name: "KMK BNI" },
              { name: "KMK TSL" },
              { name: "KMK SUP-005" },
            ]}
            optionLabel="name"
          />
          {productCtg?.name === "Loan" ? (
            <FieldSelect
              selectedVal={product}
              setselectedVal={setProduct}
              label="Max. Facility Credit"
              options={[
                { name: "≥ 500 Miliar (Korporasi)" },
                { name: "150 Miliar s.d 500 Miliar (Large Commercial)" },
                { name: "15 Miliar s.d 150 Miliar (Commercial)" },
                { name: "1 Miliar s.d 15 Miliar (SME)" },
                { name: "N/A" },
              ]}
              optionLabel="name"
            />
          ) : (
            <FieldText label="Max. Facility Credit" isReadonly={true} />
          )}
        </div>

        <h4>III. Data Referee</h4>
        <div className={style.dataReferee}>
          <div>
            <FieldText label="Referee Name" isRequired />
            <FieldText label="Referee Email" isRequired />
          </div>
          <div>
            <FieldText label="Referee Phone Number" isRequired />
            <FieldText label="Referee NPP" isRequired />
          </div>
        </div>

        <div className={style.button}>
          <a href="/">
            <i className="pi pi-save"></i>Submit
          </a>
        </div>
      </div>
    </div>
  );
}

export default Referral;
