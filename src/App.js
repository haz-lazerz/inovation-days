import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import ConfigPage from "./pages/ConfigPage/ConfigPage";
import UploadPage from "./pages/UploadPage/UploadPage";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/config" component={ConfigPage} />
          <Route path="/" exact component={UploadPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
