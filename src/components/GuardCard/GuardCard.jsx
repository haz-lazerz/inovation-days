import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Row
} from "reactstrap";
import "./GuardCard.css";
import AppSlider from "../AppSlider/AppSlider";
import { Add } from "@material-ui/icons";
import DropDown from "../DropDown/DropDown";
import ExcludedList from "../ExcludedList/ExcludedList";

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
    dropDownOpen: false,
    initialValue: 0,
    isDropDownOpen: false
  };

  toggleDropDown = () => {
    this.setState(prevState => ({
      dropDownOpen: !prevState.dropDownOpen
    }));
  };

  handleSliderChange = (event, value) => {
    this.setState({ initialValue: value });
  };

  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>{this.props.guardName}</CardTitle>
          {this.props.protectionLevels.map((level, index) => (
            <CardSubtitle key={index}>
              {level}{" "}
              <AppSlider
                key={index}
                initialValue={this.state.initialValue}
                sliderChange={this.handleSliderChange}
              />
            </CardSubtitle>
          ))}
          <Row className="justify-content-center">
            <ExcludedList
              headings={this.state.buttonTitles}
              strings={this.state.excludedStrings}
            />
          </Row>
          <DropDown
            testStringArray={this.state.testStringArray}
            dropDownOpen={this.state.dropDownOpen}
            toggle={this.toggleDropDown}
          />
        </CardBody>
        {
          <Row className="px-0">
            {this.state.buttonTitles.map((title, index) => (
              <React.Fragment key={index}>
                <Col sm="2">
                  <Button className="guard-card-button" color="warning">
                    <Add />
                  </Button>
                </Col>
                <Col sm="10">
                  <p>{title}</p>
                </Col>
              </React.Fragment>
            ))}
          </Row>
        }
      </Card>
    );
  }
}

export default GuardCard;
