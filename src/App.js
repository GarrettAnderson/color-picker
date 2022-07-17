import React, { Component } from 'react'
import ColorSample from './components/ColorSample'
import Slider from './components/Slider'
import SavedColors from './components/SavedColors'



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
          <Slider label="H" max="240" onSlide={this.hueChoice}></Slider>
          <Slider label="S" max="100" onSlide={this.satChoice}></Slider>
          <Slider label="L" max="100" onSlide={this.lightChoice}></Slider>

        </section>
        <section>
          <p>
            hsl({this.state.hue}, {this.state.sat}%, {this.state.light}%)
          </p>
          <button onClick={this.saveColor}>Save Color</button>
         <SavedColors newColor={this.state.newColor}></SavedColors>
        </section>
      </main>
    )
  }
}

export default App
