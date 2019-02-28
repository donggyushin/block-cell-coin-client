import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import URL from "../../../URL";
import DEV from "../../../Dev";
import Fade from "react-reveal/Fade";

const cx = classNames.bind(styles);

const NavVarPresenter = ({
  seperated,
  scrollToTop,
  scrollToAboutUs,
  scrollToPlatForm,
  scrollToAllocation,
  scrollToFutured,
  scrollToRoadMap,
  scrollToOurTeam,
  dropdown,
  clickhitePaper
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
            <div className={cx("dropdown-menu-item-container")}>
              <span onClick={clickhitePaper}>
                WHITE PAPER <i class="fas fa-chevron-down" />
              </span>

              <Fade top>
                <div
                  className={
                    dropdown ? cx("dropdown-menu-items") : cx("dropdown-false")
                  }
                  ref="area"
                >
                  <a
                    href={
                      DEV
                        ? `${URL.serverUrlDev}static/Images/preparing.png`
                        : `${URL.serverUrlPrd}static/Images/preparing.png`
                    }
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button>VIEW</button>
                  </a>
                  <div className={cx("line")} />
                  <a
                    href={
                      DEV
                        ? `${URL.serverUrlDev}api/files/download/preparing.png`
                        : `${URL.serverUrlPrd}api/files/download/preparing.png`
                    }
                  >
                    <button>DOWNLOAD</button>
                  </a>
                </div>
              </Fade>
            </div>
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
