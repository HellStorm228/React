import React, {useContext, useState} from 'react';
import Myinput from "../components/UI/input/myinput";
import Mybutton from "../components/UI/button/mybutton";
import {AuthContext} from "../context/indexContext";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <Myinput type={"text"} placeholder={"Введите логин"}/>
                <Myinput type={"password"} placeholder={"Введите пароль"}/>
                <Mybutton>Войти</Mybutton>
            </form>
        </div>
    );
};

export default Login;