import React from 'react';
import signature from "../assets/Signature.svg"
import people from "../assets/People.jpg"

const HomeAboutUs = () => {
    return (
        <section id="home-about-us" className="home-about-us">
            <div className="home-about-us-content">
                <h1>"O nas"</h1>
                <p className="about-us-content">
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </p>
                <img src={signature} alt="signature" />
            </div>
            <img className="home-about-us-image" src={people} alt="people" />
        </section>
    );
};

export default HomeAboutUs;