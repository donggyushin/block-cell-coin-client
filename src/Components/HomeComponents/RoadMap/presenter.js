import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const RoadMap = () => {
  return (
    <div className={cx("container")}>
      <span className={cx("title")}>ROAD MAP</span>
      <div className={cx("under-line")} />
      <img
        alt={"roadmap"}
        width={"100%"}
        src={require("../../../Media/Images/Home/RoadMap/roadmap.png")}
      />
      <div className={cx("image-desc")}>
        <div className={cx("item")}>
          <span className={cx("year")}>2018</span>
          <p className={cx("contents")}>
            <span>(주)</span>블럭셀 설립
            <br />
            부동산 자산 유동화 기초기획
            <br />
            기초 전략사업 타당성 검토
            <br />
            게임개발 업체와 MOU체결
          </p>
        </div>
        <div className={cx("item")}>
          <span className={cx("year")}>2019 1Q</span>
          <p className={cx("contents")}>
            <span>(주)</span>블럭셀 법인등록
            <br />
            부동산 자산유동화를 위한
            <br />
            블록체인 기반의 부동산 플랫폼 개발 글로벌 유저 대상 국제거래소 개발
            <br />
            MOU업체와 MOA작성 후<br />
            본격적 게임개발
            <br />
            <br />
            BLOCK CELL TOKEN 1차 private
          </p>
        </div>
        <div className={cx("item")}>
          <span className={cx("year")}>2019 2Q</span>
          <p className={cx("contents")}>
            글로벌 유저 대상 국제거래소 오픈 BLOCK CELL TOKEN 2차 pre sale
          </p>
        </div>
        <div className={cx("item")}>
          <span className={cx("year")}>2019 3Q</span>
          <p className={cx("contents")}>
            블록체인 기반의 부동산 플랫폼 오픈 게임개발 BETA TEST
          </p>
        </div>
        <div className={cx("item")}>
          <span className={cx("year")}>2019 4Q</span>
          <p className={cx("contents")}>
            암호화폐 전문은행 오픈
            <br />
            개발게임 오픈 BLOCK CELL TOKEN 거래소 상장
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
