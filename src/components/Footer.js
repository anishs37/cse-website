import React from 'react'
const Footer = () => {
    return (
        <footer className="footer footer-margins">
            <div className="columns hero-body pb-0">
                {/* title */}
                <div>
                    <h1 className="cerulean-color footer-title ml-5 mt-3">
                        Ctrl+Shift+Eye
                    </h1>
                    <p className="ml-5 mb-3">
                        Reimagining desktop accessibility.
                    </p>
                </div>
                {/* empty column */}
                <div className="column">

                </div>
                {/* information */}
                <div className="column">
                    <h1><strong>Information</strong></h1>
                    <ul>
                        <li>
                            <a className="footer-list-item" href="#home">Home</a>
                        </li>
                        <li>
                            <a className="footer-list-item" href="#about">About</a>
                        </li>
                        <li>
                            <a className="footer-list-item light-color">.</a>
                        </li>
                    </ul>
                </div>
                {/* website links */}
                <div className="column">
                    <ul>
                        <h1><strong>Explore</strong></h1>
                        <li>
                            <a className="footer-list-item" href="#download">Download</a>
                        </li>
                        <li>
                            <a className="footer-list-item" href="process">Process</a>
                        </li>
                        <li>
                            <a className="footer-list-item" href="team">Team</a>
                        </li>
                    </ul>
                </div>
                {/* attributions */}
                <div className="column">
                    <h1><strong>Attributions</strong></h1>
                    <ul>
                        <li>
                            <a className="footer-list-item" href="#team">Eye logo by Elise Zhu</a>
                        </li>
                        <li>
                            <a className="footer-list-item" href="https://storyset.com/people">People illustrations by Storyset</a>
                        </li>
                        <li>
                            <a className="footer-list-item light-color">.</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer