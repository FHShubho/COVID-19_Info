import './Navbar.css';
import logo from './images/logo.png'

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid custom-nav-container">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="" width="50px" height="50px" class="d-inline-block"/>
                    COVID-19 Info
                </a>
                <div className="justify-content-end nav-item-custom">
                    <a className="nav-link me-2" href="#">Github</a>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;