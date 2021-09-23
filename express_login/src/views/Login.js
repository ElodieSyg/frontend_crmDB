import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
// Import CSS
import "./Login.modules.css";
import Axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log(error);
    }, [error]);

    // Pattern
    const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    const passwordRegex = new RegExp(/[0-9a-zA-Z]{8,}/);

    // useHistory
    const history = useHistory();

    function checkEmail(e) {
        const permEmail = e.target.value;

        if (emailRegex.test(permEmail)) {
            setEmail(e.target.value);
        } else {
            console.log("Invalid email or password");
        };
    };

    function checkPassword(e) {
        const permPassword = e.target.value;

        if (passwordRegex.test(permPassword)) {
            setPassword(e.target.value)
        } else {
            console.log("Invalid email or password");
        };
    };

    function handleClickLogin(e) {
        e.preventDefault();

        if (emailRegex.test(email) && passwordRegex.test(password)) {
            const fetchDatabase = async () => {
                const res = await Axios.post(`https://crmdb-konexio.herokuapp.com/login`, { withCredentials: true }, { email, password })  // email, password = body reçu coté back

                if (res.data.message === "Here is your cookie for subsequent requests !") {
                    history.push("/admin")
                } else {
                    console.log("Error")
                    setError(res.data.message)
                };
            };
            fetchDatabase()
        };
    };

    return (
        <div>
            <div className="container">
                <div>
                    <h1 className="text-align">Customer Relationship Management</h1>
                </div>
                <form className="login-container">
                    <div className="form-flexbox">
                        <label htmlFor="email" className="white-text">Email</label>
                        <input
                            type="text"
                            id="email"
                            className="input-style"
                            onChange={checkEmail}>
                        </input>

                        <label htmlFor="password" className="white-text">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="margin-b1 input-style"
                            onChange={checkPassword}>
                        </input>
                    </div>

                    <div className="btn-flexbox">
                        {error && <p>{error}</p>}
                        <button className="margin-b1 btn-style" onClick={handleClickLogin}>L O G I N</button>
                        <Link to="/register" className="link-register">Create an account</Link>
                    </div>
                </form>
            </div>
        </div>
    );

};

export default Login;