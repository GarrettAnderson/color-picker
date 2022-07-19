import React, { Component } from 'react';

class ColorSample extends Component {
    render() {
        return (
            <section
            className="color-sample"
            style={{ backgroundColor: `hsl(${this.props.hue},${this.props.sat}%,${this.props.light}%,${this.props.alpha}%)` }}
          />
        );
    }
}

export default ColorSample;