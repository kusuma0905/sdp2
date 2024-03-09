import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import logo from './images/logo.jpg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async () => {
         try {
            const response = await axios.post('http://localhost:3001/login', { email, password });
            console.log(response);
            alert('Login successful');
         } catch (error) {
            alert('Invalid credentials');
         }
    };

    return (
        <div className="LoginComponent">
            <div className="LoginHead">
                <h1>ACADEMIC PROJECT MANAGEMENT SYSTEM</h1>
            </div>
            <div className="LoginComponent-in">
                <div className="Login-img">
                    <img src={logo} alt="" />
                </div>
                <div className="Login-one">
                    <input
                        type="text"
                        placeholder="Enter your email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="Login-two">
                    <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <div className="Login-three">
                    <button onClick={handleSubmit}>Submit</button>
                </div>
                <div className="Login-four">
                    <p>Already have an Account ?</p> <Link to="/register">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
