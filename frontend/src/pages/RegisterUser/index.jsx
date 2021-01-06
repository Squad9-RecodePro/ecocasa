import React from 'react';

import '../../assets/styles/global.css';
import './styles.css';

const RegisterUser = () => {
    return (
        <div>
            <form >
                <div>
                    <label>registro usuario</label>
                    <input type="text" name="email" placeholder="Email"/>

                </div>
                <div>
                    <label>Senha</label>
                    <input type="password" name="password" placeholder="Senha"/>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );

}

export default RegisterUser;