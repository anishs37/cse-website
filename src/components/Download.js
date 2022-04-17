import React from 'react'
const Download = () => {

    return (
        <section className="section bg-medium-navy side-margins" id="download">
            <h1 className="title navy section-header beige-color">
                Download Ctrl+Shift+Eye
            </h1>
            <div className="columns is-vcentered hero-body pb-0">
                <ul className="column horizontally-centered">
                    <li>
                    <img src={require("./img/windows1.png")} alt="Winows logo" width="150px" height="150px"></img>
                    </li>
                    <li>
                    <a className="navy button big-button navy-border mt-3 mb-3"><strong>Windows</strong></a>
                    </li>
                </ul>
                <ul className="column horizontally-centered">
                    <li>
                    <img src={require("./img/apple.png")} alt="Winows logo" width="150px" height="150px"></img>
                    </li>
                    <li>
                    <a className="navy button big-button navy-border mt-3 mb-3"><strong>Mac</strong></a>
                    </li>
                </ul>
                <ul className="column horizontally-centered">
                    <li>
                    <img src={require("./img/linux.png")} alt="Winows logo" width="150px" height="150px"></img>
                    </li>
                    <li>
                    <a className="navy button big-button navy-border mt-3 mb-3"><strong>Linux</strong></a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Download