import React from 'react';

// components
import Timeline from "../../component/Timeline";

export default function AboutUs(){
    
    const events = [
        { 
            title: 'Founding',
            date: '23rd Feb, 2022',
            link: "https://www.github/Vilayat-Ali",
            description: "The Neuron Tech community was founded by Syed Viilayat Ali Rizvi in India. He initiated and completed the version version of the community tech infrastructure with the aim of changing the world with the positive power of tech..."

        },
        { 
            title: 'Founding',
            date: '23rd Feb, 2022',
            link: "https://www.github/Vilayat-Ali",
            description: "The Neuron Tech community was founded by Syed Viilayat Ali Rizvi in India. He initiated and completed the version version of the community tech infrastructure with the aim of changing the world with the positive power of tech..."

        },
        { 
            title: 'Founding',
            date: '23rd Feb, 2022',
            link: "https://www.github/Vilayat-Ali",
            description: "The Neuron Tech community was founded by Syed Viilayat Ali Rizvi in India. He initiated and completed the version version of the community tech infrastructure with the aim of changing the world with the positive power of tech..."

        },
        { 
            title: 'Founding',
            date: '23rd Feb, 2022',
            link: "https://www.github/Vilayat-Ali",
            description: "The Neuron Tech community was founded by Syed Viilayat Ali Rizvi in India. He initiated and completed the version version of the community tech infrastructure with the aim of changing the world with the positive power of tech..."

        }
    ]

    return (
        <div className="container container-fluid my-5 row">
            <div className="container col-12">
                <img className="img img-fluid" src="/img/about-us.jpg" alt="about-us"/>
                <figure className="text-center my-2 text-secondary">Photo credits to <a href="https://unsplashed.com">unsplashed.com</a></figure>
            </div>
            <div className="container col-12 text-secondary fs-5" style={{textAlign: 'justify'}}>
                <p className="text-justify my-4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi sapiente ex molestias temporibus, dolores deleniti quos, nam maxime adipisci rem, magnam consequuntur alias animi natus exercitationem non tempora praesentium. Earum iste aut eius consequatur corrupti laudantium perferendis laboriosam incidunt iure quas exercitationem et in nisi quaerat eum adipisci repellendus magnam, dicta similique illum, deserunt assumenda voluptatibus vel! Dolorum officiis rem non velit tempora mollitia modi autem voluptatem debitis ipsa, similique, quo reiciendis tenetur quae voluptates omnis odio maiores dicta dolores obcaecati ea! Porro sunt, inventore officia repudiandae excepturi, culpa tempora a vero neque molestias omnis, et suscipit aliquam officiis beatae.
                </p>
            </div>
            <div className="container col-12">
                <Timeline 
                title="Our Story"
                events={events}
                />
            </div>
            <div className="container col-12 text-secondary fs-5" style={{textAlign: 'justify'}}>
                <p className="text-justify my-4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi sapiente ex molestias temporibus, dolores deleniti quos, nam maxime adipisci rem, magnam consequuntur alias animi natus exercitationem non tempora praesentium. Earum iste aut eius consequatur corrupti laudantium perferendis laboriosam incidunt iure quas exercitationem et in nisi quaerat eum adipisci repellendus magnam, dicta similique illum, deserunt assumenda voluptatibus vel! Dolorum officiis rem non velit tempora mollitia modi autem voluptatem debitis ipsa, similique, quo reiciendis tenetur quae voluptates omnis odio maiores dicta dolores obcaecati ea! Porro sunt, inventore officia repudiandae excepturi, culpa tempora a vero neque molestias omnis, et suscipit aliquam officiis beatae.
                </p>
            </div>
        </div>
    )
}