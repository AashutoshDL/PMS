import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserProfiles = () => {
    const backendUrl = import.meta.env.VITE_backend_url || "http://localhost:5000";
    const [userProfile, setUserProfile] = useState(null); // To store user profile data
    const [error, setError] = useState(null); // To store error message

    useEffect(() => {
        const fetchUserProfile = async () => {
            const token = localStorage.getItem('jwtToken');
            if (!token) {
                setError("No token found in local storage");
                return;
            }
            try {
                const res = await axios.get(`${backendUrl}/user/profile`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (res.status === 201) {
                    setUserProfile(res.data); // Store user profile data in state
                    // console.log(res.data);
                    // console.log(userProfile);
                    
                } else {
                    setError(`Unexpected response status: ${res.status}`);
                }
            } catch (error) {
                setError(error.response?.data?.message || error.message);
            }
        };

        fetchUserProfile();
    }, []); // Empty dependency array to run once on mount

    return (
<div>
            {error ? (
                <p>Error: {error}</p> // Display error message if any
            ) : userProfile ? (
                <div>
                    <h1>Email: {userProfile.user.email}</h1> {/* Display email */}
                    <h1>Username: {userProfile.user.username}</h1> {/* Display username */}
                    <h1>Password: {userProfile.user.password}</h1> {/* Display password */}
                </div>
            ) : (
                <p>Loading user profile...</p> // Display loading message if no data yet
            )}
        </div>
    );
}

export default UserProfiles;
