import { useState, useEffect } from "react";
// Import Axios
import Axios from "axios"
// Import components
import Navbar from "../components/Navbar";
// Import CSS
import "./Admin.modules.css";

const Admin = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchDatabase = async () => {
            const res = await Axios.get(`https://crmdb-konexio.herokuapp.com/contacts`);
            console.log(res)
        }
        fetchDatabase();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="admin-container">
                <div className="connected-container">
                    connecté
                </div>
                <div className="info-container">
                    info
                </div>
            </div>
        </div>
    );
};

export default Admin;