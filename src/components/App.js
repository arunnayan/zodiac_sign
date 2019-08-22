import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import axios from "axios";
import Zodiac from "./Zodiac";
import "./App.css";

//Downloaded from  Music: https://www.bensound.com
import music from "../sound/bensound-instinct.mp3";

export default class App extends Component {
  constructor() {
    super();
    let m = new Audio(music);
    m.play();

    this.state = {
      userDate: "1992-06-21",
      birthday: "1992-06-21",
      showStats: false,
      horoscoprArray: {
        aquarius: "",
        pisces: "",
        aries: "",
        taurus: "",
        gemini: "",
        cancer: "",
        leo: "",
        virgo: "",
        libra: "",
        scorpio: "",
        sagittarius: "",
        capricon: ""
      }
    };
  }

  componentDidMount() {
    let m = new Audio(music);
    m.play();
    let aquarius = axios.get(
      "https://astrosage-api.herokuapp.com/api/horoscope/aquarius/daily"
    );
    let pisces = axios.get(
      "https://astrosage-api.herokuapp.com/api/horoscope/pisces/daily"
    );
    let aries = axios.get(
      "https://astrosage-api.herokuapp.com/api/horoscope/aries/daily"
    );
    let taurus = axios.get(
      "https://astrosage-api.herokuapp.com/api/horoscope/aries/daily"
    );
    let gemini = axios.get(
      "https://astrosage-api.herokuapp.com/api/horoscope/gemini/daily"
    );
    let cancer = axios.get(
      "https://astrosage-api.herokuapp.com/api/horoscope/cancer/daily"
    );
    let leo = axios.get(
      "https://astrosage-api.herokuapp.com/api/horoscope/leo/daily"
    );
    let virgo = axios.get(
      "https://astrosage-api.herokuapp.com/api/horoscope/virgo/daily"
    );
    let libra = axios.get(
      "https://astrosage-api.herokuapp.com/api/horoscope/libra/daily"
    );
    let scorpio = axios.get(
      "https://astrosage-api.herokuapp.com/api/horoscope/scorpio/daily"
    );
    let sagittarius = axios.get(
      "https://astrosage-api.herokuapp.com/api/horoscope/sagittarius/daily"
    );
    let capricon = axios.get(
      "https://astrosage-api.herokuapp.com/api/horoscope/capricorn/daily"
    );

    Promise.all([
      aquarius,
      pisces,
      aries,
      taurus,
      gemini,
      cancer,
      leo,
      virgo,
      libra,
      scorpio,
      sagittarius,
      capricon
    ]).then(values => {
      this.setState({
        horoscoprArray: {
          aquarius: values[0].data.horoscope,
          pisces: values[1].data.horoscope,
          aries: values[2].data.horoscope,
          taurus: values[3].data.horoscope,
          gemini: values[4].data.horoscope,
          cancer: values[5].data.horoscope,
          leo: values[6].data.horoscope,
          virgo: values[7].data.horoscope,
          libra: values[8].data.horoscope,
          scorpio: values[9].data.horoscope,
          sagittarius: values[10].data.horoscope,
          capricon: values[11].data.horoscope
        }
      });
    });
  }

  changeBirthday() {
    this.setState({
      birthday: this.state.userDate,
      showStats: true
    });
  }
  render() {
    return (
      <div className="App">
        <Form inline>
          <h2>Input Your Birthday!</h2>
          <FormControl
            type="date"
            onChange={event => this.setState({ userDate: event.target.value })}
          />
        </Form>

        <br />
        <Button onClick={() => this.changeBirthday()}>Submit</Button>
        {this.state.showStats ? (
          <div className="fade age-stats">
            <Zodiac
              date={this.state.birthday}
              hscope={this.state.horoscoprArray}
            />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}
