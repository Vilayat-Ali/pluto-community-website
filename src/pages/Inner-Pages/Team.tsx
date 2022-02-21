import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components 
import SearchBar from "../../component/SearchBar";
import TeamCard from '../../component/Cards/TeamCard';

export default function Team() {

    const [team, setTeam] = useState([]);

    const [sortBy, setSortBy] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect( () => {
        let isMount = false;

        axios.get("https://jsonplaceholder.typicode.com/comments").then(function(response: any){
            if(isMount) return;
            setTeam(team => response.data);
        });

        return function(){ isMount = true }
    }, [])


    const demoTeam = [
        {
            name: 'Syed Vilayat Ali Rizvi',
            role: 'Founder',
            image: '',
            twitter: '',
            github: 'https://www.github.com/Vilayat-Ali',
            linkedin: ''
        },
        {
            name: 'Member 1',
            role: 'Software Engineer',
            image: '',
            twitter: '',
            github: 'https://www.github.com/Vilaya-Ali',
            linkedin: ''
        },
        {
            name: 'Member 2',
            role: 'Founder Manager',
            image: '',
            twitter: '',
            github: 'https://www.github.com/Vilaya-Ali',
            linkedin: ''
        },
        {
            name: 'Member 3',
            role: 'Manager Founder',
            image: '',
            twitter: '',
            github: 'https://www.github.com/Vilayat-Ali',
            linkedin: ''
        }
    ];

  return (
    <>

        <SearchBar
        affectSearch={(searchTerm: any) => setSearchTerm(searchTerm)}
        affectSort={(sortBy: any) => setSortBy(sortBy)}>
                <option value="Name">Name</option>
                <option value="Tech">Role</option>
        </SearchBar>

        <div className="row">

          { demoTeam.filter((memberData) => {
              if(searchTerm === ''){
                  return memberData;
              }
              if(searchTerm !== ''){
                  if(sortBy === '' && (memberData.name.toLowerCase().includes(searchTerm.toLowerCase()) || memberData.role.toLowerCase().includes(searchTerm.toLowerCase()))){
                      return memberData;
                  }
                  if(sortBy === 'Name' && memberData.name.toLowerCase().includes(searchTerm.toLowerCase())){
                      return memberData;
                  }
                  if(sortBy === 'Role' && memberData.role.toLowerCase().includes(searchTerm.toLowerCase())){
                    return memberData;
                  }
              }
          }).map(function(member){
              return (

                    <TeamCard 
                        key={member.name}
                        name={member.name}
                        image={"https://bootdey.com/img/Content/avatar/avatar1.png"}
                        role={member.role}
                        github={member.github}
                        twitter={member.twitter}
                        linkedin={member.linkedin}
                    />
              )
          }) }

        </div>
    </>
  )
}