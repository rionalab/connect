import FieldSelect from "comps/forms/FieldSelect";
import FieldText from "comps/forms/FieldText";
import React, { useEffect } from "react";
import style from "./style.module.scss";

function Referral() {
  useEffect(() => {
    document.title = "BNI Connect | Referral Form";
  }, []);

  return (
    <div className={`${style.a}`}>
      <div className={style.header}>
        <div className={style.content}>
          <img src="/images/Bank BNI.png" />
          <span>Lead Referral Form</span>
        </div>
      </div>

      <div className={style.container}>
        <h4>I. Data Referee</h4>
        <div className={style.dataReferee}>
          <div>
            <FieldText label="Referee Name" isRequired />
            <FieldText label="Referee Name" isRequired />
          </div>
          <div>
            <FieldSelect
              label="Referral Priority"
              isRequired
              options={[
                { name: "Low Priority" },
                { name: "Medium Priority" },
                { name: "High Priority" },
              ]}
              optionLabel="name"
            />
            <FieldText label="Referee NPP" isRequired />
          </div>
        </div>

        <h4>II. Permohonan Produk</h4>
        <div className={style.permohonanProduk}>
          <FieldSelect
            label="Product Category"
            options={[
              { name: "Loan" },
              { name: "Saving" },
              { name: "Service" },
            ]}
            optionLabel="name"
          />
          <FieldSelect
            label="Product"
            options={[
              { name: "KMK BNI" },
              { name: "KMK TSL" },
              { name: "KMK SUP-005" },
            ]}
            optionLabel="name"
          />
          <FieldText label="Max. Facility Credit" />
        </div>

        <h4>III. Data Nasabah (Debitur)</h4>
        <div className={style.dataNasabah}>
          <FieldText label="Nama Nasabah" isRequired />
          <div className={style.grid2}>
            <div>
              <FieldText label="NIK/NIB" />
              <FieldText label="CIF No." />
              <FieldText label="Head Office Email" isRequired />
            </div>
            <div>
              <FieldText label="NPWP" />
              <FieldText label="Account Number" />
              <FieldText label="Head Office Telp. Numbrt" isRequired />
            </div>
          </div>
          <FieldText label="Referral Priority" isRequired />
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
