import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import Img from "./Img";

const HeaderComponent = () => {
    const history = useHistory()
    const handleClickLogin = () => {
        history.push('/login')
    }
    const handleClickSignup = () => {
        history.push('/register')
    }
    return (
        <header class="homepage_header">
            <nav class="homepage_header__nav">

                <div class="header_logo">
                    <div><i id="header_nav__logo" class="fas fa-bars"></i></div>
                    <img src="/images/hotsaka.png" />
                </div>

                <div class="header_middle">
                    <div class="header_search__input">
                        <input type="search" placeholder="Search" />
                        <button class="header_search__btn"><span><i class="fas fa-search"></i></span></button>
                    </div>
                    <button class="header_login__btn">Login</button>
                    <button class="header_register__btn">Register</button>
                </div>

                <div class="header_country">
                    <p>Become an amateur</p>
                    <img class="header_country__logo" src="/images/country-icon.svg" />
                </div>
            </nav>
        </header>
    );
};

export default HeaderComponent;
