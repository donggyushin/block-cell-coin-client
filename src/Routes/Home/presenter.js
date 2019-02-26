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
import Fade from "react-reveal/Fade";

const cx = classNames.bind(styles);

const HomePage = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("navvar-container")}>
        <HomeNavVar />
      </div>
      <div className={cx("capital-photo-container")}>
        <Fade bottom>
          <HomeCapitalPhoto />
        </Fade>
      </div>
      <div className={cx("about-us-container")}>
        <Fade bottom>
          <HomeAboutUs />
        </Fade>
      </div>
      <div className={cx("business-model-container")}>
        <Fade bottom>
          <HomeBusinessModel />
        </Fade>
      </div>
      <div className={cx("platform-container")}>
        <Fade bottom>
          <HomePlatform />
        </Fade>
      </div>
      <div className={cx("platform-image-container")}>
        <HomePlatformImage />
      </div>
      <div className={cx("allocation-container")}>
        <Fade bottom>
          <HomeAllocation />
        </Fade>
      </div>
      <div className={cx("use-of-fund-container")}>
        <Fade bottom>
          <HomeUseOfFund />
        </Fade>
      </div>
      <div className={cx("mobile-app-down-container")}>
        <Fade bottom>
          <HomeDownloadMobileApp />
        </Fade>
      </div>
      <div className={cx("futured-container")}>
        <Fade bottom>
          <HomeFutured />
        </Fade>
      </div>
      <div className={cx("what-bct-does-container")}>
        <Fade bottom>
          <HomeWhatBctDoes />
        </Fade>
      </div>
      <div className={cx("bct-main-net-container")}>
        <Fade bottom>
          <HomeBctMainNet />
        </Fade>
      </div>
      <div className={cx("proof-of-hybrid-container")}>
        <Fade bottom>
          <HomeProofOfHistory />
        </Fade>
      </div>
      <div className={cx("roadmap-container")}>
        <Fade bottom>
          <HomeRoadMap />
        </Fade>
      </div>
      <div className={cx("business-team-container")}>
        {/* <Fade bottom> */}
        <HomeBusinessTeam />
        {/* </Fade> */}
      </div>
      <div className={cx("our-client-container")}>
        <Fade bottom>
          <HomeOurClient />
        </Fade>
      </div>
    </div>
  );
};

export default HomePage;
