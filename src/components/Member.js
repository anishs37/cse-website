import React from 'react'

const Member = (props) => {
  const socials = {
    "email": {
      "cn": "social-em",
      "icon": "fa fa-envelope"
    },
    "github": {
      "cn": "social-git",
      "icon": "fa fa-github"
    },
    "linkedin": {
      "cn": "social-in",
      "icon": "fa fa-linkedin-square"
    },
  }

  console.log(props.socials)

  return (
    <div className="column">
      <div className="team">
          <div className="team-img">
              <img src={props.img} alt="Team Image"/>
          </div>
          <div className="team-content">
              <h2>{props.name}</h2>
              <h3>{props.role}</h3>
              <p>{props.info}</p>
              <div className="team-social">
                {Object.keys(socials).map(el => {
                  if(Object.keys(props.socials).includes(el)) {
                    var link = el === "email" ? "mailto:"+props.socials[el] : props.socials[el]
                    return <a key={parseInt(Math.random()*10000)} href={link} className={socials[el].cn}> <i className={socials[el].icon}></i></a>
                  }
                })}
            </div>
          </div>
          
      </div>
    </div>
  )
}

export default Member