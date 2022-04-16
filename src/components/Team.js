import React from 'react'
import Member from './Member'

const Team = () => {
    const team = require('./img/us.json');
    //console.log(team)
    const socials = ["email", "linkedin", "github"];
  return (
    <section className="section bg-light-blue team-margins" id="team">
        <h1 className="title light section-header">
            Team
        </h1>
        <div className="columns is-vcentered hero-body pb-0 pt-2">
        {Object.keys(team).map(el => {
            //console.log(el)
            var soLi = {};
            socials.forEach(e => {
                if(Object.keys(team[el]).includes(e)) {
                    soLi[e] = team[el][e];
                    //console.log(soLi.toString())
                }
            });
            return <Member key={parseInt(Math.random()*10000)} name={el} img={team[el].img} role={team[el].role} info={team[el].info} socials={soLi} />
        })}
        </div>
        
    </section>
  )
}

export default Team