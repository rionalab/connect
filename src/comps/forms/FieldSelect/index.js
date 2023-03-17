import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { classNames } from "primereact/utils";
import style from "./style.module.scss";

function FieldSelect(props) {
  const {
    label,
    optionLabel,
    selectedVal,
    setselectedVal,
    options,
    // name,
    className = "",
    minLength,
    keyFilter = null,
    // showErrMsg = true,
    isRequired = false,
    // maxLength,
    // min = null,
    // max = null,
    placeholder = "",
    isReadonly = false,
    isDisabled,
  } = props;
  return (
    <div className={style.container}>
      <label className={style.label}>
        {label}
        {isRequired && (
          <span data-requiredlabel={label} style={{ color: "red" }}>
            *
          </span>
        )}
      </label>
      <div>
        <Dropdown
          disabled={isReadonly}
          options={options}
          optionLabel={optionLabel}
          value={selectedVal}
          onChange={(e) => setselectedVal(e.value)}
        />
      </div>
    </div>
  );
}

export default FieldSelect;
