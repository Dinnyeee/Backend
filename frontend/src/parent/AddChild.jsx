import Container from '@mui/material/Container';
import React, { useState } from "react";


export default function AddChild(){

      const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <Container><form className="login-form" onSubmit={handleSubmit}>
                    <div htmlFor="email">Name</div>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                     <div htmlFor="email">TAJ</div>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="XXXXXXXXXX" id="taj" name="taj" />
                    <div htmlFor="password">Date of Birth</div>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <div><button type="submit">
                        Add Child
                    </button>
                    </div>
                </form>
                
        </Container> 
    )}