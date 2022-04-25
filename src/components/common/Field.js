import React, { Component } from "react";

class Field extends Component {
  render() {
    return (
      <div style={{all: 'unset'}}>
        {this.props.elementName === "input" ? (
          <div className="form-group">
            <input
              className="form-control"
              id={this.props.name}
              type={this.props.type}
              placeholder={this.props.placeholder}
              data-sb-validations="required"
              name={this.props.name}
              onChange={this.props.onChange}
              onBlur={this.props.onBlur}
            />
          </div>
        ) : (
          <div className="form-group form-group-textarea mb-md-0">
            <textarea
              className="form-control"
              id={this.props.name}
              placeholder={this.props.placeholder}
              data-sb-validations="required"
              name={this.props.name}
              onChange={this.props.onChange}
              onBlur={this.props.onBlur}
            />
          </div>
        )}
            
            {(this.props.touched && this.props.errors) &&
                <div className="inval-feedback">{this.props.errors}</div>
            }
      </div>
    );
  }
}

export default Field;
