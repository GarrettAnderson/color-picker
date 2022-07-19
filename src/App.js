import React, { Component } from 'react'
import ColorSample from './components/ColorSample'
import Slider from './components/Slider'
import SavedColors from './components/SavedColors'



class App extends Component {
  state = {
    hue: 20,
    sat: 10,
    light: 50,
    alpha: 30,
    colors: [],
    newColor: []
  }

  hueChoice = (event) => {
    console.log(event)
    this.setState({
      hue: event.target.value
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

  alphaChoice = (event) => {
    console.log(event)
    this.setState({
      alpha: event.target.value
    })
  }

  updateColorChoiceSlider = (event, key) => {
    this.setState({
      [key]: event.target.value
    })
    console.log(this.state[key])
  }

  saveColor = (event) => {
    const color = {
      h: this.state.hue,
      s: this.state.sat,
      l: this.state.light,
      a: this.state.alpha
    }
    this.setState({
      newColor: this.state.newColor.concat(color)
    })
    // console.log(colors)
  }

  render() {
    return (
     
      <main>
        <ColorSample hue={this.state.hue} sat={this.state.sat} light={this.state.light} alpha={this.state.alpha}></ColorSample>
        <h1>Pick a Color</h1>
        <section>
          <Slider label="H" max="240" onSlide={this.hueChoice}></Slider>
          <Slider label="S" max="100" onSlide={this.satChoice}></Slider>
          <Slider label="L" max="100" onSlide={this.lightChoice}></Slider>
          <Slider label="A" max="100" onSlide={this.alphaChoice}></Slider>
        </section>
        <section>
          <p>
            hsl({this.state.hue}, {this.state.sat}%, {this.state.light}%, {this.state.alpha}%)
          </p>
          <button onClick={this.saveColor}>Save Color</button>
         <SavedColors newColor={this.state.newColor}></SavedColors>
        </section>
      </main>
    )
  }
}

export default App
