import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const NavVarPresenter = ({
  seperated,
  scrollToTop,
  scrollToAboutUs,
  scrollToPlatForm,
  scrollToAllocation,
  scrollToFutured,
  scrollToRoadMap,
  scrollToOurTeam
}) => {
  return (
    <div className={cx("outer")}>
      <div
        className={
          seperated ? cx("outer-container", "seperated") : cx("outer-container")
        }
      >
        <div className={cx("container")}>
          <div className={cx("logo")}>
            <img
              alt={"logo"}
              onClick={scrollToTop}
              src={require("../../../Media/Images/Home/NavVar/logo.png")}
            />
          </div>
          <div className={cx("items")}>
            <span onClick={scrollToAboutUs}>ABOUT US</span>
            <span onClick={scrollToPlatForm}>PLATFORM</span>
            <span onClick={scrollToAllocation}>ALLOCATIONS</span>
            <span onClick={scrollToFutured}>FUTURED</span>
            <span onClick={scrollToRoadMap}>ROAD MAP</span>
            <span onClick={scrollToOurTeam}>OUR TEAM</span>
            <a href={"/static/Images/preparing.png"}>
              <span>
                WHITE PAPER <i class="fas fa-chevron-down" />
              </span>
            </a>
          </div>
          <div className={cx("icon")}>
            <i class="fas fa-list" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavVarPresenter;
