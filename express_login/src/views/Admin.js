import { useState, useEffect } from "react";
// Import Axios
import Axios from "axios"
// Import components
import Navbar from "../components/Navbar";
// Import CSS
import "./Admin.modules.css";
import "hover.css";

const Admin = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchDatabase = async () => {
            const res = await Axios.get(
                `http://localhost:3000/contacts`,
                { withCredentials: true }
            );
            console.log(res.data.data)
            setData(res.data.data)
        };
        fetchDatabase();
    }, []);

    if (!data) {
        return null;
    };

    return (
        <div>
            <Navbar />
            <div className="admin-container">
                <div className="connected-container">
                    <h1 className="title-admin">Contact list</h1>
                    {data.map(contact => (
                        <div className="contact-container">
                            <p>{contact.name}</p>
                            <p></p>
                            <p>{contact.email}</p>
                            <button className="">More</button>
                        </div>
                    ))}
                </div >
                <div className="info-container">
                    info
                </div>
            </div>
        </div>
    );
};

export default Admin;