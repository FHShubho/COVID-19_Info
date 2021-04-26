import './Hospital.css'
import loading_logo from './images/loading.svg'
import { useState, useEffect } from 'react'
 
const Hospital = () => {

    const [all_data, setAllData] = useState(null); 

    useEffect(() => {
        fetch('https://shubho-covid-info-api.herokuapp.com/api/hospitals')
            .then(rest => {
                return rest.json();
            })
            .then(data => {
                //console.log(data);
                setAllData(data);
            })
    }, []);

    if(all_data == null) {
        return(
            <div className="loading">
                <img src={loading_logo} alt=""/>
                loading latest data
            </div>
        );
    }
    else {
        return(
            <div className="hospital-info mt-4" id="hospital">
                <h1 className="text-center mx-auto hospital-info-header">Real-Time Info on COVID-19 Hospitals</h1>
    
                <div className="container-fluid mt-4">
                   <div className="table-responsive">
                        <table className="table table-striped table-hover table-borderless fixed-table-body text-center">
                            <thead>
                                <tr className="table-primary hospital-info-table-head" >
                                    <th scope="col">Hospital</th>
                                    <th scope="col">COVID Dedicated Bed</th>
                                    <th scope="col">Occupied Bed</th>
                                    <th scope="col">ICU</th>
                                    <th scope="col">Occupied ICU</th>
                                    <th scope="col">HDU Bed</th>
                                    <th scope="col">Occupied HDU Bed</th>
                                    <th scope="col">Last Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                { all_data.map((item)=>
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.bed}</td>
                                        <td>{item.oc_bed}</td>
                                        <td>{item.icu}</td>
                                        <td>{item.oc_icu}</td>
                                        <td>{item.hud}</td>
                                        <td>{item.oc_hud}</td>
                                        <td>{item.date}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                   </div>
                </div>   
            </div>
        );
    }
}

export default Hospital;