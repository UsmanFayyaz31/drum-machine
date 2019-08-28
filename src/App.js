import React from 'react';
import Button from './components/button';
import forQ from './sounds/Clap.mp3';
import forW from './sounds/Closed-HH.mp3';
import forE from './sounds/Kick_n_Hat.mp3';
import forA from './sounds/Kick.mp3';
import forS from './sounds/Open-HH.mp3';
import forD from './sounds/punchy_kick.mp3';
import forZ from './sounds/Shaker.mp3';
import forX from './sounds/side_stick.mp3';
import forC from './sounds/Snare.mp3';
import './App.css';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      isOn: true,
      audio: null
    }
    this.playSound = this.playSound.bind(this);
    this.handleKeys = this.handleKeys.bind(this);
    this.sound = this.sound.bind(this);
    this.power = this.power.bind(this);
  }

  power() {
    var temp = this.state.isOn;

    if (temp) {
      this.setState({
        isOn: false,
        title: ""
      })
      if (this.state.audio !== null) {
        this.state.audio.pause();
      }
    } else {
      this.setState({
        isOn: true
      })
    }
  }

  sound(temp) {
    console.log(temp);
    switch (temp) {
      case "q":
      case "Q":
        if (this.state.audio !== null) {
          this.state.audio.pause();
        }
        this.setState({
          title: "Clap",
          audio: new Audio(forQ)
        })
        this.state.audio.play();
        break;

      case "w":
      case "W":
        if (this.state.audio !== null) {
          this.state.audio.pause();
        }
        this.setState({
          title: "Closed-HH",
          audio: new Audio(forW)
        })
        this.state.audio.play();
        break;

      case "e":
      case "E":
          if (this.state.audio !== null) {
            this.state.audio.pause();
          }
          this.setState({
            title: "Kick n Hat",
            audio: new Audio(forE)
          })
          this.state.audio.play();
          break;

      case "a":
      case "A":
          if (this.state.audio !== null) {
            this.state.audio.pause();
          }
          this.setState({
            title: "Kick",
            audio: new Audio(forA)
          })
          this.state.audio.play();
          break;

      case "s":
      case "S":
          if (this.state.audio !== null) {
            this.state.audio.pause();
          }
          this.setState({
            title: "Open-HHH",
            audio: new Audio(forS)
          })
          this.state.audio.play();
          break;

      case "d":
      case "D":
          if (this.state.audio !== null) {
            this.state.audio.pause();
          }
          this.setState({
            title: "Punchy Kick",
            audio: new Audio(forD)
          })
          this.state.audio.play();
          break;

      case "z":
      case "Z":
          if (this.state.audio !== null) {
            this.state.audio.pause();
          }
          this.setState({
            title: "Shaker",
            audio: new Audio(forZ)
          })
          this.state.audio.play();
          break;

      case "x":
      case "X":
          if (this.state.audio !== null) {
            this.state.audio.pause();
          }
          this.setState({
            title: "Side Stick",
            audio: new Audio(forX)
          })
          this.state.audio.play();
          break;

      case "c":
      case "C":
          if (this.state.audio !== null) {
            this.state.audio.pause();
          }
          this.setState({
            title: "Snare",
            audio: new Audio(forC)
          })
          this.state.audio.play();
          break;

      default:
        break;
    }
  }

  playSound(event) {
    if (this.state.isOn) {
      this.sound(event.currentTarget.id);
    }
  }

  handleKeys(event) {
    if (this.state.isOn) {
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
        <div id="toggleButton" onClick={this.power} style={(on) ? { backgroundColor: 'green' } : { backgroundColor: 'white' }}></div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <DrumMachine />
      <div id="author">
          <p>Designed and Coded by</p>
          <a href="https://github.com/UsmanFayyaz/drum-machine">Usman Fayyaz</a>
        </div>
    </div>
  );
}

export default App;
