import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

class EventDashboard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <h2>left col</h2>
        </Grid.Column>

        <Grid.Column width={6}>
          <h2>right col</h2>
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
