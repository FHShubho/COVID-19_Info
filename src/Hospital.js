import './Hospital.css'

const Hospital = () => {
    return(
        <div className="hospital-info mt-4">
            <h2 className="text-center mx-auto hospital-info-header">Real-Time Info on COVID-19 Hospitals</h2>

            <div className="container-fluid">
               <div className="table-responsive">
                    <table class="table table-striped table-hover table-borderless fixed-table-body text-center">
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
                            <tr>
                                <td>Omuk General Hospital</td>
                                <td>50</td>
                                <td>50</td>
                                <td>50</td>
                                <td>50</td>
                                <td>50</td>
                                <td>50</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>50</td>
                                <td>50</td>
                                <td>50</td>
                                <td>50</td>
                                <td>50</td>
                                <td>50</td>
                                <td>50</td>
                                <td>50</td>
                            </tr>
                        </tbody>
                    </table>
               </div>
            </div>


        </div>
    );
}

export default Hospital;