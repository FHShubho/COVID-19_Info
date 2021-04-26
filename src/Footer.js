import github_logo from './images/github.png'

const Footer = () => {
    return(
        <div className="footer">
            <div className="container-fluid mt-4 text-end"> 
                <div className="card bg-secondary pb-0">
                    <div className="card-header fs-5">
                        <pre className="mb-0 my-auto"> 
                            <a href="https://fhshubho.netlify.app/" style={{textDecoration:"none", color:"white"}}>Fahimul Hoque Shubho</a> | <a href="https://github.com/FHShubho/COVID-19_Info" style={{textDecoration:"none", color:"white"}}><img src={github_logo} alt="" width="25px" height="25px"/> Github</a> 
                         </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;