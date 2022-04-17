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
                    <p>After learning about the number of people with physical limitations that prevent them from using a computer, we wanted to be able to come up with a way to allow these individuals to conveniently use them. </p>
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
                    <p>Two separate models were created - one for segmenting the user's eyes, and one to take these segmented eyes to predict the user's gaze location.</p>
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
                    <p>The app was primarily developed using Electron. We implemented the models using TensorflowJS and used RobotJS to control the user's mouse and keyboard. </p>
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
                    <p>One feature we wanted to add was voice to text. Unfortunately, we were not able to implement this due to problems with live audio transcription. Instead, we implemented an on-screen keyboard for users to type with their eyes.</p>
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
                    <p>To finish off our application, we styled the user interface and tested it extensively.</p>
                    <img src={require("./img/features.png")} alt="Graphic of a person sitting next to a computer and holding a phone"/>
                </div>
            </div>
        
        </div>
        <hr />
    </section>
  )
}

export default Process