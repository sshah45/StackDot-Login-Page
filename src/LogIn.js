import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


function LogInPage() {
    const [formData, setFormdata] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
    const handleFormData = () => {
        if(localStorage.getItem("token")){
            setFormdata({
                email: dummyData.email,
                password: dummyData.password,
            })
        }else {
            setFormdata({
                email: "",
                password: "",
            })
        }
    }
    handleFormData();
    },[]);
    
    const dummyData = {
        email: "abc@gmail.com",
        password: "Abcd@1234",
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            formData.email === dummyData.email &&
            formData.password === dummyData.password
        ) {
            localStorage.setItem("token", "logedIn");
            navigate("/dashboard");

        } else {
            setError("Invalid email or password.");
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 py-5">
                    <h1 className="fs-1 text-black fw-bold py-5 text-center">LogIn Form.</h1>
                    <form className="d-flex flex-column" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border-1 my-3 p-2 rounded-1"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="border-1 my-3 p-2 rounded-1"
                            required
                        />
                        <p className="text-danger">{error || ""}</p>
                        <button
                            type="submit"
                            className="my-3 p-2 rounded-1 bg-primary fw-bold text-white"
                        >
                            Login
                        </button>
                    </form>
                </div>

                <div className="col-md-6 py-5">
                    <h1 className="fs-1 text-black fw-bold py-5 text-center">Dummy Login Data</h1>
                    <p className="text-center">Email: abc@gmail.com</p>
                    <p className="text-center">Password: Abcd@1234</p>
                </div>
            </div>
        </div>
    );
}

export default LogInPage;
