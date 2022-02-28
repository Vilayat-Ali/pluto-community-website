import React from 'react';
import "./css/newsCard.css";

interface linkType {link: string, message: string}

interface newsCardType{
    message: string,
    issuer: string,
    links: linkType[], 
    date: string
}

export default function NewsCard(props: newsCardType) {

  return (
    <>
        <div className="container py-2 my-2">
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                        <div className="blockquote-custom-icon shadow-sm" style={{backgroundColor: '#0ea2bd'}}><i className="fa fa-quote-left text-white"></i></div>
                        <p className="mb-0 mt-2 font-italic">{props.message}</p>
                        <p className="mb-0 mt-2 row">
                            {
                                props.links.map(function(link: {link: string, message: string}){
                                    return (
                                        <a href={link.link} className="col-12 fs-6">{link.message}</a>
                                    )
                                })
                            }
                        </p>
                        <footer className="blockquote-footer pt-4 mt-4 border-top fs-6">
                            {props.issuer} on &nbsp;
                            <span className="text-secondary">{props.date}</span>
                            </footer>
                    </blockquote>

                </div>
            </div>
        </div>
    </>
  )
}
