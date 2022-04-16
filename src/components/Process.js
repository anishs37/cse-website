import React from 'react'

const Process = () => {
  return (
    <section className="bg-medium-blue side-margins" id="timeline">
        <h1 className="medium-blue-color mb-5">.</h1>
        <h1 className="title light section-header">Process</h1>
        <div className="demo-card-wrapper mt-6">
            <div className="demo-card demo-card--step1">
                <div className="head">
                    <div className="number-box">
                        <span>01</span>
                    </div>
                    <h2><span className="small">first</span>Steps</h2>
                </div>
                <div className="body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                    <img src={require("./img/research.png")} alt="Graphic of a computer surrounded by graphs and charts"/>
                </div>
            </div>

            <div className="demo-card demo-card--step2">
                <div className="head">
                    <div className="number-box">
                        <span>02</span>
                    </div>
                    <h2><span className="small">creating a</span>Model</h2>
                </div>
                <div className="body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                    <img src={require("./img/model.png")} alt="Graphic of a person climbing stairs"/>
                </div>
            </div>

            <div className="demo-card demo-card--step3">
                <div className="head">
                    <div className="number-box">
                        <span>03</span>
                    </div>
                    <h2><span className="small">Coding our</span> App</h2>
                </div>
                <div className="body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                    <img src={require("./img/plugin.png")} alt="Graphic of a person coding"/>
                </div>
            </div>

            <div className="demo-card demo-card--step4">
                <div className="head">
                    <div className="number-box">
                        <span>04</span>
                    </div>
                    <h2><span className="small">overcoming</span>Challenges</h2>
                </div>
                <div className="body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                    <img src={require("./img/website.png")} alt="Graphic of a group of people talking"/>
                </div>
            </div>

            <div className="demo-card demo-card--step5">
                <div className="head">
                    <div className="number-box">
                        <span>05</span>
                    </div>
                    <h2><span className="small">finishing</span> Touches</h2>
                </div>
                <div className="body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                    <img src={require("./img/features.png")} alt="Graphic of a person sitting next to a computer and holding a phone"/>
                </div>
            </div>
        
        </div>
        <hr />
    </section>
  )
}

export default Process