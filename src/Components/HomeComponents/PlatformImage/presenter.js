import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const PlatformImagePresenter = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("box")}>
        <span className={cx("title")}>BLOCKCELL PLATFORM</span>
        <div className={cx("underline")} />
        <img
          alt={"platform"}
          src={require("../../../Media/Images/Home/PlatformImage/platformImage.png")}
        />
      </div>
    </div>
  );
};

export default PlatformImagePresenter;
