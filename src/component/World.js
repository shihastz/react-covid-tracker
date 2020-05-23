import React, { Component } from 'react'
import axios from 'axios';

export default class World extends Component {
    constructor(){
        super();
        this.state= {
            data : []
        }
    }
    componentDidMount(){
        axios
        .get("https://corona.lmao.ninja/v2/countries")
        .then((response) => {
            this.setState({ data: response.data });
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                <table className="table table-primary table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>Country</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Recovered</th>
                        <th>Death</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((con,key) => {
                                return(
                                    <tr key={key}>
                                        <td>{con.country} 
                                            {/* <img src={con.countryInfo.flag}/> */}
                                        </td>
                                        <td>{con.cases}</td>
                                        <td>{con.active}</td>
                                        <td>{con.recovered}</td>
                                        <td>{con.deaths}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                  </table>
                </div>
                
            </div>
        )
    }
}
