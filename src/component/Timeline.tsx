import React from 'react';
import "./css/timeline.css";

export default function Timeline(props: any) {
  return (
    <>
    <div className="row mx-auto">
        <div className="col">
            <div className="timeline-steps aos-init aos-animate" data-aos="fade-up">
                {
                    props.events.map(function(event:any){
                        return (
                            <div className="timeline-step">
                                <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                                    <div className="inner-circle"></div>
                                    <p className="h6 mt-3 mb-1">{event?.date}</p>
                                    <p className="h6 text-muted mb-0 mb-lg-0">{event?.title}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
    <p className="my-2">{props.title}</p>
    </>

  )
}
