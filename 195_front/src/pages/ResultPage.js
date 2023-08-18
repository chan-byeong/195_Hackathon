import React, { useState, useEffect } from 'react'
import Filter from "../components/resultpage/Filter"
import CompanyList from '../components/resultpage/CompanyList'
import Header from "../components/Header"
import { CompanyList2 } from '../components/resultpage/CompanyCard'
import CompanyCard from '../components/resultpage/CompanyCard'
import axios from 'axios';

import axios from 'axios'
import { baseUrl } from '../styles/common'

function ResultPage() {
  const [user, setUser] = useState([])

<<<<<<< HEAD
  const getUsers = async () => { // 비동기를 동기로 처리하게 해주는 async await 문법 사용
    const response = await axios.get('http://195job.o-r.kr/api/job-postings', {
      headers : {
        'Content-Type' : 'application/json',
        'ngrok-skip-browser-warning' : '69420',
      }
    }).then(res => {console.log(res.data); setUser(res.data)});
    
    //setUser(json.data);
    
}


useEffect(() => {   // API 한번만 받아오도록 useEffect 사용
  getUsers()
}, [])
=======
  useEffect(()=>{
    fetchCompanyList();
  },[]);

  const fetchCompanyList = async () => {

    await axios.get(baseUrl+"/api/job-postings")
    .then(res => console.log(res))
    .catch(err=>console.log(err,"회사리스트 오류"));

  }
 
  return (
>>>>>>> aef3641c4eb1434a6336284f5458f6fb4492f4fb



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