import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import HomeCapitalPhoto from "../../Components/HomeComponents/CapitalPhoto";
import HomeNavVar from "../../Components/HomeComponents/NavVar";
import HomeAboutUs from "../../Components/HomeComponents/AboutUs";
import HomeBusinessModel from "../../Components/HomeComponents/BusinessModel";
import HomePlatform from "../../Components/HomeComponents/Platform";
import HomePlatformImage from "../../Components/HomeComponents/PlatformImage";
import HomeAllocation from "../../Components/HomeComponents/Allocation";
import HomeUseOfFund from "../../Components/HomeComponents/UseOfFund";
import HomeDownloadMobileApp from "../../Components/HomeComponents/DownloadMobileApp";
import HomeFutured from "../../Components/HomeComponents/Futured";
import HomeWhatBctDoes from "../../Components/HomeComponents/WhatBCTDoes";
import HomeBctMainNet from "../../Components/HomeComponents/BCTMainNet";
import HomeProofOfHistory from "../../Components/HomeComponents/ProofOfHistory";
import HomeRoadMap from "../../Components/HomeComponents/RoadMap";
import HomeBusinessTeam from "../../Components/HomeComponents/BusinessTeam";
import HomeOurClient from "../../Components/HomeComponents/OurClients";

const cx = classNames.bind(styles);

const HomePage = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("navvar-container")}>
        <HomeNavVar />
      </div>
      <div className={cx("capital-photo-container")}>
        <HomeCapitalPhoto />
      </div>
      <div className={cx("about-us-container")}>
        <HomeAboutUs />
      </div>
      <div className={cx("business-model-container")}>
        <HomeBusinessModel />
      </div>
      <div className={cx("platform-container")}>
        <HomePlatform />
      </div>
      <div className={cx("platform-image-container")}>
        <HomePlatformImage />
      </div>
      <div className={cx("allocation-container")}>
        <HomeAllocation />
      </div>
      <div className={cx("use-of-fund-container")}>
        <HomeUseOfFund />
      </div>
      <div className={cx("mobile-app-down-container")}>
        <HomeDownloadMobileApp />
      </div>
      <div className={cx("futured-container")}>
        <HomeFutured />
      </div>
      <div className={cx("what-bct-does-container")}>
        <HomeWhatBctDoes />
      </div>
      <div className={cx("bct-main-net-container")}>
        <HomeBctMainNet />
      </div>
      <div className={cx("proof-of-hybrid-container")}>
        <HomeProofOfHistory />
      </div>
      <div className={cx("roadmap-container")}>
        <HomeRoadMap />
      </div>
      <div className={cx("business-team-container")}>
        <HomeBusinessTeam />
      </div>
      <div className={cx("our-client-container")}>
        <HomeOurClient />
      </div>
    </div>
  );
};

export default HomePage;
