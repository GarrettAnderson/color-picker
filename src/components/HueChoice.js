import React, { Component } from 'react';

class HueChoice extends Component {
    render() {
        return (
            <section>
                <span>
                    <h1>H</h1>
                </span>
                <input type="range" min="0" max="240" onChange={this.props.onHueChange} />
            </section>
        );
    }
}

export default HueChoice;