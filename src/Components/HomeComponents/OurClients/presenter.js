import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const OurClient = () => {
  return (
    <div className={cx("container")}>
      <span className={cx("title")}>OUR CLIENTS</span>
      <div className={cx("underline")} />
    </div>
  );
};

export default OurClient;
