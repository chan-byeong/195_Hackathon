import React, { useState } from 'react';
import { baseUrl } from '../styles/common';

const JobPostingForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyName_en: '',
    phoneNumber: '',
    profileImage: null,
    sector: '',
    city: '',
    companyImages: null,
    detailAddress: '',
    detailAddress_en: '',
    employmentPeriod: '',
    workDays: '',
    workHours: '',
    details: null,
    salary: '',
    isAccommodationProvided: false,
    isFoodProvided: false,
  });

  const handleChange = (event) => {
    const { name, value, type, files, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const submitData = new FormData();

    Object.keys(formData).forEach((key) => {
      //console.log(key, key.includes("Image") , typeof key)
      //console.log(key , formData[key]);
      if(key.includes("Image") || key === "details"){
        for(let i =0 ; i<formData[key].length; i++){
          submitData.append(key,formData[key][i]);
        }
      }
      else{
        submitData.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch(baseUrl+'/api/create-job-posting', {
        method: 'POST',
        body: submitData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        alert('구직 공고 생성이 성공적으로 완료되었습니다.');
      } else {
        console.log(response);
        alert('구직 공고 생성에 실패했습니다.');
      }
    } catch (error) {
      console.log('구직 공고 생성에 실패했습니다.', error);
    }
  };

  const handlePrintFormData = () => {
    for (const [key, value] of Object.entries(formData)) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <>
      <h1>구직 공고 생성</h1>
      <form onSubmit={handleSubmit}>
        { /* 각 입력창마다 onChange 속성을 추가하여 handleChange 함수를 연결해주세요. */ }
        {/* 여기서는 일부 입력창에 onChange 속성을 추가했습니다. */}

        <label>회사 이름(한글):</label><br />
        <input type="text" name="companyName" onChange={handleChange} value={formData.companyName} required /><br /><br />

        <label>회사 이름(영어):</label><br />
        <input type="text" name="companyName_en" onChange={handleChange} value={formData.companyName_en} required /><br /><br />
        
        <label>전화번호:</label><br/>
        <input type="text" name="phoneNumber" onChange={handleChange} value={formData.phoneNumber} required/><br/><br/>

        <label>프로필 이미지:</label><br/>
        <input type="file" id="profileImage" name="profileImage" onChange={handleChange}  multiple required/><br/><br/>

        <label>업종:</label><br/>
        <input type="text" name="sector" onChange={handleChange} value={formData.sector} required/><br/><br/>

        <label>지역:</label><br/>
        <input type="text" name="city" onChange={handleChange} value={formData.city} required/><br/><br/>

        <label>회사 이미지:</label><br/>
        <input type="file" id="companyImages" name="companyImages" onChange={handleChange} multiple required/><br/><br/>

        <label>상세 주소:</label><br/>
        <input type="text" name="detailAddress" onChange={handleChange} value={formData.detailAddress} required/><br/><br/>

        <label>상세 주소(영어):</label><br/>
        <input type="text" name="detailAddress_en" onChange={handleChange} value={formData.detailAddress_en} required/><br/><br/>

        <label>고용 기간:</label><br/>
        <input type="text" name="employmentPeriod" onChange={handleChange} value={formData.employmentPeriod} required/><br/><br/>

        <label>근무일:</label><br/>
        <input type="text" name="workDays" onChange={handleChange} value={formData.workDays} required/><br/><br/>

        <label>근무시간:</label><br/>
        <input type="text" name="workHours" onChange={handleChange} value={formData.workHours} required/><br/><br/>

        <label>세부사항:</label><br/>
        <input type="file" id="details" name="details" onChange={handleChange}  multiple required/><br/><br/>

        <label>월급:</label><br/>
        <input type="number" name="salary" onChange={handleChange} value={formData.salary} required/><br/><br/>
        

        <label>숙박 제공:</label><br />
        <input
          type="checkbox"
          name="isAccommodationProvided"
          onChange={handleChange}
          checked={formData.isAccommodationProvided}
        /><br /><br />

        <label>식사 제공:</label><br />
        <input
          type="checkbox"
          name="isFoodProvided"
          onChange={handleChange}
          checked={formData.isFoodProvided}
        /><br /><br />

        <button type="submit">구직 공고 생성</button>
        <button type="button" onClick={handlePrintFormData}>formData 내용 출력</button>
      </form>
    </>
  );
};

export default JobPostingForm;
