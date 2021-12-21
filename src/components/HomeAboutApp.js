import React from 'react';
import { Link } from "react-router-dom";
import shirt from "../assets/Icon-1.svg";
import bag from "../assets/Icon-2.svg";
import magnifier from "../assets/Icon-3.svg";
import reload from "../assets/Icon-4.svg";
import decoration from "../assets/Decoration.svg";

const HomeAboutApp = () => {
    return (
        <section id="home-about-app">
            <div className="home-about-app-title">
                <h1>Wystarczą 4 proste kroki</h1>
                <span className="decoration"><img src={decoration} alt="decoration sign" /></span>
            </div>
            <div className="home-about-app">
                <div className="about-app">
                    <div className="home-about-app-container">
                        <div className="about-app-content">
                            <img src={shirt} alt="shirt" />
                            <h3>Wybierz rzeczy</h3>
                            <span>ubrania, zabawki, sprzęt i inne</span>
                        </div>
                        <div className="about-app-content">
                            <img src={bag} alt="bag" />
                            <h3>Spakuj je</h3>
                            <span>skorzystaj z worków na śmieci</span>
                        </div>
                        <div className="about-app-content">
                            <img src={magnifier} alt="magnifier" />
                            <h3>
                                Zdecyduj komu <br />
                                chcesz pomóc
                            </h3>
                            <span>wybierz zaufane miejsce</span>
                        </div>
                        <div className="about-app-content">
                            <img src={reload} alt="reload" />
                            <h3>Zamów kuriera</h3>
                            <span>kurier przyjedzie w dogodnym terminie</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-button">
                <Link className="button" to="/login">
                    <span>ODDAJ RZECZY</span>
                </Link>
            </div>
        </section>
    );
};

export default HomeAboutApp;