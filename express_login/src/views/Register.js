import { useState, useEffect } from "react";
// Import components
import Navbar from "../components/Navbar";

const Register = () => {
    const [activeTab, setActiveTab] = useState("stepOne");

    useEffect(() => {
        console.log(activeTab);
    }, [activeTab]);

    const switchRender = () => {
        if (activeTab === "stepOne") {
            firstStepRender();
        } else {
            secondStepRender();
        };
    };

    const firstStepRender = () => {
        return (
            <h1>Personnal informations</h1>
        );
    };

    const secondStepRender = () => {
        return (
            <h1>Co informations</h1>
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