import React, { Component } from "react";
import "../../styles/Home.css";
import HomeLinks from "./HomeLinks";

export default class HomeDashboard extends Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="intro">
          <HomeLinks />
          <h2 className="introParagraph">
            Hiatt Campbell is a full-stack web developer based in Seattle,
            Washington.{" "}
          </h2>
        </div>
        <div>
          <hr className="homeHr" />
          <h1 className="capabilitiesTitle">Capabilities</h1>
          <div className="capabilities">
            <h4>JavaScript</h4>
            <h4>React</h4>
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>Bootstrap</h4>
            <h4>Node.js</h4>
            <h4>Express.js</h4>
            <h4>MongoDB</h4>
            <h4>NoSQL</h4>
          </div>
        </div>
      </div>
    );
  }
}
