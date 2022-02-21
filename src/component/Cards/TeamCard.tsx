import React from 'react'; 
import "./css/teamCard.css";

interface teamCardType{
  name: string,
  role: string,
  image: string,
  github: string,
  twitter: string,
  linkedin: string
}

export default function TeamCard(props: teamCardType) {
  return (
    
    <div className="col-12 col-sm-6 col-lg-3">
            <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2', animationName: 'fadeInUp'}}>
              <div className="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                <div className="social-info">
                  <a href={props.github}><i className="fa fa-github"></i></a>
                  <a href={props.twitter}><i className="fa fa-twitter"></i></a>
                  <a href={props.linkedin}><i className="fa fa-linkedin"></i></a>
                  </div>
              </div>
              <div className="single_advisor_details_info">
                <h6 className="text-secondary">{props.name}</h6>
                <p className="designation text-secondary" id="role">{props.role}</p>
              </div>
            </div>
    </div>

  )
}
