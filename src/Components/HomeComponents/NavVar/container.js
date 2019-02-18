import React from "react";
import NavVarPresenter from "./presenter";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

const scrollOptions = {
  duration: 800,
  delay: 0,
  smooth: "easeInOutQuart"
};

class NavVarContainer extends React.Component {
  state = {
    seperated: false
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
  }

  componentWillUnmount() {
    const { _handleScroll } = this;
    window.removeEventListener("scroll", _handleScroll);
  }

  render() {
    const { seperated } = this.state;
    const {
      scrollToTop,
      scrollToAboutUs,
      scrollToPlatForm,
      scrollToAllocation,
      scrollToFutured,
      scrollToRoadMap,
      scrollToOurTeam
    } = this;
    return (
      <NavVarPresenter
        seperated={seperated}
        scrollToTop={scrollToTop}
        scrollToAboutUs={scrollToAboutUs}
        scrollToPlatForm={scrollToPlatForm}
        scrollToAllocation={scrollToAllocation}
        scrollToFutured={scrollToFutured}
        scrollToRoadMap={scrollToRoadMap}
        scrollToOurTeam={scrollToOurTeam}
      />
    );
  }

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
