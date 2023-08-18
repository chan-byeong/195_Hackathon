import React, { useState,useEffect } from 'react'
import Filter from "../components/resultpage/Filter"
import CompanyList from '../components/resultpage/CompanyList'
import Header from "../components/Header"

import axios from 'axios'
import { baseUrl } from '../styles/common'

function ResultPage() {

  useEffect(()=>{
    fetchCompanyList();
  },[]);

  const fetchCompanyList = async () => {

    await axios.get(baseUrl+"/api/job-postings")
    .then(res => console.log(res))
    .catch(err=>console.log(err,"회사리스트 오류"));

  }
 
  return (

    <div>
      {
      <>
        <Header></Header>
        <Filter></Filter>
        <CompanyList />
        
      </>
      }

    </div>
  )
}

export default ResultPage