import logo2 from './images/summery.png'
import time_logo from './images/time.png'
import death_logo from './images/death.png'
import test_logo from './images/lab_test.png'
import confirmed_logo from './images/confirmed.png'
import recovered_logo from './images/recovered.png'
import isolated_logo from './images/isolated.png'
import './Info.css'
import loading_logo from './images/loading.svg'
import { useState, useEffect } from 'react'

const Info = () => {

    const [all_data, setAllData] = useState(null); 

    useEffect(() => {
        fetch('https://shubho-covid-info-api.herokuapp.com/api/summery')
            .then(rest => {
                return rest.json();
            })
            .then(data => {
                console.log(data);
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
            <div className="container-fluid info-custom">
                <div className="row">
                    <div className="col-6 d-flex justify-content-center ps-5">
                        <img src={logo2} alt="" width="100%" height="auto"/>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <div className="row gy-0">
                            <div className="col-12">
                            </div>                   
                            <div className="col-12 d-flex justify-content-center align-items-center">                           
                                {/* <img src={time_logo} alt="" width="40" height="40"/> */}
                                <h2 className="ms-1 header-custom">Last 24 Hours</h2>
                                <br/>
                            </div>
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <img className="" src={death_logo} alt="" width="50" height="auto"/>
                                <h1 className="ms-1 info-text-custom">{all_data.latest_death} Deaths</h1>
                            </div>
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <img className="" src={test_logo} alt="" width="30" height="35"/>
                                <h2 className="ms-1 info-text-custom">{all_data.latest_lab_test} Lab Tests</h2>
                            </div>
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <img className="" src={confirmed_logo} alt="" width="40" height="40"/>
                                <h2 className="ms-1 info-text-custom">{all_data.latest_confirmed_case} Confirmed</h2>
                            </div>
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <img className="" src={recovered_logo} alt="" width="40" height="40"/>
                                <h2 className="ms-1 info-text-custom">{all_data.latest_recoverd} Recovered</h2>
                            </div>
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <img className="" src={isolated_logo} alt="" width="30" height="30"/>
                                <h2 className="ms-1 info-text-custom">{all_data.latest_isolated} Isolated</h2>
                            </div>
                            <div className="col-12">
                            </div>
                            <div className="col-12">
                            </div>  
                        </div>
                    </div>
                </div>
                
                <div className="row row-cols-6 info-box-custom mt-lg-4 ms-1 me-1">
                    <div className="col">
                        <div className="alert alert-primary border-start-5 border-end-0 border-top-0 border-bottom-0 border-5 rounded-3">
                            <h3 className="alert-heading">{all_data.total_lab_test}</h3>
                            Total Lab Test
                        </div>
                    </div>
                    <div className="col">
                        <div className="alert alert-warning border-start-5 border-end-0 border-top-0 border-bottom-0 border-5 rounded-3">
                            <h3 className="alert-heading">{all_data.total_confirmed_case}</h3>
                            Total Confirmed
                        </div>
                    </div>
                    <div className="col">
                        <div className="alert alert-secondary border-start-5 border-end-0 border-top-0 border-bottom-0 border-5 rounded-3">
                            <h3 className="alert-heading">{all_data.total_isolated}</h3>
                            Total Isolated
                        </div>
                    </div>
                    <div className="col">
                        <div className="alert alert-success border-start-5 border-end-0 border-top-0 border-bottom-0 border-5 rounded-3">
                            <h3 className="alert-heading">{all_data.total_recovered}</h3>
                            Total Recovered
                        </div>
                    </div>
                    <div className="col">
                        <div className="alert alert-danger border-start-5 border-end-0 border-top-0 border-bottom-0 border-5 rounded-3">
                            <h3 className="alert-heading">{all_data.total_death}</h3>
                            Total Death
                        </div>
                    </div>
                    <div className="col">
                        <div className="alert alert-info border-start-5 border-end-0 border-top-0 border-bottom-0 border-5 rounded-3">
                            <h3 className="alert-heading">{all_data.total_vaccine}</h3>
                            Total Vaccinated
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Info;