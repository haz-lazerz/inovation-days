import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./GuardCard.css";
import AppSlider from "../AppSlider/AppSlider";
import { Add } from "@material-ui/icons";

class GuardCard extends Component {
  state = {
    excludedStrings: [],
    strongProtectedStrings: [],
    fastProtectedStrings: [],
    buttonTitles: [
      "Excluded strings",
      "Force Strong Protected Strings",
      "Force Fast Protected Strings"
    ],
    testStringArray: [
      "string1",
      "string2",
      "string3",
      "string4",
      "string5",
      "string6"
    ],
    dropDownOpen: false
  };

  handleClickExcludedStrings = (index, title) => {
    const strings = [...this.state.excludedStrings];
    strings.push(title);
    this.setState({ excludedStrings: strings });
  };

  handleClickStrongProtectedStrings = (index, title) => {
    const strings = [...this.state.strongProtectedStrings];
    strings.push(title);
    this.setState({ strongProtectedStrings: strings });
  };

  handleClickFastProtectedStrings = (index, title) => {
    const strings = [...this.state.fastProtectedStrings];
    strings.push(title);
    this.setState({ fastProtectedStrings: strings });
  };

  toggle = () => {
    this.setState(prevState => ({
      dropDownOpen: !prevState.dropDownOpen
    }));
  };

  handleSelect = (index, string) => {
    const selectedStrings = [...this.state.excludedStrings];
    selectedStrings.push(string);
    this.setState({ excludedStrings: selectedStrings });
    console.log(this.state.excludedStrings);
  };

  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>{this.props.guardName}</CardTitle>
          {this.props.protectionLevels.map((level, index) => (
            <CardSubtitle key={index}>
              {level} <AppSlider />
            </CardSubtitle>
          ))}
          {this.state.excludedStrings && (
            <div>
              {this.state.excludedStrings.length ? (
                <h4>Excluded strings:</h4>
              ) : null}
              {
                <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toggle}>
                  <DropdownToggle caret>Strings</DropdownToggle>
                  <DropdownMenu>
                    {this.state.testStringArray.map((string, index) => (
                      <DropdownItem
                        onClick={() => this.handleSelect(index, string)}
                        key={index}
                      >
                        {string}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              }
              {this.state.excludedStrings.map((string, index) => (
                <p className="string-list" key={index}>
                  {string}
                </p>
              ))}
            </div>
          )}
          {this.state.strongProtectedStrings && (
            <div>
              {this.state.strongProtectedStrings.length ? (
                <h4>Strong Protected Strings:</h4>
              ) : null}
              {this.state.strongProtectedStrings.map((string, index) => (
                <p className="string-list" key={index}>
                  {string}
                </p>
              ))}
            </div>
          )}
          {this.state.fastProtectedStrings && (
            <div>
              {this.state.fastProtectedStrings.length ? (
                <h4>Fast Protected Strings:</h4>
              ) : null}
              {this.state.fastProtectedStrings.map((string, index) => (
                <p className="string-list" key={index}>
                  {string}
                </p>
              ))}
            </div>
          )}
        </CardBody>
        {this.props.guardName === "String encryption" && (
          <Row className="px-0">
            {this.state.buttonTitles.map((title, index) => (
              <React.Fragment key={index}>
                <Col sm="2">
                  <Button
                    onClick={() => {
                      if (title.includes("Excluded")) {
                        this.handleClickExcludedStrings(index, title);
                      }
                      if (title.includes("Strong")) {
                        this.handleClickStrongProtectedStrings(index, title);
                      }
                      if (title.includes("Fast")) {
                        this.handleClickFastProtectedStrings(index, title);
                      }
                    }}
                    className="guard-card-button"
                    color="warning"
                  >
                    <Add />
                  </Button>
                </Col>
                <Col sm="10">
                  <p>{title}</p>
                </Col>
              </React.Fragment>
            ))}
          </Row>
        )}
      </Card>
    );
  }
}

export default GuardCard;
