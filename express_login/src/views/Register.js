import { useState, useEffect } from "react";
// Import components
import Navbar from "../components/Navbar";
// Import CSS
import "./Register.modules.css";

const Register = () => {
    const [activeTab, setActiveTab] = useState("firstStep");

    useEffect(() => {
        console.log(activeTab);
    }, [activeTab]);

    function switchRender() {
        if (activeTab === "firstStep") {
            firstStepRender();
        };

        if (activeTab === "secondStep") {
            secondStepRender();
        };
    };

    const firstStepRender = () => {
        return (
            <div>
                <h1>Personnal informations</h1>
                <label id="name">Name</label>
                <input type="text" for="name"></input>
            </div>
        );
    };

    const secondStepRender = async () => {
        await setActiveTab("stepTwo");

        return (
            <div>
                <h1>Connection informations</h1>
                <form>
                    <label id="email">Email</label>
                    <input type="text" for="email"></input>

                    <label id="password">Password</label>
                    <input type="text" for="password"></input>

                    <label id="confirm-password">Please, confirm your password</label>
                    <input type="text" for="confirm-password"></input>
                </form>
            </div>
        );
    };
    return (
        <div>
            <Navbar />
            <div className="container">
                {switchRender()}
            </div>
        </div>
    );
};

export default Register;