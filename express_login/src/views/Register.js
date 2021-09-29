/* import { useState } from "react";
import { useHistory } from "react-router";
// Import CSS
import "./Register.modules.css";
// Import Axios
import Axios from "axios";
import { useEffect } from "react/cjs/react.development";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const history = useHistory();

    // Pattern
    const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    const passwordRegex = new RegExp(/[0-9a-zA-Z]{8,}/);

    useEffect(() => {
        console.log("useEffect", email)
    }, [email]);

    function handleChangeRegister(e) {
        const { permEmail, permPassword, permConfirmPassword } = e.target.value;

        if (emailRegex.test(email) && passwordRegex.test(password) && password === permConfirmPassword) {
            setEmail(permEmail);
            setPassword(permPassword);
        } else {
            setError("Invalid email or password");
            console.log(error);
        }
    };

    function handleClickCreateAccount() {
        const fetchDatabase = async () => {
            const res = await Axios.post(
                `http://localhost:3000/register`,
                { email, password },
                { withCredentials: true },
            );

            console.log(res)
            if (res.data.status === "Sucess") {
                history.push("/admin")
            } else {
                return error;
            };
        };
        fetchDatabase();
    };

    return (
        <div>
            <div className="container">
                <label htmlFor="name">Email</label>
                <input
                    type="text"
                    id="name"
                    onChange={handleChangeRegister}>
                </input>

                <label htmlFor="email">Password</label>
                <input
                    type="password"
                    id="email"
                    onChange={handleChangeRegister}>
                </input>

                <label htmlFor="email">Confirm your password</label>
                <input
                    type="password"
                    id="email"
                    onChange={handleChangeRegister}>
                </input>

                <button onClick={handleClickCreateAccount}>Create your account</button>
            </div>
        </div>
    );
};

export default Register; */