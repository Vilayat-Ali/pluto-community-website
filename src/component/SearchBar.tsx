import React, { useState } from 'react';
import './css/search.css';

export default function SearchBar(props: any) {

  function handleSearchBarText(e: any){
    e.preventDefault();
    props.affectSearch(e.target.value);
  }

  function handleSelection(e: any){
    e.preventDefault();
    props.affectSort(e.target.value);
  }

  return (
    <div className="container my-5 d-flex justify-content-center" id="searchbar">
            <select className="flex-row form-select" id="select" style={{width: '40vw', backgroundColor: '#0ea2bd', color: '#fff'}} onChange={handleSelection} >
                <option className="text-center" value="">Sort By</option>
                {props.children}
            </select>
            <input type="text" className="flex-row form-control" id="search" placeholder="Search" style={{width: '55vw'}} onChange={handleSearchBarText} />
    </div>
  )
}
