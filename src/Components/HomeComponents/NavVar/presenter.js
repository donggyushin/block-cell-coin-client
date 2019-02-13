import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const NavVarPresenter = () => {
  return (
    <div className={cx("outer")}>
      <div className={cx("container")}>
        <div className={cx("logo")}>
          <img
            alt={"logo"}
            src={require("../../../Media/Images/Home/NavVar/logo.png")}
          />
        </div>
        <div className={cx("items")}>
          <span>ABOUT US</span>
          <span>PLATFORM</span>
          <span>ALLOCATIONS</span>
          <span>FUTURED</span>
          <span>ROAD MAP</span>
          <span>OUR TEAM</span>
          <span>
            WHITE PAPER <i class="fas fa-chevron-down" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavVarPresenter;
