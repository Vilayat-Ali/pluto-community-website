import React from 'react';
import "./css/timeline.css";

export default function Timeline(props: any) {
  return (
        <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h4>{props.title}</h4>
                <ul className="timeline">
                    {
                        props.events.map(function(event: any) {
                            return (
                                <li key={event.id}>
                                    <a target="blank" href={event.link ? event.link : ""}>{event.title}</a>
                                    <a href="#" className="float-right">&nbsp;&nbsp;&nbsp;{event.date}</a>
                                    <p>{event.description}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
        </div>
  )
}
