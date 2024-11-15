import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const backendUrl = import.meta.env.VITE_backend_url || "http://localhost:5000";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleClick = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const res = await axios.post(`${backendUrl}/auth/login`, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (res.status === 200) {
                setResponse(res.data);
                localStorage.setItem('jwtToken',res.data.token)
            } else {
                console.error("Unexpected response", res);
            }
        } catch (error) {
            if (error.response) {
                alert(`Error: ${error.response.data.message || "Unknown server error"}`);
            } else if (error.request) {
                alert("Error: Unable to connect to the server.");
            } else {
                alert("Error: Something went wrong.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
                <form onSubmit={handleClick}>
                    <h3>Email</h3>
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        id="email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                        required
                    />
                    <h3>Password</h3>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={data.password}
                        placeholder="Enter your password"
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', marginBottom: '20px' }}
                        autoComplete="current-password"
                        required
                    />
                    <button
                        type="submit"
                        style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                        disabled={isLoading}
                    >
                        {isLoading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
            {response && (
                <div>
                    <h3>Response from server</h3>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default Login;
