import React from 'react'

const Banner = () => {
  
  return (
    <section className="hero header">
        <div className="columns is-vcentered hero-body pb-0 bg-light-blue">
          <div className="column">
            <img src={require("./img/banner.png")} alt="Image of a person holding a cursor sitting on a globe. The globe has a banner across it that says 'www'" width="600px" height="500px" />
          </div>
          <div className="column mb-9">
            <h1 className="title light banner">
            <strong>reimagining desktop accessibility.</strong>
            </h1>
            <p className="body-text dark mt-5">
            Users of our plugin are able to use their PC with only their eyes - giving those around the world who were previously limited by the ability to use their hands an easier way to browse the web and use a computer - for free.
            </p>
            <a className="button navy mt-5 mb-5" href="#download"><strong>Install Now</strong></a>
          </div>
        </div>
        {/* <hr className="mt-0"></hr> */}
    </section>
  )
}

export default Banner