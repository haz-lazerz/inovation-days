import React, { Component } from "react";
import { Button, Row, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import DropZone from "../../components/DropZone/DropZone";

class UploadPage extends Component {
  state = {};
  render() {
    return (
      <Container fluid>
        <Row className="justify-content-center">
          <h1>UploadPage Placeholder</h1>
        </Row>
        <Row className="justify-content-center my-5">
          <NavLink to="/config">
            <Button color="info">Take me to config page</Button>
          </NavLink>
        </Row>
        <Row>
          <DropZone />
        </Row>
      </Container>
    );
  }
}

export default UploadPage;
