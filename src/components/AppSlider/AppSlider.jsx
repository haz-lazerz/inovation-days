import React from "react";
import Slider from "@material-ui/lab/Slider";
import Typography from "@material-ui/core/Typography";
import "./AppSlider.css";

const AppSlider = props => {
  return (
    <div>
      <Typography style={{ marginTop: "10px" }}>
        {Math.round(props.initialValue)}%
      </Typography>
      <Slider
        style={{ width: "200px", marginTop: "10px" }}
        value={props.initialValue}
        min={0}
        max={100}
        onChange={props.sliderChange}
      />
    </div>
  );
};

export default AppSlider;
