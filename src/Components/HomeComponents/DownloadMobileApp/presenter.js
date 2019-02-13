import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const DownloadMobileApp = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("box")}>
        <div className={cx("column")}>
          <span className={cx("title")}>Download MobileApp</span>
          <div className={cx("under-line")} />
          <p className={cx("upper-contents")}>
            각각의 생태계 구성원 별로 사용 할 수 있도록 다양한
            <br />
            Module을 제공할 예정입니다. OS, Device. Platform에 대응
            <br />할 수 있도록 별도의 Asset 형태로 지공하고자 합니다.
          </p>
          <p className={cx("lower-contents")}>
            • &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Windows OS, Personal PC base Module
            <br />
            • &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Linux 계열 OS, Personal PC, Server
            Machine
            <br />
            • &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mobile Base SDK, Google Play Store,
            IOS App store Contents
            <br />• &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For Customer based Service.
          </p>
          <img
            className={cx("download-button")}
            alt={"downbutton"}
            src={require("../../../Media/Images/Home/DownLoadMobile/downbutton.png")}
          />
        </div>
        <div className={cx("column")}>
          <img
            className={cx("big-image")}
            alt={"asd"}
            src={require("../../../Media/Images/Home/DownLoadMobile/dowload-mobile.png")}
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadMobileApp;
