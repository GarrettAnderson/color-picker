import React, { Component } from 'react';

class LightChoice extends Component {
    render() {
        return (
            <section>
                <span>
                    <h1>L</h1>
                </span>
                <input type="range" onChange={this.props.onLightChange} />
            </section>
        );
    }
}

export default LightChoice;