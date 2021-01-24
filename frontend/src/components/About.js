import React from 'react';

function About(props) {
    return (
        <div>
            {/* Intro section with title and description of page */}
            <section className="aboutSec1">
                <h2>About The Creators</h2>
                <p>Meet the Creators of Wanderlust Travel App! News flash, this is not a real agency, just a fun app two web developers put together for practice!</p>
            </section>
            {/* This will be Ashtyn's descriptive/bio section */}
            <section className="aboutSec2">
                <div>
                    <img src="images/ashtyn.jpeg" alt="headshot of Ashtyn" className="headshot1" />
                </div>
                <div className="ashDiv">
                    <p>I'm Ashtyn. I'm a web developer. I'm a fashion industry runaway. I'm also a brunch enthusiast, travel junky, beach lover, and I like to take things apart and put them back together. As a fashion designer, though, the satisfaction of building something out of nothing is what brought me to web development. Learning to code was one of the trickiest, most rewarding things I have learned in an educational setting. Because the tech industry is ever-changing, and I am honestly quite competitive, my goal is to continue learning, everyday, so I can be the best that I can be.</p>
                    <a href="https://ashtync7.github.io/PortfolioAC/" target="_blank"><p>View Ashtyn's Portfolio</p></a>
                </div>
            </section>

            {/* This will be Jada's descriptive/bio section */}
            <section className="aboutSec3">
                <div className="jadaDiv">
                    <p>Recent grad of Ironhack Web Development Bootcamp, Jada is a junior web developer based in Detroit, Michigan. Jada currently manages the web development department at Encompass Healthcare and has recently developed a more user-centric and functional <a href="https://encompasshealthcare.com" target="_blank">website</a> for the company. Knowing that the tech industry is ever-changing and evolving, Jada has set out to learn new languages and frameworks and practice her coding skills with fun projects like this, while working at Encompass. Get in touch with Jada on LinkedIn <a href="www.linkedin.com/in/jada-woody">here</a>!</p>
                    <a href="https://jadawoody.github.io/portfolio/" target="_blank"><p>View Jada's Portfolio</p></a>
                </div>
                <img src="images/ta-jada.jpg" alt="headshot of Jada" className="headshot2" />
            </section>




        </div>
    );
}

export default About;