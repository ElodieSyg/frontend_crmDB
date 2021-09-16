import { Link } from "react-router-dom";
// Import CSS
import "./Navbar.modules.css";

const Navbar = () => {
    return (
        <div className="navbar-container flexbox-navbar">
            <Link to="/admin" className="navbar-text">Admin</Link>
            <Link to="/" className="navbar-text">Logout</Link>
        </div>
    );
};

export default Navbar;