import React, { Component } from "react";
import Slider from "@material-ui/lab/Slider";
import Typography from "@material-ui/core/Typography";
import "./AppSlider.css";

class AppSlider extends Component {
  state = { value: 0 };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <Typography style={{ marginTop: "10px" }}>
          {Math.round(this.state.value)}%
        </Typography>
        <Slider
          style={{ width: "200px", marginTop: "10px" }}
          value={this.state.value}
          min={0}
          max={100}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default AppSlider;
