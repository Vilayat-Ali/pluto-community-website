import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components 
import SearchBar from "../../component/SearchBar";
import TeamCard from "../../component/Cards/TeamCard";

export default function Project() {

    const [projects, setProjects] = useState([]);

    const [sortBy, setsortBy] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect( () => {
        let isMount = false;

        axios.get("https://jsonplaceholder.typicode.com/comments").then(function(response: any){
            if(isMount) return;
            setProjects(projects => response.data);
        });

        return function(){ isMount = true }
    }, [])

    function selectHandler(e: any){
      e.preventDefault();
      setsortBy(sortBy => e.target.value);
    }

    function searchBarHandler(e: any){
        e.preventDefault();
        setSearchTerm(searchTerm => e.target.value);
    }

  return (
    <>
        <SearchBar>
                <option value="Name">Name</option>
                <option value="Tech">Tech</option>
        </SearchBar>

        <h1>Hello World</h1>
    </>
  )
}
