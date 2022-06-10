import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context/indexContext";
import Mybutton from "../button/mybutton";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className="navbar">
            <Mybutton onClick={logout}>
                Выйти
            </Mybutton>
            <div className="navbar__links">
                <Link to={"/about"}>
                    <Mybutton>
                    О сайте
                    </Mybutton>
                </Link>
                <Link to={"/posts"}>
                    <Mybutton>
                    Посты
                    </Mybutton>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;