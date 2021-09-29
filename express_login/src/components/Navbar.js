import { Link } from "react-router-dom";
// Import Axios
import Axios from "axios";
// Import CSS
import "./Navbar.modules.css";

const Navbar = () => {
    const handleClickLogout = () => {
        const fetchDatabase = async () => {
            const res = await Axios.get(`http://localhost:3000/logout`);
            console.log(res.data.message)
        };
        fetchDatabase();
    };

    return (
        <div className="navbar-container flexbox-navbar" onClick={handleClickLogout}>
            <Link to="/" className="navbar-text flex-item">
                <img src="./img/logout.png" alt="logout-logo" width="30px" />logout
            </Link>
        </div>
    );
};

export default Navbar;