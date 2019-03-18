import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Allocation = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("box")}>
        <span className={cx("title")}>ALLOCATIONS</span>
        <div className={cx("under-line")} />
        {/* <img
          alt={"allocation"}
          className={cx("first-img")}
          src={require("../../../Media/Images/Home/Allocation/allocation1.png")}
        />
        <img
          alt={"allocation"}
          className={cx("second-img")}
          src={require("../../../Media/Images/Home/Allocation/allocation2.png")}
        />
        <img
          alt={"allocation"}
          src={require("../../../Media/Images/Home/Allocation/allocation3.png")}
        /> */}
        <img
          alt={"chart"}
          src={require("../../../Media/Images/Home/Allocation/chart.png")}
        />
      </div>
    </div>
  );
};

export default Allocation;
