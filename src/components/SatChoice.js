import React, { Component } from 'react';

class SatChoice extends Component {
    render() {
        return (
            <section>
                <span>
                    <h1>S</h1>
                </span>
                <input type="range" onChange={this.props.onSatChange} /> 
            </section>
        );
    }
}

export default SatChoice;