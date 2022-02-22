import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components 
import SearchBar from "../../component/SearchBar";
import ProjectCard from "../../component/Cards/ProjectCard";

export default function Project() {

    const [projects, setProjects] = useState<string[]>([]);

    const [sortBy, setSortBy] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');

    const mockData = [
      {
        title: 'Project - XYZ',
        image: 'https://picsum.photos/1000/1000',
        postedAt: 'monday, May 2023',
        description: 'This is the project description and I am happy to debug my reactJS application',
        tags: [
          {
            tagName: 'ReactJS',
            tagType: 'package'
          },
          {
            tagName: 'Redux',
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
        ]
      },
      {
        title: 'Project - EFG',
        image: 'https://picsum.photos/1000/1000',
        postedAt: 'monday, May 2023',
        description: 'This is the project description and I am happy to debug my reactJS application',
        githubLink: 'https://www.github.com/Vilayat-Ali',
        tags: [
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
            tagName: 'NextJS',
            tagType: 'web-app'
          },
          {
            tagName: 'projectCard',
            tagType: 'doc'
          }
        ]
      },
      {
        title: 'Project - ABC',
        image: 'https://picsum.photos/1000/1000',
        postedAt: 'monday, May 2023',
        description: 'This is the project description and I am happy to debug my reactJS application',
        tags: [
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
        ]
      }
    ];


  return (
    <>
        <SearchBar
        affectSearch={(searchTerm: any) => setSearchTerm(searchTerm)}
        affectSort={(sortBy: any) => setSortBy(sortBy)}>
                <option value="Name">Name</option>
                <option value="Tag">Tag</option>
        </SearchBar>

        { mockData.filter(function(project){
          if(searchTerm === ''){
            return project;
          }
          else{
            if(sortBy === 'Name' && project.title.toLowerCase().includes(searchTerm.toLowerCase())){
              return project;
            }
            else if(sortBy === 'Tag'){
              var isPresent = false;
              project.tags.map(function(tag){
                if(tag.tagName.toLowerCase().includes(searchTerm.toLowerCase())){
                  isPresent = true;
                }
              });
              if(isPresent) return project;
            }
            else if(sortBy === ''){
              isPresent = false;
              if(project.title.toLowerCase().includes(searchTerm.toLowerCase())){
                isPresent = true;
              }
              project.tags.map(function(tag){
                if(tag.tagName.toLowerCase().includes(searchTerm.toLowerCase())){
                  isPresent = true;
                }
              });

              if(isPresent) return project;

            }
          }
        }).map(function(project){
          return (

            <ProjectCard 
             key={project.title}
             title={project.title}
             githubLink={project.githubLink}
             image={project.image}
             postedAt={project.postedAt}
             description={project.description} 
             tags={project.tags} />

          )
        })
      }

        

    </>
  )
}
