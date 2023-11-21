import React, { useState } from "react";
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <Container maxWidth="sm">
            <Toolbar>
                <div className="auth-form-container" >
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                <div htmlFor="name">Full name</div>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                <div htmlFor="email">E-mail</div>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <div htmlFor="password">Password</div>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <div><button type="submit"><Link to = '/doctorstart'>
                    Log In
                </Link></button>
                </div></form>
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
                </div>
            </Toolbar>
        </Container>
    );
}