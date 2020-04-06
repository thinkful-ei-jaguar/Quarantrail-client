import React, { PureComponent } from "react";
 
class Box extends PureComponent {
  render() {
    const size = 50;
    const x = this.props.x - size / 2;
    const y = this.props.y - size / 2;
    const backgroundColor =this.props.backgroundColor;
    return (
      <div style={{ position: "absolute", width: size, height: size, backgroundColor: backgroundColor, left: x, top: y }} />
    );
  }
}
 
export { Box };