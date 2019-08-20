import React from 'react';
import Button from './components/button';
import forQ from './sounds/Tamborine2.wav';
import forW from './sounds/almost-the-doors.wav';
import forE from './sounds/christmas_rhodes.wav';
import forA from './sounds/Drop Effect 3.wav';
import forS from './sounds/epiano-two-chords.wav';
import forD from './sounds/Flexi up 1.wav';
import forZ from './sounds/GunCock01.wav';
import forX from './sounds/RAIN.wav';
import forC from './sounds/Startup Effect.wav';
import './App.css';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      isOn: true
    }
    this.playSound = this.playSound.bind(this);
    this.handleKeys = this.handleKeys.bind(this);
    this.sound = this.sound.bind(this);
    this.power = this.power.bind(this);
  }

  power() {
    var temp = this.state.isOn;

    if(temp) {
      this.setState({
        isOn: false,
        title: ""
      })
    } else {
      this.setState({
        isOn: true
      })
    }
  }

  sound(temp) {
    switch (temp) {
      case "q":
      case "Q":
        new Audio(forQ).play();
        this.setState({
          title: "Tamborine"
        })
        break;

      case "w":
      case "W":
        new Audio(forW).play();
        this.setState({
          title: "Almost The Doors"
        })
        break;

      case "e":
      case "E":
        new Audio(forE).play();
        this.setState({
          title: "Christmas Rhodes"
        })
        break;

      case "a":
      case "A":
        new Audio(forA).play();
        this.setState({
          title: "Drop Effect"
        })
        break;

      case "s":
      case "S":
        new Audio(forS).play();
        this.setState({
          title: "Epiano Two chords"
        })
        break;

      case "d":
      case "D":
        new Audio(forD).play();
        this.setState({
          title: "Flexi Up"
        })
        break;

      case "z":
      case "Z":
        new Audio(forZ).play();
        this.setState({
          title: "Gun Cock"
        })
        break;

      case "x":
      case "X":
        new Audio(forX).play();
        this.setState({
          title: "Rain"
        })
        break;

      case "c":
      case "C":
        new Audio(forC).play();
        this.setState({
          title: "Startup Effect"
        })
        break;

      default:
        break;
    }
  }

  playSound(event) {
    if(this.state.isOn) {
      this.sound(event.currentTarget.id);
    }
  }

  handleKeys(event) {
    if(this.state.isOn) {
      this.sound(event.key);
    }
  }

  render() {
    const isEmpty = this.state.title;
    const on = this.state.isOn;
    onkeypress = this.handleKeys;
    return (
      <div id="drum-machine">
        <div id="display-container">
          <h2 id="display">{isEmpty ? this.state.title : <br />}</h2>
        </div>
        <Button value="Q" sound={this.playSound} />
        <Button value="W" sound={this.playSound} />
        <Button value="E" sound={this.playSound} /><br />
        <Button value="A" sound={this.playSound} />
        <Button value="S" sound={this.playSound} />
        <Button value="D" sound={this.playSound} /><br />
        <Button value="Z" sound={this.playSound} />
        <Button value="X" sound={this.playSound} />
        <Button value="C" sound={this.playSound} />
        <h3>{(on) ? "Power On" : "Power Off"}</h3>
        <div id="toggleButton" onClick={this.power} style={(on) ? {backgroundColor: 'red'} : {backgroundColor: 'white'}}></div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <DrumMachine />
    </div>
  );
}

export default App;
