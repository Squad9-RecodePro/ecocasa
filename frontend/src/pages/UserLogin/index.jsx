import React from 'react';
import './styles.css';
import { useHistory } from "react-router-dom";

import Anchieta1 from '../../assets/images/anchieta2.jpg';

const UserLogin = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const baseUrl = 'http://localhost:5000/auth/';
    let history = useHistory();
    const login = (event) => {

        event.preventDefault();

        const formData = { "email": email, "password": password }
        const url = `${baseUrl}authenticate`;

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then(res => res.json())
            .then((dados) => {
                if (dados.token) {
                    localStorage.setItem('user-token', dados.token)
                    history.push("/UserPanel");
                } else {
                    alert('Email ou senha invalido!');
                }
            })

        setEmail("");
        setPassword("");
        event.preventDefault();

    }

    return (
        <>
            <div className="containerUserLogin">
                <div className="content">
                    <div className="header">
                        <p>
                            <span>Bem Vindo(a) ao</span>
                            <span className="ecoLar"> EcoLar Anchieta</span>
                        </p>
                    </div>

                    <form onSubmit={login}>
                        <h2>Login</h2>

                        <div className="container">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <input className="input" type="text" name="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="Email" required />
                        </div>
                        <div className="container">
                            <i className="fa fa-lock" aria-hidden="true"></i>
                            <input className="input" type="password" name="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Senha" required />
                        </div>
                        <button type="submit" value="Enviar" className="btn container"  >Entrar</button>
                        
                    </form>
                    <a href="./ForgotPassword">
                            Esqueceu a senha ?
                        </a>
                        <a href="./RegisterUser">
                            Ainda não possui uma conta?
                        </a>
                </div>

                <div className="container-1">

                    <img src={Anchieta1} alt=""/>
                    
                </div>
            </div>
        </>
    );
}

export default UserLogin;
