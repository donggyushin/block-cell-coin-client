import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../../Routes/Home";

const cx = classNames.bind(styles);

const AppPresenter = () => {
  return (
    <Router>
      <div className={cx("container")}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppPresenter;
