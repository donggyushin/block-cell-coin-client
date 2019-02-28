import React from "react";
import NavVarPresenter from "./presenter";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { animateScroll as scroll } from "react-scroll";
import Fade from "react-reveal/Fade";
import URL from "../../../URL";
import DEV from "../../../Dev";

const cx = classNames.bind(styles);

const scrollOptions = {
  duration: 800,
  delay: 0,
  smooth: "easeInOutQuart"
};

class NavVarContainer extends React.Component {
  state = {
    seperated: false,
    dropdown: false
  };

  componentDidMount() {
    const { _handleScroll } = this;
    const currentHeight = document.documentElement.scrollTop;

    if (currentHeight >= 62) {
      this.setState({
        ...this.state,
        seperated: true
      });
    }

    window.addEventListener("scroll", _handleScroll);
    window.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    const { _handleScroll } = this;
    window.removeEventListener("scroll", _handleScroll);
    window.removeEventListener("mousedown", this.handleClick, false);
  }

  render() {
    const { seperated, dropdown } = this.state;
    const {
      scrollToTop,
      scrollToAboutUs,
      scrollToPlatForm,
      scrollToAllocation,
      scrollToFutured,
      scrollToRoadMap,
      scrollToOurTeam,
      clickhitePaper
    } = this;
    return (
      // <NavVarPresenter
      //   seperated={seperated}
      //   scrollToTop={scrollToTop}
      //   scrollToAboutUs={scrollToAboutUs}
      //   scrollToPlatForm={scrollToPlatForm}
      //   scrollToAllocation={scrollToAllocation}
      //   scrollToFutured={scrollToFutured}
      //   scrollToRoadMap={scrollToRoadMap}
      //   scrollToOurTeam={scrollToOurTeam}
      //   dropdown={dropdown}
      //   clickhitePaper={clickhitePaper}
      // />
      <div className={cx("outer")}>
        <div
          className={
            seperated
              ? cx("outer-container", "seperated")
              : cx("outer-container")
          }
        >
          <div className={cx("container")}>
            <div className={cx("logo")}>
              <img
                alt={"logo"}
                onClick={scrollToTop}
                src={require("../../../Media/Images/Home/NavVar/logo.png")}
              />
            </div>
            <div className={cx("items")}>
              <span onClick={scrollToAboutUs}>ABOUT US</span>
              <span onClick={scrollToPlatForm}>PLATFORM</span>
              <span onClick={scrollToAllocation}>ALLOCATIONS</span>
              <span onClick={scrollToFutured}>FUTURED</span>
              <span onClick={scrollToRoadMap}>ROAD MAP</span>
              <span onClick={scrollToOurTeam}>OUR TEAM</span>
              <div className={cx("dropdown-menu-item-container")}>
                <span onClick={clickhitePaper}>
                  WHITE PAPER <i class="fas fa-chevron-down" />
                </span>

                <Fade top>
                  <div
                    className={
                      dropdown
                        ? cx("dropdown-menu-items")
                        : cx("dropdown-false")
                    }
                    ref={node => (this.node = node)}
                  >
                    <a
                      href={
                        DEV
                          ? `${URL.serverUrlDev}static/Images/preparing.png`
                          : `${URL.serverUrlPrd}static/Images/preparing.png`
                      }
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <button>VIEW</button>
                    </a>
                    <div className={cx("line")} />
                    <a
                      href={
                        DEV
                          ? `${
                              URL.serverUrlDev
                            }api/files/download/preparing.png`
                          : `${
                              URL.serverUrlPrd
                            }api/files/download/preparing.png`
                      }
                    >
                      <button>DOWNLOAD</button>
                    </a>
                  </div>
                </Fade>
              </div>
            </div>
            <div className={cx("icon")}>
              <i class="fas fa-list" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleClick = e => {
    const { closeDropdown } = this;
    if (this.node.contains(e.target)) {
      console.log("click inside");
      return;
    }

    closeDropdown();
  };

  closeDropdown = () => {
    this.setState({
      ...this.state,
      dropdown: false
    });
  };

  clickhitePaper = () => {
    this.setState({
      ...this.state,
      dropdown: !this.state.dropdown
    });
  };

  _handleScroll = () => {
    const height = document.documentElement.scrollTop;
    if (height >= 62) {
      this.setState({
        ...this.state,
        seperated: true
      });
    } else {
      this.setState({
        ...this.state,
        seperated: false
      });
    }
  };

  scrollToTop = () => {
    scroll.scrollToTop(scrollOptions);
  };

  scrollToAboutUs = () => {
    scroll.scrollTo(724, scrollOptions);
  };

  scrollToPlatForm = () => {
    scroll.scrollTo(2243, scrollOptions);
  };

  scrollToAllocation = () => {
    scroll.scrollTo(3928, scrollOptions);
  };

  scrollToFutured = () => {
    scroll.scrollTo(7397, scrollOptions);
  };

  scrollToRoadMap = () => {
    scroll.scrollTo(11604, scrollOptions);
  };

  scrollToOurTeam = () => {
    scroll.scrollTo(12331, scrollOptions);
  };
}

export default NavVarContainer;
