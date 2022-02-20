import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Project() {

    const [projects, setProjects] = useState([]);

    useEffect( () => {
        (  async() => {
            await axios.get("https://jsonplaceholder.typicode.com/comments").then((res: any) => {
                setProjects(projects => res.data);
                console.log(res);
            }).catch((err: any) => {
                
            })
        } )()
    })

  return (
    <>
        {projects.map((project: any) => {
            return (
                <p key={project.id}>{project.name} : {project.email}</p>
            )
        })}
    </>
  )
}
