import React, { Component } from "react";
export default class Zodiac extends Component {
  constructor() {
    super();
    this.zodiac = "";
  }
  getZodiacSign(day, month) {
    var zodiacSigns = {
      capricon: "Capricon",
      aquarius: "Aquarius",
      pisces: "Pisces",
      aries: "Aries",
      taurus: "Taurus",
      gemini: "Gemini",
      cancer: "cancer",
      leo: "Leo",
      virgo: "Virgo",
      libra: "Libra",
      scorpio: "Scorpio",
      sagittarius: "Sagittarius"
    };

    let zodiac = "";
    if ((month === 1 && day <= 20) || (month === 12 && day >= 22)) {
      zodiac = zodiacSigns.capricon;
    } else if ((month === 1 && day >= 21) || (month === 2 && day <= 18)) {
      zodiac = zodiacSigns.aquarius;
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      zodiac = zodiacSigns.pisces;
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) {
      zodiac = zodiacSigns.aries;
    } else if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
      zodiac = zodiacSigns.taurus;
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      zodiac = zodiacSigns.gemini;
    } else if ((month === 6 && day >= 22) || (month == 7 && day <= 22)) {
      zodiac = zodiacSigns.cancer;
    } else if ((month === 7 && day >= 23) || (month == 8 && day <= 23)) {
      zodiac = zodiacSigns.leo;
    } else if ((month === 8 && day >= 24) || (month == 9 && day <= 23)) {
      zodiac = zodiacSigns.virgo;
    } else if ((month === 9 && day >= 24) || (month == 10 && day <= 23)) {
      zodiac = zodiacSigns.libra;
    } else if ((month === 10 && day >= 24) || (month == 11 && day <= 22)) {
      zodiac = zodiacSigns.scorpio;
    } else if ((month === 11 && day >= 23) || (month == 12 && day <= 21)) {
      zodiac = zodiacSigns.sagittarius;
    }

    this.zodiac = zodiac;
    return this.zodiac;
  }

  render() {
    return (
      <div>
        <h3>{this.props.date}</h3>
        <h4>
          Congrats on{" "}
          {this.getZodiacSign(
            this.props.date.split("-")[2],
            this.props.date.split("-")[1]
          ).toLowerCase()}
        </h4>
        <br />
        <hr />
        <img
          src={require(`../assets/${this.zodiac.toLowerCase()}.png`)}
          className="zodiac-img"
          alt="Logo"
        />
        <br />
        <br />
        <br />
        <p>{this.props.hscope[this.zodiac.toLowerCase()]}</p>
      </div>
    );
  }
}
