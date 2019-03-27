import React, { Component } from "react";
import { Button, Row } from "reactstrap";
import GuardCard from "../../components/GuardCard/GuardCard";

class ConfigPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Row className="justify-content-center">
          <h1>ConfigPage PlaceHolder</h1>
        </Row>
        <Row className="justify-content-center">
          <Button color="info">Predict</Button>
          <Button color="danger">Protect</Button>
          <Button color="success">Download</Button>
        </Row>
        <Row className="justify-content-center mt-5">
          <GuardCard
            guardName={"String encryption"}
            protectionLevels={["Protection Level", "Obfuscation level"]}
          />
        </Row>
        <Row className="justify-content-center mt-5">
          <GuardCard
            guardName={"Operator removal"}
            protectionLevels={["Protection Level", "Obfuscation level"]}
          />
        </Row>
      </div>
    );
  }
}

export default ConfigPage;
