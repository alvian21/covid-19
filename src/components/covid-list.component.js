import React, { Component } from 'react';
import axios from 'axios';


const Covid = props => (
    <tr>
        <td>{props.covid.Country_Region}</td>
        <td>{props.covid.Confirmed}</td>
        <td>{props.covid.Deaths}</td>
        <td>{props.covid.Recovered}</td>
        <td>{props.covid.Active}</td>
    </tr >
)

export default class CovidList extends Component {

    constructor(props) {
        super(props);
        this.state = { covid: [], activePage: 15 };
    }

    componentDidMount() {
        axios.get('http://api.kawalcorona.com')
            .then(response => {
                this.setState({
                    covid: response.data
                })
            }).catch((error) => {
                console.log(error);
            })
    }

    covidList() {
        return this.state.covid.map(currentdata => {
            return <Covid covid={currentdata.attributes} key={currentdata.attributes.OBJECTID} ></Covid>
        })
    }

    covidSum() {
        var total = 0;
        this.state.covid.forEach(element => {
            total += element.attributes.Confirmed
        });
        return total;


    }
    render() {
        return (

            <div>
                <h3>Data Covid List</h3>
                <h3>Jumlah Terkonfirmasi:  {this.covidSum()}</h3>

                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Nama Negara</th>
                            <th>Terkonfirmasi</th>
                            <th>Meninggal</th>
                            <th>Sembuh</th>
                            <th>Aktif</th>
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