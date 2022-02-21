import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components 
import SearchBar from "../../component/SearchBar";
import ProjectCard from "../../component/Cards/ProjectCard";

export default function Project() {

    const [projects, setProjects] = useState<string[]>([]);

    const [sortBy, setSortBy] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect( () => {
        let isMount = false;

        axios.get("https://jsonplaceholder.typicode.com/comments").then(function(response: any){
            if(isMount) return;
            setProjects(projects => response.data);
        });

        return function(){ isMount = true }
    }, [])

    const mockData = [
      {
        tagName: 'projectCard',
        tagType: 'package'
      },
      {
        tagName: 'projectCard',
        tagType: 'tech'
      },
      {
        tagName: 'projectCard',
        tagType: 'tech'
      },
      {
        tagName: 'projectCard',
        tagType: 'web-app'
      },
      {
        tagName: 'projectCard',
        tagType: 'doc'
      }
    ];

  return (
    <>
        <SearchBar
        affectSearch={(searchTerm: any) => setSearchTerm(searchTerm)}
        affectSort={(sortBy: any) => setSortBy(sortBy)}>
                <option value="Name">Name</option>
                <option value="Tech">Tech</option>
        </SearchBar>

        <ProjectCard 
        title="VilCryptJS"
        image="https://picsum.photos/1000/1000"
        postedAt="Tue, May 2019"
        description="A new JS package for encrypting non-traditional hashes"
        tags={mockData}
        />

        <ProjectCard 
        title="VilCryptJS"
        image="https://picsum.photos/1000/1000"
        postedAt="Tue, May 2019"
        description="A new JS package for encrypting non-traditional hashes"
        tags={mockData}
        />

        <ProjectCard 
        title="VilCryptJS"
        image="https://picsum.photos/1000/1000"
        postedAt="Tue, May 2019"
        description="A new JS package for encrypting non-traditional hashes"
        tags={mockData}
        />

        <ProjectCard 
        title="VilCryptJS"
        image="https://picsum.photos/1000/1000"
        postedAt="Tue, May 2019"
        description="A new JS package for encrypting non-traditional hashes"
        tags={mockData}
        />

    </>
  )
}
