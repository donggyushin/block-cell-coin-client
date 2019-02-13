import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CapitalPhotoPresenter = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("upper")}>
        <div className={cx("text-container")}>
          <div className={cx("think-text")}>
            <span>BLOCKCELL</span>
            <span>BLOCKCHAIN</span>
            <span>PLATFORM SERVICE</span>
          </div>
          <div className={cx("thin-text")}>
            <span>
              BCT는 블록체인 기술을 기반으로 하는 탈 중앙화 플랫폼 입니다.
            </span>
            <span>
              부동산 개발, 금융, 게임, IT관련 사업의 가치와 글로벌 빅데이터
            </span>
            <span>가치가 함께 하는 Economy 생태계 조성이 목표입니다.</span>
          </div>
        </div>
        <div className={cx("capital-image-container")}>
          <img
            alt={"capital"}
            src={require("../../../Media/Images/Home/CapitalPhoto/CapitalPhoto.png")}
          />
        </div>
      </div>

      <div className={cx("bottom")}>
        <div className={cx("left")}>
          <span>국내외 거래소 2곳 상장 예정</span>
        </div>
        <div className={cx("right")}>
          <span>3월 중 IEO 예정</span>
        </div>
      </div>
    </div>
  );
};

export default CapitalPhotoPresenter;
