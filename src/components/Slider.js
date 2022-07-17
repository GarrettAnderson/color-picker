import React, { Component } from 'react';

class Slider extends Component {
    render() {
        return (
            <section>
                <span>
                    <h1>{this.props.label}</h1>
                </span>
                <input 
                    type="range" 
                    min="0" 
                    max={this.props.max} 
                    onChange={this.props.onSlide} 
                    />
            </section>
        );
    }
}

export default Slider;