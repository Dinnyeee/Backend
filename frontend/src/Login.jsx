import React, { useState } from "react";
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <Container maxWidth="sm">
            <Toolbar>
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div htmlFor="email">E-mail</div>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <div htmlFor="password">Password</div>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <div><button type="submit" className="link-btn" onClick={() => props.onFormSwitch('admin')}>Log In</button>
                </div>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            </div>
            </Toolbar>
        </Container>
    );
}