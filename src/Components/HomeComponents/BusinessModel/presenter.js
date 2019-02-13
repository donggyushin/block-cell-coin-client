import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const BusinessModel = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("title")}>
        <span>핵심 비지니스 모델</span>
      </div>
      <div className={cx("under-line")} />
      <div className={cx("contents")}>
        <div className={cx("column")}>
          <div className={cx("item-title")}>
            <img
              alt={"arrow"}
              src={require("../../../Media/Images/Home/BusinessModel/arrow-icon.png")}
            />
            <span>안정적 사업운영을 위한 다양한 투자</span>
          </div>
          <div className={cx("item-contents")}>
            <p>
              - 부동산 관련 개발사업
              <br />
              - 부동산 개발관련 부대사업 일체
              <br />
              (철거, 분양, 건물관리 및 임대사업, 대지조성사업)
              <br />
              - HPV, SOC, BOT, BTO, PFV, NPL사업
              <br />
              - 금융(암호화폐 전문은행, 데빗카드 등) 블록체인 사업
              <br />
              - 게임, IT, VR 사업 등<br />- 제휴사를 통한 간접투자사업
            </p>
          </div>
        </div>
        <div className={cx("column")}>
          <div className={cx("item-title")}>
            <img
              alt={"arrow"}
              src={require("../../../Media/Images/Home/BusinessModel/router-icon.png")}
            />
            <div className={cx("title-text")}>
              <span>Main-Net 구축을 통한 투명하고</span>
              <span>건전한 투자환경 조성</span>
            </div>
          </div>
          <div className={cx("item-contents")}>
            <p>
              - BCT는 그러한 단점을 보완하여 테스트를 거쳐 궁극적으로
              <br />
              자체 데이터 저장 및 운용을 위한 자체기술로 개발한
              <br />
              Main-Net을 구축할 것입니다.
              <br />
              - Main-Net은 사업의 핵심요소이며 사업과 투자자의 안정성을
              <br />
              위하여 보안, 경제성, 처리속도까지 모든 문제에 대응 가능하도록
              <br />
              개발 될 것입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModel;
