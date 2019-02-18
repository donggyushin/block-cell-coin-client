import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ProofOfHistory = () => {
  return (
    <div className={cx("container")}>
      <span className={cx("title")}>Proof Of Hybrid</span>
      <div className={cx("under-line")} />
      <p className={cx("contents")}>
        BCT는 블록체인의 생성과 네트워크 유지를 위해 Proof of Work(작업증명방식)
        그리고 Proof of take(지분증명방식)를 함께 사용하는 하이브리드 증명
        방식을 사용합니다. 일정한 수량의 블록이 채굴된 뒤에는 Proof of Work
        방식의 채굴 프로세스는 종료되며, 이후부터는 Proof of Stake 방식의
        채굴만으로 네트워크 유지와 트랜젝션 컨펌이 이루어집니다.
      </p>
      <div className={cx("body")}>
        <div className={cx("column")}>
          <div className={cx("item")}>
            <div className={cx("title2")}>
              <img
                alt={cx("proof")}
                width={"45px"}
                src={require("../../../Media/Images/Home/ProofOfHybrid/rocket.png")}
              />
              <span>
                Proof of Work Phase :<br />
                Create BCT,Mainnet Blockchain & Network Test
              </span>
            </div>
            <div className={cx("contents2")}>
              지분증명방식의 채굴 프로세스를 통해 제네시스 블록을 생성합니다.
              제네시스 블록이 생성됨과 동시에 BCT Platform에서 BCT가 생성되며,
              Mainnet상의 블록체인 데이터를 지속적으로 생성합니다. <br />
              <br />이 기간에는 Proof of Work Phase가 마무리됩니다. 개별적인
              기간에 생성되는 BCT은 기간 및 수량에 따라 그 사용처를 구분합니다.
              해당 코인들에 대한 정보는 추후에 제공될 블록체인 데이터의
              조회사이트를 통해 누구나 확인할 수 있습니다. 최초 발행 코인은
              500억개 입니다.
            </div>
          </div>
          <div className={cx("item")}>
            <div className={cx("title2")}>
              <img
                alt={cx("proof")}
                width={"45px"}
                src={require("../../../Media/Images/Home/ProofOfHybrid/graph.png")}
              />
              <span>
                Ice Age Phase :<br />
                Distribute BCT, Maturing Blockchain Data
              </span>
            </div>
            <div className={cx("contents2")}>
              BCT Platform을 통해 BCT를 분배합니다. 점차적으로 증가하는 BCT 이체
              정보와 보유 내역을 기록하는 블록체인 데이터의 정보를 보호하기 위해
              지속적인 채굴을 통하여 성숙도를 증가시킵니다. Ice Age Phase 기간
              동안의 블록 보상은 한 번 블록이 생성되는 시간 동안에 네트워크
              메모리 풀에 누적되며, 거래가 이루어질 때마다 누적되는 거래
              수수료(최소 0.00001)의 합계가 보상으로 분배됩니다.
            </div>
          </div>
        </div>
        <div className={cx("column")}>
          <div className={cx("item")}>
            <div className={cx("title2")}>
              <img
                alt={cx("proof")}
                width={"45px"}
                src={require("../../../Media/Images/Home/ProofOfHybrid/money-flower.png")}
              />
              <span>
                Pure Proof of Stake Phase :<br />
                POS Distribute, Maturing Proof of Stake User Memory Pool
              </span>
            </div>
            <div className={cx("contents2")}>
              BCT의 분배와 POW 데이터 블록 성숙기간이 끝남과 동시에 BCT
              보유자들은 각자의 Full Node BCT 지갑을 통해 POS 이자를 제공 받을
              수 있습니다. 이 때 BCT는 지갑에 저장되어 사용되고 있지 않아야
              합니다.
              <br />
              <br />
              BCT는 Ice Age 기간을 지남으로써 계획한 생태계 조성 프로젝트의
              기반을 마련함과 동시에 블록체인 시스템의 Proof of Stake 지분 증명
              네트워크 유지 방식으로의 전환을 위한 성숙기를 맞이하게 됩니다.
              <br />
              Proof of Stake 방식의 증명 프로세스는 블록을 생성하는데 많은 해시
              결과를 요구하지 않으며, 완전한 분산 환경과 자율성을 가지고
              있습니다.
              <br />
              <br />
              Proof of Stake 지분증명방식은 모든 지분보유자들에게 최소한의
              혜택을 보장합니다. <br />
              만약, 당신이 코인을 사용하지 않고 보유하고 있다면, Pure Proof of
              Stake Phase의 Minting 알고리즘을 통해 일정 부분 보상을 받을 수
              있습니다.
              <br /> <br />
              PoS 채굴 보상을 위해 총 발행량은 연간 5% 씩 80년간 증가 됩니다.
              <br />
              코인 발행에 대한 보다 상세한 내용과 스케줄은 ICO 전에 공개할
              예정입니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProofOfHistory;
