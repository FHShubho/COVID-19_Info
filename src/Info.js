import logo2 from './images/summery.png'
import time_logo from './images/time.png'
import death_logo from './images/death.png'
import test_logo from './images/lab_test.png'
import confirmed_logo from './images/confirmed.png'
import recovered_logo from './images/recovered.png'
import isolated_logo from './images/isolated.png'
import './Info.css'

const Info = () => {
    return(
        <div className="container-fluid info-custom">
            <div className="row">
                <div className="col-6 d-flex justify-content-center ps-5">
                    <img src={logo2} alt="" width="100%" />
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <div className="row">                   
                        <div className="col-12 d-flex justify-content-center align-items-center pt-5">                           
                            <img src={time_logo} alt="" width="40" height="40"/>
                            <h2 className="ms-1">Last 24 Hours</h2>
                            <br/>
                        </div>
                        <div className="col-12 d-flex justify-content-center align-items-center">
                            <img className="" src={death_logo} alt="" width="50" height="40"/>
                            <h1 className="ms-1">Info 1</h1>
                        </div>
                        <div className="col-6 d-flex justify-content-center align-items-center">
                            <img className="" src={test_logo} alt="" width="40" height="40"/>
                            <h1 className="ms-1">Info 2</h1>
                        </div>
                        <div className="col-6 d-flex justify-content-center align-items-center">
                            <img className="" src={confirmed_logo} alt="" width="50" height="40"/>
                            <h1 className="ms-1">Info 3</h1>
                        </div>
                        <div className="col-6 d-flex justify-content-center align-items-center">
                            <img className="" src={recovered_logo} alt="" width="50" height="50"/>
                            <h1 className="ms-1">Info 4</h1>
                        </div>
                        <div className="col-6 d-flex justify-content-center align-items-center">
                            <img className="" src={isolated_logo} alt="" width="40" height="40"/>
                            <h1 className="ms-1">Info 5</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Info;