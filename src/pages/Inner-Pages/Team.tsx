import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Team() {

    const [team, setTeam] = useState([]);

    useEffect( () => {
        (  async() => {
            await axios.get("https://jsonplaceholder.typicode.com/comments").then((res: any) => {
                setTeam(team => res.data);
                console.log(res);
            }).catch((err: any) => {
                
            })
        } )()
    })

  return (
    <>
        {team.map((member: any) => {
            return (
                <p key={member.id}>{member.name}</p>
            )
        })}
    </>
  )
}