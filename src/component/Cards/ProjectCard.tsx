import React from 'react';
import "./css/projectCard.css";

// Component 

export default function ProjectCard(props: any) {

  return (
    <>
      <article className="postcard light blue text-secondary">
			<a className="postcard__img_link" href="#">
				<img className="postcard__img" src={props.image} alt="Image Title" />
			</a>
			<div className="postcard__text">
				<h1 className="postcard__title blue"><a href={props.githubLink ? props.githubLink: 'https://www.github.com'}>{props.title}</a></h1>
				<div className="postcard__subtitle small">
					<time dateTime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i>&nbsp;{props.postedAt}
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">{props.description}</div>
				<ul className="postcard__tagbox">
        { props.tags.map(function(tag: any){

          if(tag.tagType === 'tech'){
            return (
              <li className="tag__item"><i className="fa fa-microchip"></i>&nbsp;&nbsp;{tag.tagName}</li>
            )
          }

          if(tag.tagType === 'package'){
            return (
              <li className="tag__item"><i className="fa fa-box"></i>&nbsp;&nbsp;{tag.tagName}</li>
            )
          }

          if(tag.tagType === 'web-app'){
            return (
              <li className="tag__item"><i className="fa fa-globe"></i>&nbsp;&nbsp;{tag.tagName}</li>
            )
          }

          if(tag.tagType === 'doc'){
            return (
              <li className="tag__item"><i className="fa fa-book"></i>&nbsp;&nbsp;{tag.tagName}</li>
            )
          }
            
        }) }
	</ul>
			</div>
		</article>
    </>
  )
}
