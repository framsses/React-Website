import React, { Component } from "react";

class Client extends Component {
  render() {
    return (
      <div class="col-md-3 col-sm-6 my-3">
        <a href="#!">
          <img
            class="img-fluid img-brand d-block mx-auto"
            src={this.props.svg}
            alt="..."
            aria-label={`${this.props.brand} Logo`}
          />
        </a>
      </div>
    );
  }
}

export default Client;
