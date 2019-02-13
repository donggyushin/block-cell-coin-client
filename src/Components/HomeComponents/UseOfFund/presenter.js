import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const UseOfFund = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("box")}>
        <span className={cx("title")}>Use Of Fund</span>
        <div className={cx("under-line")} />
        <p className={cx("contents")}>
          우리는 BCT 프로젝트와 BCT 생태계의 발전을 믿는 개인 및 조직을 초대하여
          BCT를 기존 암호화폐로 기탁받게 됩니다.
          <br />
          ICO를 통해 유통되는 COIN은 정확히 50,000,000,000 (500억) 개입니다.
        </p>
        <img
          alt={"use-of-fund"}
          src={require("../../../Media/Images/Home/UseOfFund/use-of-fund.png")}
        />
      </div>
    </div>
  );
};

export default UseOfFund;
