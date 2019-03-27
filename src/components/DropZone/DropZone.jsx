import React, { Component } from "react";
import DropZoneComponent from "react-dropzone-component";
import "./DropZone.css";

class DropZone extends Component {
  state = {};
  render() {
    const componentConfig = {
      postUrl: "no-url"
    };
    const djsConfig = { addRemoveLinks: true, autoProcessQueue: false };
    const eventHandlers = {
      addedfile: file => console.log(file)
    };
    return (
      <DropZoneComponent
        className="dropZone"
        config={componentConfig}
        eventHandlers={eventHandlers}
        djsConfig={djsConfig}
      />
    );
  }
}

export default DropZone;
