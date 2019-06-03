import React, { Component } from "react";

class FileUpload extends Component {
  constructor() {
    super();
    this.state = {
      uploadValue: 0
    };
  }

  render() {
    return (
      <div>
        <progress value={this.props.uploadValue} max="100">
          {this.state.uploadValue} %
        </progress>
        <br />
        <input type="file" onChange={this.props.onUpload} />
        <br />
        <img width="320" src={this.state.picture} alt="" />
      </div>
    );
  }
}

export default FileUpload;
