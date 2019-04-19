import React, { Component } from "react";
import "./App.css";
import "./Form.css";
import "./Result.css";
import "./Media.css";
import Form from "./Form";
import Result from "./Result";

// API key
const APIkey = "01c9e6add6ba8bf0e588714832744cbc";

class App extends Component {
  state = {
    value: "",
    city: "",
    date: "",
    time: "",
    temp: "",
    sunrise: "",
    sunset: "",
    wind: "",
    pressure: "",
    error: false
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  componentDidUpdate = (propsState, prevState) => {
    if (this.state.value.length === 0) return;
    if (prevState.value !== this.state.value) {
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${
        this.state.value
      }&APPID=${APIkey}&units=metric`;

      fetch(API)
        .then(response => {
          if (response.ok) {
            return response;
          }
          throw Error("Brak danych");
        })
        .then(response => response.json())
        .then(data => {
          const date = new Date().toLocaleDateString();
          const time = new Date().toLocaleTimeString();
          this.setState(prevState => ({
            city: prevState.value,
            time: time,
            date: date,
            temp: data.main.temp,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            wind: data.wind.speed,
            pressure: data.main.pressure,
            error: false
          }));
        })
        .catch(error => {
          console.log(error);
          this.setState(prevState => ({
            error: true,
            city: prevState.value
          }));
        });
    }
  };

  render() {
    return (
      <div className="wrap">
        <Form
          value={this.state.value}
          change={this.handleChange}
          date={this.state.date}
          time={this.state.time}
        />
        <Result data={this.state} />
      </div>
    );
  }
}

export default App;
