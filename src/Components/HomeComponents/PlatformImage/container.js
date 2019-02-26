import React from "react";
import Presenter from "./presenter";

class Container extends React.Component {
  state = {
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
    progress: 50,
    progressActive: false
  };

  intervalId;
  intervalId2;

  componentDidMount() {
    const march = new Date("2019-3-01");

    this.intervalId = setInterval(() => {
      this.countDayFN(march);
    }, 1000);

    document.addEventListener("scroll", this.scrollHeightListener);
  }

  render() {
    const { days, hours, minutes, seconds, progress } = this.state;
    return (
      <Presenter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        progress={progress}
      />
    );
  }

  scrollHeightListener = () => {
    const currentScrollHeight = document.documentElement.scrollTop;
    const { progressActive } = this.state;

    if (!progressActive) {
      if (currentScrollHeight >= 3115) {
        this.setState({
          ...this.state,
          progress: 0,
          progressActive: true
        });
        this.intervalId2 = setInterval(() => {
          this.IncreaseProgress();
        }, 50);
      }
    }
  };

  IncreaseProgress = () => {
    const { progress } = this.state;
    if (progress > 49) {
      clearInterval(this.intervalId2);
      return;
    } else {
      this.setState({
        ...this.state,
        progress: progress + 1
      });
    }
  };

  countDayFN = toDate => {
    const now = new Date();
    let amount = toDate.getTime() - now.getTime();

    // time is already past
    if (amount < 0) {
      this.setState({
        ...this.state,
        day: "0",
        hours: "0",
        minutes: "0",
        seconds: "0"
      });
      clearInterval(this.intervalId);
    } else {
      let days = 0;
      let hours = 0;
      let mins = 0;
      let secs = 0;

      amount = Math.floor(amount / 1000); // kill the milliseconds

      days = Math.floor(amount / 86400);
      amount = amount % 86400;

      hours = Math.floor(amount / 3600);
      amount = amount % 3600;

      mins = Math.floor(amount / 60);
      amount = amount % 60;

      secs = Math.floor(amount);

      this.setState({
        ...this.state,
        days,
        hours,
        minutes: mins,
        seconds: secs
      });
    }
  };
}

export default Container;
