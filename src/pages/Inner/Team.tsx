import React, { useState, useEffect } from 'react';

// Components 
import SearchBar from "../../component/SearchBar";
import TeamCard from '../../component/Cards/TeamCard';
import axios from 'axios';

export default function Team() {

    const [team, setTeam] = useState([]);

    const [sortBy, setSortBy] = useState('');
    const [searchTerm, setSearchTerm] = useState('');


    async function fetchData(){
        await axios.get("http://127.0.0.1:8000/api/member/").then(res => {
            setTeam(res.data)
        }).catch((err:any) => {
            console.log(err.message)
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <>

        <SearchBar
        affectSearch={(searchTerm: any) => setSearchTerm(searchTerm)}
        affectSort={(sortBy: any) => setSortBy(sortBy)}>
                <option value="Name">Name</option>
                <option value="Role">Role</option>
        </SearchBar>

        <div className="row mx-auto">

          { team.filter(function(memberData: any){
              if(searchTerm === ''){
                  return memberData;
              }
              if(searchTerm !== ''){
                  if(sortBy === '' && (memberData.full_name.toLowerCase().includes(searchTerm.toLowerCase()) || memberData.role.toLowerCase().includes(searchTerm.toLowerCase()))){
                      return memberData;
                  }
                  if(sortBy === 'Name' && memberData.full_name.toLowerCase().includes(searchTerm.toLowerCase())){
                      return memberData;
                  }
                  if(sortBy === 'Role' && memberData.role.toLowerCase().includes(searchTerm.toLowerCase())){
                    return memberData;
                  }
              }
          }).map(function(member: any){
              return (

                    <TeamCard 
                        key={member.full_name}
                        name={member.full_name}
                        image={member.image}
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