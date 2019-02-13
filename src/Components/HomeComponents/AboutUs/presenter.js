import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const AboutUsPresenter = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("box")}>
        <div className={cx("image")}>
          <img
            alt={"token-building"}
            src={require("../../../Media/Images/Home/AboutUs/token-building.png")}
          />
        </div>
        <div className={cx("text-container")}>
          <div className={cx("title")}>
            <span>About Us</span>
          </div>
          <div className={cx("contents")}>
            <p>
              BCT(Block Cell Token)의 목표는 부동산
              <br />
              자산유동화, 게임개발, IT관련 사업, 투자등의
              <br />
              BCT 플랫폼을 확장하여 Economy생태계를
              <br />
              통한 참여자들 모두가 신뢰할 수 있고,
              <br />
              합리적인 투자 기회를 제공하는 것입니다.
              <br />
              BCT는 검증된 정보와 사업진행으로 참여자
              <br />
              모두가 활발히 참여할 수 있는 블록체인 연합
              <br />
              Economy 생태계를 조성 할 것입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPresenter;
