import { Link } from "react-router-dom";
// Import Axios
import Axios from "axios";
// Import CSS
import "./Navbar.modules.css";

const Navbar = () => {
    const handleClickLogout = () => {
        const fetchDatabase = async () => {
            const res = await Axios.get(`https://crmdb-konexio.herokuapp.com/logout`);
            console.log(res.data.message)
        };
        fetchDatabase();
    };

    return (
        <div className="navbar-container flexbox-navbar">
            <Link to="/admin" className="navbar-text">Admin</Link>
            <Link to="/" className="navbar-text" onClick={handleClickLogout}>Logout</Link>
        </div>
    );
};

export default Navbar;