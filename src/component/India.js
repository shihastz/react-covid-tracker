import React, { Component } from "react";
import { Card } from "react-bootstrap";
import StateData from "./StateData";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";

export default class India extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    axios
      .get("https://corona.lmao.ninja/v2/countries/india")
      .then((response) => {
        this.setState({ data: response.data });
      });
  }

  render() {
    const data = {
      labels: ["Active cases", "Recovered", "Deaths"],
      datasets: [
        {
          label: "Sales for 2020(M)",
          data: [
            this.state.data.active,
            this.state.data.recovered,
            this.state.data.deaths,
          ],
          backgroundColor: ["#ffc107", "green", "#dc3545"],
        },
      ],
    };
    const option = {
      title: {
        display: true,
        text: "Doughnut Chart",
      },
    };
    const key = JSON.stringify(option);
    return (
      <div className="row">
        <div className="col-md-12">
          <img src="https://www.countryflags.io/in/shiny/64.png" />
          <h3>India</h3>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3">
              <Card style={{ width: "18rem" }} className="badge badge-primary">
                <Card.Body className="text-center">
                  <Card.Title>TOTAL CASES</Card.Title>
                  <h3>{this.state.data.cases}</h3>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card
                style={{ width: "18rem", color: "white" }}
                className="badge badge-warning"
              >
                <Card.Body className="text-center">
                  <Card.Title>ACTIVE CASES</Card.Title>
                  <h3>{this.state.data.active}</h3>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card style={{ width: "18rem" }} className="badge badge-success">
                <Card.Body className="text-center">
                  <Card.Title>RECOVERED</Card.Title>
                  <h3>{this.state.data.recovered}</h3>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card style={{ width: "18rem" }} className="badge badge-danger">
                <Card.Body className="text-center">
                  <Card.Title>TOTAL DEATHS</Card.Title>
                  <h3>{this.state.data.deaths}</h3>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <Doughnut data={data} options={option} />
        </div>
        <div className="col-md-12">
          <h5>States</h5>
          <StateData />
        </div>
      </div>
    );
  }
}
