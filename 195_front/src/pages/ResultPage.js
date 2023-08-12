import React, { useState,useEffect } from 'react'
import Filter from "../components/resultpage/Filter"
import CompanyList from '../components/resultpage/CompanyList'
import Header from "../components/Header"

function ResultPage() {
 
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