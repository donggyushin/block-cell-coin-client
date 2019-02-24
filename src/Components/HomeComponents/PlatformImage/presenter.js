import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

const cx = classNames.bind(styles);

const PlatformImagePresenter = ({
  days,
  hours,
  minutes,
  seconds,
  progress
}) => {
  return (
    <div className={cx("container")}>
      <div className={cx("box")}>
        <span className={cx("title")}>BLOCKCELL PLATFORM</span>
        <div className={cx("underline")} />
        <img
          alt={"platform"}
          src={require("../../../Media/Images/Home/PlatformImage/platformImage.png")}
        />
        <div className={cx("d-day")}>
          <div>{days}</div>
          <div>{hours}</div>
          <div>{minutes}</div>
          <div>{seconds}</div>
        </div>
        <div className={cx("progress-bar-container")}>
          <ProgressBar
            height={27}
            percent={progress}
            filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
            text={progress}
          />
        </div>
      </div>
    </div>
  );
};

export default PlatformImagePresenter;
