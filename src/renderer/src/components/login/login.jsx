import React, { useState } from 'react';
import styled from 'styled-components';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password }); 
    };

    return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Usuario:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Contraseña:</label>
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
                <button type="submit">Entrar</button>
        </form>
    </div>
    );
};

export default Login;
