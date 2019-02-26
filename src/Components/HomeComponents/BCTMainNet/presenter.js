import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const BctMainNet = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("box")}>
        <span className={cx("title")}>BCT MAIN NET</span>
        <div className={cx("under-line")} />
        <p className={cx("contents")}>
          Main-Net 은 사이트 Chain Engine, Backend Engine, Blockchain monitoring
          service 등 블록체인 운용의 확장성을 고려해서 설계를 진행 할 계획이며
          이는 추후 더욱 복잡한 정보를 블록에 올려 저장하거나 확장이 필요할 때
          Sidechain engine을 이용하여 별도의 chain으로 저장 및 확장이 가능하게
          됩니다.
          <br />
          <br />
          결국 Main-Net 은 사업의 중심이 될 것이며, BCT Economy생태계가 더욱
          확장될 수 있도록 구축될 예정이며 이는 기관 및 기업, 일반 투자자들에게
          안정된 수익을 제공하는 역할을 할 것입니다.
        </p>
        <img
          alt={"main-net"}
          // width={"600px"}
          src={require("../../../Media/Images/Home/BctMainNet/main-net.png")}
        />
      </div>
    </div>
  );
};

export default BctMainNet;
