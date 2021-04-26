import './Navbar.css';
import logo from './images/logo.png'

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid custom-nav-container">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="" width="50px" height="50px" className="d-inline-block"/>
                    COVID-19 Info BD
                </a>
                <div className="justify-content-end nav-item-custom">
                    <a className="nav-link me-2" href="#hospital">Hospital Info</a>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;