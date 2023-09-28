import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.scss";
import clsx from "clsx";

const LanguageSwitcher = () => {
  const [isSelected, setIsSelected] = useState("en");
  const { i18n } = useTranslation();

  const handleEn = () => {
    setIsSelected("en");
  };

  const handleVi = () => {
    setIsSelected("vi");
  };

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div onChange={changeLanguage} className={styles.wrapper}>
      <div className={styles.inputContainer}>
        <input
          id="en"
          type="radio"
          value="en"
          name="language"
          hidden
          defaultChecked
        />{" "}
        <label
          htmlFor="en"
          onClick={handleEn}
          className={clsx(
            styles.label,
            isSelected === "en" ? styles.selected : ""
          )}
        >
          EN
        </label>
      </div>
      <div className={styles.inputContainer}>
        <input id="vi" type="radio" value="vi" name="language" hidden />{" "}
        <label
          htmlFor="vi"
          onClick={handleVi}
          className={clsx(
            styles.label,
            isSelected === "vi" ? styles.selected : ""
          )}
        >
          VI
        </label>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
