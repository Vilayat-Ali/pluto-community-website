import React, { useState } from 'react';
import './css/search.css';

export default function SearchBar(props: any) {

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');

  function handleSearchBarText(e: any){
    e.preventDefault();
    setSearchTerm(e.target.value);
  }

  function handleSelection(e: any){
    e.preventDefault();
    setSortBy(e.target.value);
  }

  return (
    <div className="container my-5 d-flex justify-content-center" id="searchbar">
            <select className="flex-row form-select" id="select" style={{width: '40vw', backgroundColor: '#0ea2bd', color: '#fff'}} onChange={handleSelection} >
                <option className="text-center" value="">Sort By</option>
                {props.children}
            </select>
            <input type="text" className="flex-row form-control" id="search" placeholder="Search" style={{width: '55vw'}} value={searchTerm} onChange={handleSearchBarText} />
    </div>
  )
}
