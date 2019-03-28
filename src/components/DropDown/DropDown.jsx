import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const DropDown = props => {
  return (
    <Dropdown
      isOpen={props.dropDownOpen}
      toggle={props.toggle}
      style={{ marginTop: "15px" }}
    >
      <DropdownToggle caret>Strings</DropdownToggle>
      <DropdownMenu>
        {props.testStringArray.map((string, index) => (
          <DropdownItem onClick={props.onClick} key={index}>
            {string}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;
