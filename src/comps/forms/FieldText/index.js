import React from "react";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import style from "./style.module.scss";

function FieldText(props) {
  const {
    label,
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
        <InputText disabled={isReadonly} />
      </div>
    </div>
  );
}

export default FieldText;
