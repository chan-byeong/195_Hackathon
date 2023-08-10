import React from 'react'
import Filter from "../components/resultpage/Filter"
import CompanyList from '../components/resultpage/CompanyList'

function ResultPage() {


  return (

    <div>
      {
      <>
        <Filter></Filter>
        <CompanyList></CompanyList>
      </>
      }

    </div>
  )
}

export default ResultPage