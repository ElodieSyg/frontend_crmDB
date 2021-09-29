import { useState, useEffect } from "react";
// Import CSS
import "./contact.modules.css";
// Import Axios
import Axios from "axios";
// Import uuid
import { v4 as uuidv4 } from 'uuid';

const ContactList = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState(2);

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

    useEffect(() => {
        console.log(data)
    }, [data])

    function addContact() {
        console.log("addContact");
        const fetchDatabase = async () => {
            const res = await Axios.post(
                `http://localhost:3000/contacts`,
                { name, email, description, category },
                { withCredentials: true },
            );

            console.log(res)
        };
        fetchDatabase();
    };

    function saveName(e) {
        setName(e.target.value);
    };

    function saveEmail(e) {
        setEmail(e.target.value);
    };

    function saveDescription(e) {
        setDescription(e.target.value);
    };

    function saveCategory(e) {
        setCategory(e.target.value);
    };

    if (!data) {
        return null;
    };

    return (
        <div className="connected-container">
            <div className="counter-contact flex-counter">
                <p>{data.length} contact{data.length > 1 ? 's' : ''}</p>
            </div>

            <h3 className="title-admin">Contact list</h3>
            {data.map(contact => (
                <div className="contact-container" key={uuidv4()}>
                    <div>
                        <p>{contact.name}</p>
                        <p>{contact.email}</p>
                    </div>
                    <div>
                        <button className="btn-style">More info</button>
                    </div>
                </div>
            ))}

            <div>
                <h3 className="title-admin">Add a new contact</h3>
                <div className="new_contact-section">
                    <label htmlFor="name contact-text margin-ins">Name </label>
                    <input
                        type="text"
                        id="name"
                        onChange={saveName}
                        className="margin-ins"
                    ></input>
                    <label htmpFor="email contact-text">Email </label>
                    <input
                        type="text"
                        id="email"
                        onChange={saveEmail}
                        className="margin-ins">
                    </input>
                    <label htmlFor="description contact-text">Description </label>
                    <input
                        type="text"
                        id="description"
                        onChange={saveDescription}
                        className="margin-ins"
                    ></input>
                    <label htmlFor="category contact-text">Category </label>
                    <input
                        type="number"
                        id="category"
                        onChange={saveCategory}
                        className="margin-ins"
                    ></input>

                    <button className="btn-style" onClick={addContact}>Add to my list</button>
                </div>
            </div>
        </div >

    );
};

export default ContactList;