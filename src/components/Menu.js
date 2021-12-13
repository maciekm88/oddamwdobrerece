import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { MenuItem } from '@mui/material';



const Menu = () => {
    return (
        <>
            <header className="header-container">
                <div className="header-container-lists">
                    <nav className="header-nav">
                        <ul className="nav-list1">
                            <MenuItem><Link to="/login">Zaloguj</Link> </MenuItem>
                            <MenuItem className="list-el-yellow" ><Link to="/register">Załóż konto</Link> </MenuItem>
                        </ul>
                        <ul className="nav-list2">
                            <MenuItem className="list-el"><Link to="/">Start</Link> </MenuItem>
                            <MenuItem className="list-el"><HashLink to="./HomeAboutApp">O co chodzi?</HashLink></MenuItem>
                            <MenuItem className="list-el"><HashLink to="./HomeAboutUs">O nas</HashLink></MenuItem>
                            <MenuItem className="list-el"><HashLink to="./HomeOrganizations">Fundacja i organizacje</HashLink></MenuItem>
                            <MenuItem className="list-el"><HashLink to="./HomeContact">Kontakt</HashLink></MenuItem>
                        </ul>
                    </nav>
                </div>
            </header>

        </>
    );
};

export default Menu;