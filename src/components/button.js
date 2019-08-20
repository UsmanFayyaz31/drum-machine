import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button className="drum-pad" onClick={this.props.sound} id={this.props.value}>{this.props.value}</button>
    );
  }
}

export default Button;