import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar is-fixed-top is-spaced p-1 has-shadow is-light is-transparent bottom-border" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="mr-10 ml-2" href="#home">
            <div className="columns is-vcentered">
                <div className="column is-hidden-mobile ml-5">
                    <img src={require('./img/logo128x.png')} alt="logo of an eye with a cursor in the center"></img>
                </div>
                <div className="column is-three-quarters">
                    <h1 className="cerulean-color title mt-2">
                        Ctrl+Shift+Eye
                    </h1>
                    <p className="subtitle dark mb-2">
                        A more accessible computer
                    </p>
                </div>
            </div>
                
            </a>

            <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
                <a className="ml-3 navbar-item mr-3" href="#home">
                    <strong>Home</strong>
                </a>
                <a className="ml-3 navbar-item mr-3" href="#about">
                    <strong>About</strong>
                </a>
                <a className="ml-3 navbar-item mr-3" href="#timeline">
                    <strong>Process</strong>
                </a>
                <a className="ml-3 navbar-item mr-3" href="#team">
                    <strong>Team</strong>
                </a>
                {/* <a className="navbar-item">
                    Contact
                </a> */}
            </div>

            <div className="navbar-end">
                <div className="navbar-item mr-6">
                    <div className="buttons">
                    <a className="button navy big-button">
                        <strong>Download</strong>
                    </a>
                    </div>
                </div>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar