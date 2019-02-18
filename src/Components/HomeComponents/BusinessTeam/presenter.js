import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const BusinessTeam = () => {
  return (
    <div className={cx("container")}>
      <span className={cx("title")}>Business Team</span>
      <div className={cx("underline")} />
      <div className={cx("body")}>
        <div className={cx("row")}>
          <Team
            officialResponsibility={"CEO"}
            name1={"Mr. Choi"}
            name2={"Changsik Choi"}
          />
          <Team
            officialResponsibility={"CFO"}
            name1={"Mr. Lee"}
            name2={"Seungbae Lee"}
          />
          <Team officialResponsibility={"CTO"} />
        </div>
        <div className={cx("row")}>
          <Team officialResponsibility={"CLO"} name1={"Mr. Kang"} />
          <Team
            officialResponsibility={"CMO & Speclalist"}
            name1={"Mr. Cho"}
            name2={"YongKwan Cho"}
          />
          <Team
            officialResponsibility={"COO"}
            name1={"Mr. Yang"}
            name2={"SeungTaek Yang"}
            desc={
              "ST글로벌 회장 / (전)정보통신부장관서울대학교�전기공학, 버지니아공과대학교 대학원에서 전기공학 석사학위를 취득하였고, 벨 연구소에서 근무하며 브루클린 공과대학 대학원에서 전기공학 박사학위를 취득했습니다. ETRI에서 TDX(全전자 교환기) 개발 단장으로서 개발을 총지휘 하였으며 한국통신진흥, 한국통신기술 사장을 역임했습니다. 한국전자통신연구원 (ETRI) 원장으로서 CDMA 기술을 세계 최초로 상용화하였고 한국정보통신대학교(ICU) 초대 총장을 거쳐 정보통신부 장관, 동명대학교 총장 , 한국전자통신연구원 초빙 구원한국과학기술원 특훈석좌 교수를 역임했습니다. 상훈으로는 대한전자공학회 전자대상과 대한민국과학기술상을 수상하였고 국민훈장인 모란장과 목련장 등이 있습니다. 한국 정보통신 역사의 산 증인이며, 지"
            }
          />
        </div>
      </div>
      <span className={cx("title", "second-title")}>Advisor</span>
      <div className={cx("underline")} />
      <div className={cx("body")}>
        <div className={cx("row")}>
          <Team />
          <Team />
          <Team />
        </div>
      </div>
    </div>
  );
};

const Team = ({ officialResponsibility, name1, name2, desc }) => {
  return (
    <div className={cx("team")}>
      <div className={cx("circle")}>Preparing Image...</div>
      <span className={cx("official-responsibility")}>
        {officialResponsibility}
      </span>
      <span className={cx("name")}>{name1}</span>
      <span className={cx("name")}>{name2}</span>
      <p className={cx("desc")}>{desc}</p>
    </div>
  );
};

export default BusinessTeam;
