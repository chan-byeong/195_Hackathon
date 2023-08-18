import React, { useState } from 'react';

const JobPostingForm = () => {
  const [formData, setFormData] = useState({
    testString: '',
    testNumber: '',
    testImages: null,
    testBoolean: false,
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
      if(key === "testImages"){
        for(let i =0 ; i<formData[key].length; i++){
          submitData.append('testImages',formData[key][i]);
        }
      }
      else{
        submitData.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch('https://9ff8-61-79-192-234.ngrok-free.app/test/posting', {
        method: 'POST',
        body: submitData,
        // headers : {
        //   'Content-Type' : 'multipart/form-data',
        //    'ngrok-skip-browser-warning': '69420',
        // }
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
        <input type="text" name="testString" onChange={handleChange} value={formData.testString} required /><br /><br />


        <label>회사 이미지:</label><br/>
        <input type="file" id="companyImages" name="testImages" onChange={handleChange} multiple required/><br/><br/>


        <label>월급:</label><br/>
        <input type="number" name="testNumber" onChange={handleChange} value={formData.testNumber} required/><br/><br/>
        

        <label>숙박 제공:</label><br />
        <input
          type="checkbox"
          name="testBoolean"
          onChange={handleChange}
          checked={formData.testBoolean}
        /><br /><br />


        <button type="submit">구직 공고 생성</button>
       
      </form>
    </>
  );
};

export default JobPostingForm;
