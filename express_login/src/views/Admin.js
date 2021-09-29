// Import components
import Navbar from "../components/Navbar";
import ContactList from "../components/contactList";
// Import CSS
import "./Admin.modules.css";
import "hover.css";
import axios from "axios";

const Admin = () => {
    return (
        <div>
            <Navbar />
            <div className="admin-container">
                <ContactList />

                <div className="info-container">
                </div>
            </div>
        </div>
    );
};

export default Admin;