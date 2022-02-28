import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Components 
import NewsCard from '../../component/Cards/NewsCard';

export default function News() {

    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async() => {
            await axios.get(
                'http://127.0.0.1:8000/api/news/'
            ).then( (res: any) => {
                setNews(res.data.data);
            }).catch( (err: any) => {
                alert(err.message)
            })
        }
        fetchNews();
    }, []);

  return (
        <>
        <div className="container row my-5">

            {
                news.map( (news: any) => {
                    return (
                        <NewsCard 
                        message={news?.message}
                        issuer={news?.issuer}
                        links={news?.links}
                        date={news?.date}
                        />
                    )
                })
            }

        </div>
        </>
  )
}
