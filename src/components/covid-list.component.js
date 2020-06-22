import React, { Component } from 'react';
import axios from 'axios';


const Covid = props => (
    <tr>
        <td>{props.covid.Country}</td>
        <td>{props.covid.TotalConfirmed}</td>
        <td>{props.covid.TotalDeaths}</td>
        <td>{props.covid.TotalRecovered}</td>
    </tr >
)

export default class CovidList extends Component {

    constructor(props) {
        super(props);
        this.state = { covid: [], total: [] };
    }

    componentDidMount() {
        axios.get('https://api.covid19api.com/summary')
            .then(response => {
                this.setState({
                    covid: response.data.Countries,
                    total: response.data.Global
                })
            }).catch((error) => {
                console.log(error);
            })
    }

    covidList() {
        return this.state.covid.map(currentdata => {
            return <Covid covid={currentdata} ></Covid>
            // console.log(currentdata)
        })    
    }
    render() {
        return (

            <div>
                <h3>Data Covid List</h3>
                <h3>Jumlah Terkonfirmasi: {this.state.total.TotalConfirmed} </h3>

                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Nama Negara</th>
                            <th>Terkonfirmasi</th>
                            <th>Meninggal</th>
                            <th>Sembuh</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                            {this.covidList()}
                    </tbody>
                </table>
            </div>
        )
    }
}