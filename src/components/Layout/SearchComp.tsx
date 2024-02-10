"use client"
import {useState} from 'react'
import SearchFrag from '../Fragments/SearchFrag'

export default function SearchComp(){
  const [carTypeFilter, setCarTypeFilter] = useState("");
  const [searchYearQuery, setSearchYearQuery] = useState("");


  return <SearchFrag carTypeFilter={carTypeFilter}
  searchYearQuery={searchYearQuery}
  setCarTypeFilter={setCarTypeFilter}
  setSearchYearQuery={setSearchYearQuery}/>
}