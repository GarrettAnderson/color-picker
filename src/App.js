import React, { Component } from 'react'
// import HelloWorld from './components/HelloWorld'

class App extends Component {
  state = {
    hue: '',
    sat: '',
    light: '',
    color: []
  }

  hueChoice = (event) => {
    let hueColor = this.state.hue
    console.log(event)
    this.setState({
      hue: event.target.value,
      // sat: event.target.value,
      // light: event.target.value,
      color: this.state.color.concat(hueColor)
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

  render() {
    // return <HelloWorld />
    return (
      // <div style={{ backgroundColor: `hsl(50,8%,20%)` }} />
      <main style={{ backgroundColor: `hsl(${this.state.hue},${this.state.sat}%,${this.state.light}%)` }}>
        {/* <div style={{ backgroundColor: `hsl(${this.state.hue},${this.state.sat}%,${this.state.light}%)` }} /> */}
        <h1>Pick a Color, Any Color</h1>
        <section>
          <span>
            <h1>H</h1>
          </span>
          <input type="range" min="0" max="240" onChange={this.hueChoice} />
          <span>
            <h1>S</h1>
          </span>
          <input type="range" onChange={this.satChoice} />
          <span>
            <h1>L</h1>
          </span>
          <input type="range" onChange={this.lightChoice} />
        </section>
        <section>
          <p>
            hsl({this.state.hue}, {this.state.sat}%, {this.state.light}%)
          </p>
        </section>
      </main>
    )
  }
}

export default App
