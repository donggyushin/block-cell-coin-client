import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import DEV from "../../../../Dev";

const cx = classNames.bind(styles);

const DropdownMenu = ({ dropdown }) => {
  return (
    <div
      className={dropdown ? cx("dropdown-menu-items") : cx("dropdown-false")}
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
  );
};

export default DropdownMenu;
