import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Components 
import NewsCard from '../../component/Cards/NewsCard';

export default function News() {
    const demo = [
        {
            link: 'https://www.github.com/Vilayat-Ali',
            message: 'Github'
        },
        {
            link: 'https://www.github.com/Vilayat-Ali',
            message: 'Vilayat'
        },
        {
            link: 'https://www.github.com/Vilayat-Ali',
            message: 'This is a link'
        }
    ]
  return (
        <>
        <div className="container row my-5">

            {
                [...Array(5)].map( function (news: any){
                    return (
                        <NewsCard 
                        message="my message goes here"
                        issuer="Syed Vilayat"
                        links={demo}
                        date="04 May, 2020"
                        />
                    )
                })
            }

        </div>
        </>
  )
}
