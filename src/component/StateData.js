import React, { Component } from "react";
import axios from "axios";
import { Card, Accordion, Button } from "react-bootstrap";

export default class StateData extends Component {
  constructor() {
    super();
    this.state = {
      stateData: {},
    };
  }
  componentDidMount = () => {
    axios
      .get("https://api.covid19india.org/state_district_wise.json")
      .then((response) => {
        this.setState({ stateData: response.data });
      });
  };

  render() {
    let keys = Object.keys(this.state.stateData);
    return (
      <Accordion>
        {keys.map((itm, ky) => {
          let districts = this.state.stateData[itm].districtData;
          let district_keys = Object.keys(districts);

          let total_active = 0;
          let total_confirmed = 0;
          let total_recovered = 0;
          let total_deaths = 0;
          let x;
          let district_list = [];
          let d_details = '';
          for(x in districts){
              total_active += districts[x].active;
              total_confirmed += districts[x].confirmed;
              total_deaths += districts[x].deceased;
              total_recovered += districts[x].recovered;
              //for pushing district name
              d_details = districts[x];
              d_details['district_name'] = x;
              district_list.push(d_details)
          }
         
          return (
              
            <Card key={ky}>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="primary" className="p-2" eventKey={ky}>
                  {itm}  <span className="btn btn-dark p-1 mr-2 ml-3">Confirmed - {total_confirmed}</span> <span className="btn btn-dark p-1 mr-2 ml-3">Active - {total_active}</span> <span className="btn btn-dark p-1 mr-2 ml-3">Recovered - {total_recovered}</span> <span className="btn btn-dark p-1 mr-2 ml-3">Deaths - {total_deaths}</span>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={ky}>
                <Card.Body>
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>District</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Recovered</th>
                        <th>Death</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            district_list.map((dis,key) => {
                                return(
                                    <tr key={key}>
                                        <td>{dis.district_name}</td>
                                        <td>{dis.confirmed}</td>
                                        <td>{dis.active}</td>
                                        <td>{dis.recovered}</td>
                                        <td>{dis.deceased}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                  </table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </Accordion>
    );
  }
}
