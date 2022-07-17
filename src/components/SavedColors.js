import React, { Component } from 'react';

class SavedColors extends Component {
    render() {
        return (
            <section>
                <h1>Saved Colors:</h1>
                <ul className="saved-color-list">
                {this.props.newColor.map((view) => {
                    console.log(view)
                    return (
                    <li
                        className="saved-color"
                        style={{
                        backgroundColor: `hsl(${view.h},${view.s}%,${view.l}%)`
                        }}
                    >
                        <p>
                        hsl({view.h},{view.s}%,{view.l}%)
                        </p>
                    </li>
                    )
                })}
                </ul>
            {/* <p>
              hsl({this.state.color[0]}, {this.state.color[1]}%, {this.state.color[2]}%)
            </p> */}
          </section>
        );
    }
}

export default SavedColors;