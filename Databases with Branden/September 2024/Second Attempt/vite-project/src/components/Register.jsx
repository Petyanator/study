import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://127.0.0.1:8008/register", {
                username,
                password,
                email,
                familyname
            });

            console.log(response.status);
        } catch (error) {
            console.error("There was an error");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username'
                />
                <br />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                />
                <br />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                />
                <br />
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;
