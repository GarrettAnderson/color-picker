import React, { Component } from 'react'
import ColorSample from './components/ColorSample'
import HueChoice from './components/HueChoice'
import SatChoice from './components/SatChoice'
import LightChoice from './components/LightChoice'



class App extends Component {
  state = {
    hue: 20,
    sat: 10,
    light: 50,
    colors: [],
    newColor: []
  }

  hueChoice = (event) => {
    // let hueColor = this.state.hue
    console.log(event)
    this.setState({
      hue: event.target.value
      // sat: event.target.value,
      // light: event.target.value,
      // color: this.state.color.concat(hueColor)
    })
  }

  satChoice = (event) => {
    this.setState({
      sat: event.target.value
    })
  }

  lightChoice = (event) => {
    this.setState({
      light: event.target.value
    })
  }

  saveColor = (event) => {
    const color = {
      h: this.state.hue,
      s: this.state.sat,
      l: this.state.light
    }
    this.setState({
      newColor: this.state.newColor.concat(color)
    })
    // console.log(colors)
  }

  render() {
    return (
     
      <main>
        <ColorSample hue={this.state.hue} sat={this.state.sat} light={this.state.light}></ColorSample>
        <h1>Pick a Color</h1>
        <section>
          <HueChoice onHueChange={this.hueChoice}></HueChoice>
          <SatChoice onSatChange={this.satChoice}></SatChoice>
          <LightChoice onLightChange={this.lightChoice}></LightChoice>
        </section>
        <section>
          <p>
            hsl({this.state.hue}, {this.state.sat}%, {this.state.light}%)
          </p>
          <button onClick={this.saveColor}>Save Color</button>
          <section>
            <h1>Saved Colors:</h1>
            <ul className="saved-color-list">
              {this.state.newColor.map((view) => {
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
        </section>
      </main>
    )
  }
}

export default App
