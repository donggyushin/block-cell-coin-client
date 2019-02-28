import React from "react";
import DropdownMenu from "./presenter";
import onClickOutside from "react-onclickoutside";

class DropDownContainer extends React.Component {
  state = {
    dropdown: false
  };
  render() {
    return <DropdownMenu />;
  }

  toggleDropdown = () => {
    this.setState({
      ...this.state,
      dropdwon: !this.state.dropdown
    });
  };
}

export default onClickOutside(DropDownContainer);
