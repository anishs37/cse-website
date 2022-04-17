import React from 'react'
const About = () => {
  return (
    <section className="section bg-medium-navy side-margins " id="about">
      <section className="hero">
        {/* first row of columns */}
        <div className="columns is-vcentered hero-body pb-0">
          {/* left column */}
          <div className="column less-bottom-margin">
            <h1 className="title beige-color section-header">
              Our Mission.
            </h1>
            <p className="body-text white-color mt-5">
              For most purposes, computer use requires a keyboard and mouse. Yet, many people are unable to use these tools, whether it be due to a physical limitation or other cause. We provide a way for people to browse the web using only their eyes, pioneering a revolutionary reimagining of internet accessibility.
            </p>
            <a className="button big-button navy navy-border mt-5" href="#about-plugin"><strong>Learn More</strong></a>
          </div>
          {/* right column */}
          <div className="column less-bottom-margin ml-5 is-hidden-mobile">
            <img src={require("./img/aboutpic1.png")} alt="a person holding a magnifying class over an internet search bar" width="700px" height="500px" /></div>
        </div>
        {/* second row of columns */}
        <section className="section" id="about-plugin">
          <div className="columns is-vcentered hero-body pb-0">
            {/* left column */}
            <div className="column mr-5 mobile-about-image">
              <img src={require("./img/aboutpic2.png")} alt="a person holding a magnifying class over an internet search bar" width="700px" height="500px" />
            </div>
            {/* right column */}
            <div className="column ml-5">
              <h1 className="title beige-color section-header mr-3">
                Our App.
              </h1>
              <p className="body-text white-color mt-5">
                Ctrl+Shift+Eye (CSE) is a customizable, easy-to-use application that allows users to move their cursor using only their eyes. Additional features like an on-screen keyboard further supports our users' needs without the hassle of using it in conjunction with other software, making CSE an essential addition to your machine.
              </p>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}
export default About