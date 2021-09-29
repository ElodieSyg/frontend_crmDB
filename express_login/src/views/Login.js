import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
// Import CSS
import "./Login.modules.css";
import Axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [password, setPassword] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [error, setError] = useState(null);

    // Pattern
    const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    const passwordRegex = new RegExp(/[0-9a-zA-Z]{8,}/);

    // useHistory
    const history = useHistory();

    function checkEmail(e) {
        setEmail(e.target.value);

        if (emailRegex.test(e.target.value)) {
            console.log("Email valid");
            setIsEmailValid(true);
        } else {
            console.log("Invalid email or password");
        };
    };

    function checkPassword(e) {
        setPassword(e.target.value);

        if (passwordRegex.test(e.target.value)) {
            console.log("Email valid");
            setIsPasswordValid(true)
        } else {
            console.log("Invalid email or password");
        };
    };

    function handleClickLogin(e) {
        e.preventDefault();

        if (isEmailValid && isPasswordValid) {
            console.log("handleclick")

            const fetchDatabase = async () => {
                const res = await Axios.post(
                    `http://localhost:3000/login`,
                    { email, password },
                    { withCredentials: true },
                );

                console.log(res)
                if (res.data.status === "Sucess") {
                    history.push("/admin")
                } else {
                    return setError("Invalid token")
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