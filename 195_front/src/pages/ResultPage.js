import React, { useState, useEffect } from 'react'
import Filter from "../components/resultpage/Filter"
import CompanyList from '../components/resultpage/CompanyList'
import Header from "../components/Header"
import { CompanyList2 } from '../components/resultpage/CompanyCard'
import CompanyCard from '../components/resultpage/CompanyCard'
import axios from 'axios';

import { baseUrl } from '../styles/common'

function ResultPage() {
  const [user, setUser] = useState([])

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
        <Filter user={user} setUser={setUser}></Filter>
        <div className="background_color">
          <div className="recruitment_content">
            <div className="company_center">
              <div className="recruitment_content_list">
                <div className="colummLine"></div>
                <div className="company_list">

                  {user.map(user => <CompanyCard
                    key={user.id}
                    companyName={user.companyName}
                    title={user.title}
                    salary={user.salary}
                    city={user.city}
                  />)}

                </div>
              </div>
            </div>
          </div>
        </div>


      </>
    }

  </div >
)
}

export default ResultPage