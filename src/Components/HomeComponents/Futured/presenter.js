import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Futured = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("box")}>
        <span className={cx("title")}>Futured</span>
        <div className={cx("under-line")} />
        <p className={cx("desc")}>
          BCT를 보유함으로써 거래 수수료 수익의 80%를 분배 받을 수 있습니다.
          수수료 환급은 비트코인이나 이더리움 혹은 KRW로 상황에 맞게 전환됩니다.
          <br />
          BCT는 사용자의 보유량에 따라 지급되는 일일 Air Drop 뿐만 아니라 추후
          구축될 거래소 신규상장 프로젝트(IEO, ICO) Air Drop도 같이 합니다.
          <br />
          BCT는 신규 프로젝트 상장이나 IEO, ICO를 진행할 때 실 거래소 사용자들의
          수익 및 혜택을 최우선적으로 생각합니다. 따라서 토큰 보유시 거래소에서
          진행하는
          <br />
          신규상장, IEO, ICO와 관련해 해당 프로젝트 유통물량의 일부를 BCT
          보유비율에 따라 Air Drop 할 예정입니다.
        </p>
        <p className={cx("desc2")}>
          BCT는 신규상장, IEO, ICO 프로젝트와 협상할때 사용이 될 것입니다.
        </p>
        <div className={cx("second-row")}>
          <div className={cx("left")}>
            <div className={cx("item")}>
              <div className={cx("item-title")}>
                <img
                  alt={"gearwheel"}
                  className={cx("gear")}
                  width={"40px"}
                  src={require("../../../Media/Images/Home/Futured/gearwheels.png")}
                />
                <span>방식 1</span>
              </div>
              <p className={cx("item-desc")}>
                Lidting fee 없이 상장하는 경우
                <br />
                BCT 보유자에게 지급 할 Air Drop 물량확보
              </p>
            </div>
            <div className={cx("item")}>
              <div className={cx("item-title")}>
                <img
                  alt={"gearwheel"}
                  className={cx("gear")}
                  width={"40px"}
                  src={require("../../../Media/Images/Home/Futured/gearwheels.png")}
                />
                <span>방식 2</span>
              </div>
              <p className={cx("item-desc")}>
                Lidting fee 대신 해당 프로젝트가 BCT 일정 지분 시장가 매수를
                통해
                <br />
                확보 후 프로젝트 상장 절차진행, BCT는 거래소에서 발생하는
                일정부분의
                <br />
                수익을 사용자들과 공유하는 플랫폼입니다.
              </p>
            </div>
          </div>
          <div className={cx("right")}>
            <img
              alt={"future"}
              className={cx("future")}
              width={"430px"}
              src={require("../../../Media/Images/Home/Futured/futured.png")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Futured;
