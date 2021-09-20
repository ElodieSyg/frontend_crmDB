import { Link, useHistory } from "react-router-dom";
// Import components
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
// Import CSS
import "./Login.modules.css";
import Axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        console.log(email, password)
    }, [email, password])

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

    function handleClickLogin() {
        if (emailRegex.test(email) && passwordRegex.test(password)) {
            const fetchDatabase = async () => {
                const res = await Axios.get({
                    method: "post",
                    url: "https://git.heroku.com/crmdb-konexio.git/login",
                });
                console.log(res);
            };
            fetchDatabase()
            history.push("/admin");
        };
    };

    return (
        <div>
            <div className="container">
                <div className="line">
                    <h1 className="text-align">Customer Relationship Management</h1>
                </div>
                <form className="login-container">
                    <div className="form-flexbox">
                        <label for="email" className="white-text">Email</label>
                        <input
                            type="text"
                            id="email"
                            className="input-style"
                            onChange={checkEmail}>
                        </input>

                        <label for="password" className="white-text">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="margin-b1 input-style"
                            onChange={checkPassword}>
                        </input>
                    </div>

                    <div className="btn-flexbox">
                        <button className="margin-b1 btn-style" onClick={handleClickLogin}>L O G I N</button>
                        <Link to="/register" className="link-register">Create an account</Link>
                    </div>
                </form>
            </div>
        </div>
    );

};

export default Login;