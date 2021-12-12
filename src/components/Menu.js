import React from 'react';
import { Link, NavLink } from "react-router-dom";
import ScrollLink from "./ScrollLink";



const Menu = () => {
    return (
        <>
            <header className="header-container">
                <div className="header-container-lists">
                    <nav className="header_-nav">
                        <ul className="nav-list1">
                            <NavLink><Link to="/logowanie">Zaloguj</Link> </NavLink>
                            <NavLink className="list-el-yellow" ><Link to="/rejestracja">Załóż konto</Link> </NavLink>
                        </ul>
                        <ul className="nav-list2">
                            <NavLink className="list-el"><Link to="/">Start</Link> </NavLink>
                            <NavLink className="list-el"><ScrollLink path="about-app" text="O co chodzi?"></ScrollLink></NavLink>
                            <NavLink className="list-el"><ScrollLink path="about-us" text="O nas"></ScrollLink></NavLink>
                            <NavLink className="list-el"><ScrollLink path="organizations" text="Fundacja i organizacje"></ScrollLink></NavLink>
                            <NavLink className="list-el"><ScrollLink path="contact" text="Kontakt"></ScrollLink></NavLink>
                        </ul>
                    </nav>
                </div>
            </header>

        </>
    );
};

export default Menu;