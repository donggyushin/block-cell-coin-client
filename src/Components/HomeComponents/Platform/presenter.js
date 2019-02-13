import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const PlatformPresenter = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("box")}>
        <div className={cx("row")}>
          <span>BLOCKCELL PLATFORM</span>
          <div className={cx("underline")} />
        </div>
        <div className={cx("row", "under-row")}>
          <div className={cx("column")}>
            <div className={cx("row", "first-row")}>
              <div className={cx("title")}>
                <img
                  src={require("../../../Media/Images/Home/Platform/map.png")}
                  alt={"title"}
                />
                <span>BCT는 부동산 유동화 자산에 초점을 맞춘 암호화폐</span>
              </div>
              <div className={cx("contents")}>
                <p>
                  - 포트폴리오에 포함된 부동산에서 창출되는 현금 흐름을 암호화폐
                  거래소에
                  <br />
                  &nbsp;&nbsp;정기적으로 배당
                  <br />
                  - 부동산 투자신탁(REIT)보다 더 큰 유연성과 다양성을 제공하며
                  제반 비용이 저렴하여
                  <br />
                  &nbsp;&nbsp;더 많은 이익배당 가능
                  <br />
                  - 부동산에 대한 글로벌 커뮤니티의 접근성 확대
                  <br />
                </p>
              </div>
            </div>
            <div className={cx("row")}>
              <div className={cx("title")}>
                <img
                  src={require("../../../Media/Images/Home/Platform/chat-icon.png")}
                  alt={"title"}
                />
                <span>모든 게임 참여자에게 제공되는 보상 시스템</span>
              </div>
              <div className={cx("contents")}>
                <p>
                  BCT는 플랫폼에서 발생한 수익을 기반으로 모든 참여자들과 수익을
                  공유합니다.
                  <br />
                  이를 통해 플랫폼의 활성화를 유도합니다.
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;- GAMER : 난수 교환시스템 참여 및
                  마일리지 보상
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;- COIN HOLDER : PoS 채굴보상 - MINER :
                  PoW 채굴보상
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;- MARKETER : 홍보 및 유저 유입에 따른
                  보상
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;- CONTENTS PROVIDER : 컨텐츠 수익에
                  비례한 수익배분
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className={cx("column")}>
            <div className={cx("row", "second-colum-first")}>
              <div className={cx("title")}>
                <img
                  src={require("../../../Media/Images/Home/Platform/bill-icon.png")}
                  alt={"title"}
                />
                <span>확실한 사용처와 Business Model</span>
              </div>
              <div className={cx("contents")}>
                <p>
                  BCT 플랫폼은 부동산과 같이 실체가 분명한 사업모델로 참여자의
                  수익을
                  <br />
                  증대시킵니다. 또한, 거래소 기축 암호화폐로써 다른 암호화폐
                  전환과
                  <br />
                  페이결제 시스템, 데벗카드에도 사용됩니다.
                </p>
              </div>
            </div>
            <div className={cx("row", "second-line-second")}>
              <div className={cx("title")}>
                <img
                  src={require("../../../Media/Images/Home/Platform/horizon-icon.png")}
                  alt={"title"}
                />
                <span>블록체인을 통한 공정성과 신뢰성 확보</span>
              </div>
              <div className={cx("contents")}>
                <p>
                  BCT는 블록체인과 암호화폐 (메인넷)를 적용하여 공정성과
                  신뢰성을
                  <br />
                  확보합니다. BCT 메인 네트워크는 블록체인 시스템으로 공개되어
                  <br />
                  투명하게 운영되기 때문에 부동산 유동화 자산관리와 게임등의
                  여러가지 데이터 조작
                  <br />
                  가능성을 원천 차단합니다. 또한, RANDOM SEEDS 생성을 위해
                  사용된 블록체인
                  <br />
                  시스템 데이터는 모든 이용자들에게 공개되어 공정성을
                  확보합니다.
                </p>
              </div>
            </div>
            <div className={cx("row")}>
              <div className={cx("title")}>
                <img
                  src={require("../../../Media/Images/Home/Platform/fall-icon.png")}
                  alt={"title"}
                />
                <span>암호화폐를 통한 입출금 편리성 제공 및 수수료 최소화</span>
              </div>
              <div className={cx("contents")}>
                <p>
                  BCT는 입출금의 편리성을 제공하며, 수수료를 최소화 합니다.
                  <br />
                  기존 카드와 은행을 통한 입출금은 수수료가 매우높고 절차가
                  복잡하였습니다.
                  <br />
                  또한, 은행을 통한 거래는 모든 데이터가 노출되어 개인정보에
                  대한 보호가 이뤄지지
                  <br />
                  않았습니다. BCT는 암호화폐를 사용함으로써 최소한의 수수료,
                  입출금 편리성과 더불어
                  <br />
                  익명성으로 가장 확실한 개인정보 보호를 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformPresenter;
