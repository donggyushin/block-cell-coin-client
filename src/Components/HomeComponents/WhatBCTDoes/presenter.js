import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const WhatBctDoes = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("row")}>
        <div className={cx("iten")}>
          <div className={cx("title")}>
            <img
              alt={"title"}
              width={"40px"}
              src={require("../../../Media/Images/Home/WhatBctDoes/castle.png")}
            />
            <span>신규 프로젝트 시드 라운지 투자 참여</span>
          </div>
          <p className={cx("contents")}>
            BCT가 인큐베이팅 / 엑셀러레이팅 / 마케팅 하는 프로젝트 시드 라운지
            <br />
            투자 참여권 시드라운지 투자 유치 오픈 후<br />
            BCT 뮤통물량 대비 일정비율의 보유자에게 권리를
            <br />
            부여합니다.
          </p>
        </div>

        <div className={cx("iten")}>
          <div className={cx("title")}>
            <img
              alt={"title"}
              width={"20px"}
              src={require("../../../Media/Images/Home/WhatBctDoes/money-pocket.png")}
            />
            <span>임대소득과 자본이득에 10% 수수료</span>
          </div>
          <p className={cx("contents")}>
            투자자는 BCT의 플랫폼을 통해 자신의 소득을 생성합니다. BCT는 투자자
            이익에 10%의 수수료를 부과함으로써 이익을 창출하며 재투자하여
            투자자에게 안정적인 이익 배분을 위하여 사용됩니다
          </p>
        </div>
        <div className={cx("iten")}>
          <div className={cx("title")}>
            <img
              alt={"title"}
              width={"40px"}
              src={require("../../../Media/Images/Home/WhatBctDoes/gearwheels.png")}
            />
            <span>게임 개발 및 IT, VR 관련사업</span>
          </div>
          <p className={cx("contents")}>
            국내 게임전문 유명사와 공동개발 및 지분참여 및 국내외 전문 업체와
            공동 진행 및 투자하여 BCT의 사용처 확대, 시세 안정화등의 생태계
            조성을 하겠습니다.
          </p>
        </div>
      </div>
      <div className={cx("row")}>
        <div className={cx("iten")}>
          <div className={cx("title")}>
            <img
              alt={"title"}
              width={"40px"}
              src={require("../../../Media/Images/Home/WhatBctDoes/up-icon.png")}
            />
            <span>정기적인 Buy-Back 을 통한 토큰가치 안정화</span>
          </div>
          <p className={cx("contents")}>
            정기적인 Buy-Back 을 통한 토큰가치 안정화 장기 Root Node 구축을 통한
            안정적인 수익창출과 교차상장을 통한 뮤통물량 분산화 BCT 보유자와
            관계자간의 정기적인 프라이빗 미팅 진행.
          </p>
        </div>
        <div className={cx("iten")}>
          <div className={cx("title")}>
            <img
              alt={"title"}
              width={"40px"}
              src={require("../../../Media/Images/Home/WhatBctDoes/similarwithreact.png")}
            />
            <span>전문가를 위한 subscrition</span>
          </div>
          <p className={cx("contents")}>
            부동산 광고를 하고자 하는 모든 전문가는 BCT 플랫폼 회원에게 사용,
            임대를 판매하거나 융자 P2P, C2C 거래를 지원할 수 있습니다.
          </p>
        </div>
        <div className={cx("iten")}>
          <div className={cx("title")}>
            <img
              alt={"title"}
              width={"40px"}
              src={require("../../../Media/Images/Home/WhatBctDoes/three-people.png")}
            />
            <span>기타 수익흐름</span>
          </div>
          <p className={cx("contents")}>
            BCT 전문 딜러 활동, 거래 및 임대 서비스를 통해 다른 수익원을 창출 할
            수 있습니다. 이는 BCT 플랫폼의 유지, 개발, 생태계 유지에 사용됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatBctDoes;
