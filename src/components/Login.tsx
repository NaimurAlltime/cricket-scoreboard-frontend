import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('token', data.token); // Save token in local storage
            navigate('/'); // Redirect to home
        } else {
            alert('Login failed: ' + data.message);
        }
    };

    return (
        <form onSubmit={handleLogin} className="max-w-md mx-auto p-4">
            <h2 className="text-2xl mb-4">Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border p-2 mb-2 w-full"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 mb-4 w-full"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 w-full">Login</button>
        </form>
    );
};

export default Login;
