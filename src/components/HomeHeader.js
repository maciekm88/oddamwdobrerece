import React from 'react';
import { Link } from "react-router-dom";
import homeHeroImage from "../assets/Home-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";


const HomeHeader = () => {
    return (
        <section className="home-header">
            <img className="home-header-img" src={homeHeroImage} alt="hero home"/>
            <div className="home-header-content">
                <h1 className="home-header-title">Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img className="home-header-decoration" src={decoration} alt="decoration pattern"/>
                <div className="home-header-buttons">
                    <Link className="button" to="/login"><span>ODDAJ RZECZY</span></Link>
                    <Link className="button" to="/login"><span>ZORGANIZUJ ZBIÓRKĘ</span></Link>
                </div>
            </div>
        </section>
    );
};

export default HomeHeader;