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
      <div className={cx("mobile-box")}>
        <span className={cx("title")}>BLOCKCELL PLATFORM</span>
        <div className={cx("underline")} />
        <div className={cx("image-container")}>
          <img
            alt={"aj"}
            src={require("../../../Media/Images/Home/PlatformImage/platformimage2.png")}
          />
          <img
            alt={"aj"}
            src={require("../../../Media/Images/Home/PlatformImage/platformimage3.png")}
          />
        </div>
        <div className={cx("d-day-count-and-graph")}>
          <div className={cx("mobile-d-day")}>
            <div>{days}</div>
            <span>:</span>
            <div className={cx("hours")}>{hours}</div>

            <div>{minutes}</div>
            <span>:</span>
            <div>{seconds}</div>
          </div>
          <div className={cx("mobile-d-day-text")}>
            <span className={cx("days")}>DAYS</span>
            <span className={cx("hours")}>HOURS</span>
            <span className={cx("minutes")}>MINUTES</span>
            <span className={cx("seconds")}>SECONDS</span>
          </div>
          <div className={cx("text-on-graph")}>
            <span>BlockCellToken</span>
            <span>Total Scale</span>
          </div>
          <div className={cx("graph-container")}>
            <ProgressBar
              height={27}
              percent={progress}
              filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
              text={progress}
            />
          </div>
          <div className={cx("text-under-graph")}>
            <span className={cx("two-five")}>2,500,000,000</span>
            <span>5,000,000,000</span>
          </div>
          <div className={cx("button-container")}>
            <button>START</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformImagePresenter;
